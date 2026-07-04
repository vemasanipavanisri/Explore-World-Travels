// Welcome message
console.log("Welcome to Explore World Travels!");

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Book Now button
const button = document.querySelector(".hero-content button");

button.addEventListener("click", () => {
    alert("Thank you for choosing Explore World Travels! Booking feature will be available soon.");
});