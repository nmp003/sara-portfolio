// Navbar scroll behavior

//let navbar = document.querySelector(".navbar");
let cupcakesSection = document.querySelector(".cupcakes");
let isScrolling;

window.addEventListener("scroll", function () {
    // Get viewport dimensions
    let cupcakesRect = cupcakesSection.getBoundingClientRect();

    // Check if user is within the "Cupcakes" section
    if (cupcakesRect.top < window.innerHeight && cupcakesRect.bottom > 0) {
        // Show navbar while scrolling
        navbar.style.opacity = "1";

        // Clear previous timeout
        clearTimeout(isScrolling);

        // Set a timeout to fade out after scrolling stops
        isScrolling = setTimeout(() => {
            navbar.style.opacity = "0.5"; // Adjust fade level as needed
        }, 500); // Delay before fading out
    } else {
        // Ensure navbar remains fully visible outside "Cupcakes" section
        navbar.style.opacity = "1";
    }
});


// carousel behavior

(function () {
    "use strict";

    // Vertical Slider object
    const vertical_slider = {

        // Class selector for slider wrapper
        slider_class: ".slider",

        // Function to scroll to the selected slide
        show_slide: function (slide_id, context_item) {
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
            if (slide_container) {
                const slides = slide_container.querySelectorAll(".slide");
                if (slides && slides[slide_id]) {

                    // Smooth scroll directly to the slide
                    slides[slide_id].scrollIntoView({ behavior: "smooth", block: "start" });

                    // Update active class
                    const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                    if (active_context_item) {
                        active_context_item.classList.remove("active");
                    }

                    context_item.classList.add("active");
                }
            }
        },

        // Attach click handlers to navigation items
        init_slider: function (slider) {
            const navigation_items = slider.querySelectorAll(".slide_navigation a");

            navigation_items.forEach(function (nav_item, index) {
                nav_item.addEventListener("click", function (e) {
                    e.preventDefault();
                    vertical_slider.show_slide(index, nav_item);
                });
            });
        },

        // Initialize all sliders on the page
        init: function () {
            document.querySelectorAll(this.slider_class).forEach((slider) => {
                this.init_slider(slider);
            });
        }
    };

    // Start the script
    vertical_slider.init();
})();


// mobile slider

const navLinks = document.querySelectorAll(".carousel-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Scroll to target
      const targetSlide = document.querySelector(link.getAttribute("href"));
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }

      // Update active class
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });


  //Order Page interaction

 
function changeImage(event, src) {
        document.getElementById('mainImage').src = src;
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        event.target.classList.add('active');
    }


