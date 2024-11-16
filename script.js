document.addEventListener("DOMContentLoaded", function() {
    const authSection = document.getElementById("auth-section");
    const bookingSection = document.getElementById("booking-section");
    const lostItemSection = document.getElementById("lost-item-section");
    const complaintSection = document.getElementById("complaint-section");
    const querySection = document.getElementById("query-section");

    const authForm = document.getElementById("auth-form");
    const authBtn = document.getElementById("auth-btn");
    const toggleAuthBtn = document.getElementById("toggle-auth-btn");

    const currentUser = localStorage.getItem("username");

    // Show booking section if user is logged in
    if (currentUser) {
        authSection.classList.add("hidden");
        bookingSection.classList.remove("hidden");
    }

    // Toggle between login and signup form
    toggleAuthBtn.addEventListener("click", function() {
        if (authBtn.textContent === "Login") {
            authBtn.textContent = "Sign Up";
            toggleAuthBtn.textContent = "Already have an account? Login";
        } else {
            authBtn.textContent = "Login";
            toggleAuthBtn.textContent = "Don't have an account? Sign Up";
        }
    });

    // Handle authentication form submission
    authForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (authBtn.textContent === "Login") {
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (storedUsername === username && storedPassword === password) {
                localStorage.setItem("username", username);
                authSection.classList.add("hidden");
                bookingSection.classList.remove("hidden");
            } else {
                alert("Incorrect username or password.");
            }
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("Signup successful! You can now log in.");
        }
    });

    // Booking Form Submission
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const pickupLocation = document.getElementById("pickup-location").value;
        const dropoffLocation = document.getElementById("dropoff-location").value;
        const rideType = document.getElementById("ride-type").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const bookingDetails = `Pickup Location: ${pickupLocation}\nDropoff Location: ${dropoffLocation}\nRide Type: ${rideType}\nDate: ${date}\nTime: ${time}`;
        document.getElementById("booking-details").textContent = bookingDetails;
        document.getElementById("confirmation-message").classList.remove("hidden");
    });

    // Lost Item Report Form
    const lostItemForm = document.getElementById("lost-item-form");
    lostItemForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const lostItem = document.getElementById("lost-item").value;
        const itemDescription = document.getElementById("item-description").value;
        alert(`Lost Item Reported: ${lostItem}\nDescription: ${itemDescription}`);
    });

    // Complaint Form
    const complaintForm = document.getElementById("complaint-form");
    complaintForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const complaintType = document.getElementById("complaint-type").value;
        const complaintDescription = document.getElementById("complaint-description").value;
        alert(`Complaint Reported: ${complaintType}\nDescription: ${complaintDescription}`);
    });

    // Query Form
    const queryForm = document.getElementById("query-form");
    queryForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const queryType = document.getElementById("query-type").value;
        const queryDescription = document.getElementById("query-description").value;
        alert(`Query Submitted: ${queryType}\nDescription: ${queryDescription}`);
    });
});
