// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    const authSection = document.getElementById("auth-section");
    const bookingSection = document.getElementById("booking-section");
    const bookingForm = document.getElementById("booking-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const bookingDetails = document.getElementById("booking-details");
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

    // Handle booking form submission
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get input values
        const pickupLocation = document.getElementById("pickup-location").value;
        const dropoffLocation = document.getElementById("dropoff-location").value;
        const rideType = document.getElementById("ride-type").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Display the confirmation message
        bookingDetails.textContent = `Pickup Location: ${pickupLocation} \nDropoff Location: ${dropoffLocation} \nRide Type: ${rideType} \nDate: ${date} \nTime: ${time}`;
        confirmationMessage.classList.remove("hidden");

        // Clear the form fields
        bookingForm.reset();
    });
});
