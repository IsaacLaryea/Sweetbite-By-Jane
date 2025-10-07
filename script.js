// Sweetbite by Jane - Interactive JavaScript

// Sample cake data
const cakes = [
  {
    id: 1,
    name: "Sweet Combo Deal",
    description:
      "Perfect combo for sharing! Includes slice cake, 2 pies, 4 spring rolls, 3 pancakes, and a drink.",
    price: 200.0,
    category: "combo",
    image: "🍽️",
    video: "videos/pie and cake combo.mp4",
    flavors: ["Mixed Selection"],
    size: "Combo Pack",
    serves: "4-6 people",
  },
  {
    id: 2,
    name: "Cupcake Pack",
    description:
      "Delicious pack of 6 freshly baked cupcakes in various flavors. Perfect for small celebrations!",
    price: 150.0,
    category: "combo",
    image: "🧁",
    video: "videos/six cupcakes.mp4",
    flavors: ["Mixed Flavors"],
    size: "6 Cupcakes",
    serves: "6 people",
  },
  {
    id: 3,
    name: "Birthday Cake (6 inches, 2 layers)",
    description:
      "Classic birthday cake, 6 inches, two layers. Customizable flavors and decorations.",
    price: 370.0,
    category: "birthday",
    image: "images/1.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "6 inches (2 layers)",
    serves: "6-8 people",
  },
  {
    id: 4,
    name: "Birthday Cake (8 inches, 2 layers)",
    description:
      "Classic birthday cake, 8 inches, two layers. Customizable flavors and decorations.",
    price: 450.0,
    category: "birthday",
    image: "images/2.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "8 inches (2 layers)",
    serves: "10-14 people",
  },
  {
    id: 5,
    name: "Birthday Cake (10 inches, 2 layers)",
    description:
      "Classic birthday cake, 10 inches, two layers. Customizable flavors and decorations.",
    price: 650.0,
    category: "birthday",
    image: "images/3.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "10 inches (2 layers)",
    serves: "16-20 people",
  },
  {
    id: 6,
    name: "Birthday Cake (12 inches, 2 layers)",
    description:
      "Classic birthday cake, 12 inches, two layers. Customizable flavors and decorations.",
    price: 850.0,
    category: "birthday",
    image: "images/4.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "12 inches (2 layers)",
    serves: "22-28 people",
  },
  {
    id: 7,
    name: "Birthday Cake (6 inches, 3 layers)",
    description:
      "Classic birthday cake, 6 inches, three layers. Customizable flavors and decorations.",
    price: 550.0,
    category: "birthday",
    image: "images/5.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "6 inches (3 layers)",
    serves: "8-10 people",
  },
  {
    id: 8,
    name: "Birthday Cake (8 inches, 3 layers)",
    description:
      "Classic birthday cake, 8 inches, three layers. Customizable flavors and decorations.",
    price: 650.0,
    category: "birthday",
    image: "images/6.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "8 inches (3 layers)",
    serves: "12-16 people",
  },
  {
    id: 9,
    name: "Birthday Cake (10 inches, 3 layers)",
    description:
      "Classic birthday cake, 10 inches, three layers. Customizable flavors and decorations.",
    price: 950.0,
    category: "birthday",
    image: "images/7.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "10 inches (3 layers)",
    serves: "18-24 people",
  },
  {
    id: 10,
    name: "Birthday Cake (12 inches, 3 layers)",
    description:
      "Classic birthday cake, 12 inches, three layers. Customizable flavors and decorations.",
    price: 1250.0,
    category: "birthday",
    image: "images/8.jpg",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "12 inches (3 layers)",
    serves: "26-34 people",
  },
  {
    id: 11,
    name: "Cupcake Box (6 in a box)",
    description:
      "A box of 6 freshly baked cupcakes in assorted flavors. Perfect for small celebrations!",
    price: 150.0,
    category: "cupcake",
    image: "🧁",
    video: "videos/six cupcakes.mp4",
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "6 Cupcakes",
    serves: "6 people",
  },
  {
    id: 12,
    name: "Cupcake Box (12 in a box)",
    description:
      "A box of 12 freshly baked cupcakes in assorted flavors. Great for parties and sharing!",
    price: 270.0,
    category: "cupcake",
    image: "images/12c.jpg", // This is a picture, not an emoji
    // Remove the video property for this cake
    flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    size: "12 Cupcakes",
    serves: "12 people",
  },
  {
    id: 13,
    name: "Bite Combo Deal",
    description:
      "4 spring rolls, 3 samosa, 2 pie, 1 drink. Perfect for a quick snack or sharing!",
    price: 130.0,
    category: "combo",
    image: "images/combo2.png", // This is a picture, not an emoji
    flavors: ["Assorted"],
    size: "Snack Combo",
    serves: "1-2 people",
  },
  {
    id: 14,
    name: "Bento Cake Combo",
    description:
      "1 bento cake and 2 cupcakes. A delightful treat for yourself or a loved one!",
    price: 200.0,
    category: "combo",
    image: "🍰",
    video: "videos/ib2c.mp4",
    flavors: ["Any flavor of your choice"],
    size: "1 Bento Cake + 2 Cupcakes",
    serves: "2-3 people",
  },
  {
    id: 15,
    name: "Cake in Bowl",
    description:
      "Cake in a bowl (any flavor of your choice). Moist, delicious, and perfect for one!",
    price: 70.0,
    category: "combo",
    image: "🍮",
    video: "videos/slice.mp4",
    flavors: ["Any flavor of your choice"],
    size: "Single Bowl",
    serves: "1 person",
  },
  {
    id: 16,
    name: "Slice Cake - Chocolate, Vanilla or Red Velvet",
    description:
      "A delicious slice of rich chocolate, vanilla or red velvet cake.",
    price: 70.0,
    category: "slicecake",
    image: "🍫",
    video: "videos/cake slice.mp4",
    flavors: ["Chocolate, Vanilla, Red Velvet"],
    size: "1 Slice",
    serves: "1 person",
  },
  {
    id: 17,
    name: "Slice Cake - Mixed Flavours",
    description: "A slice with a mixture of all our cake flavours.",
    price: 70.0,
    category: "slicecake",
    image: "🍥",
    video: "videos/slice.mp4",
    flavors: ["Chocolate", "Vanilla", "Red Velvet"],
    size: "1 Slice (Mixed)",
    serves: "1 person",
  },
  {
    id: 18,
    name: "Small Size Cake Parfait - Chocolate, Vanilla or Red Velvet",
    description:
      "A small cup of chocolate cake parfait. Perfect for a sweet treat!",
    price: 30.0,
    category: "parfait",
    image: "🍫",
    video: "videos/parfait.mp4",
    flavors: ["Chocolate, Vanilla, Red Velvet"],
    size: "Small Cup",
    serves: "1 person",
  },
  {
    id: 19,
    name: "Small Size Cake Parfait - Mixed Flavours",
    description:
      "A small cup of parfait with a mixture of all our cake flavours.",
    price: 30.0,
    category: "parfait",
    image: "🍥",
    video: "videos/mixed.mp4",
    flavors: ["Chocolate", "Vanilla", "Red Velvet"],
    size: "Small Cup (Mixed)",
    serves: "1 person",
  },
];

// Global variables
let currentFilter = null; // No cakes shown by default

// DOM elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const cakesGrid = document.getElementById("cakesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contactForm");
const cakesSectionTitle = document.getElementById("cakesSectionTitle"); // Add this in your HTML

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  // Don't load cakes by default
  setupSmoothScrolling();
  setupFormValidation();
}

// Event Listeners
function setupEventListeners() {
  // Mobile navigation
  hamburger.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking on nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => filterCakes(e.target.dataset.filter));
  });

  // Navbar scroll effect
  window.addEventListener("scroll", handleNavbarScroll);

  // Touch events for better mobile interaction
  setupTouchEvents();
}

// Mobile Navigation
function toggleMobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
}

// Cake Catalog
function loadCakes() {
  cakesGrid.innerHTML = "";
  if (!currentFilter) {
    cakesSectionTitle.textContent = "";
    return;
  }
  let sectionTitle = "";
  let filteredCakes = [];
  if (currentFilter === "birthday") {
    sectionTitle = "Birthday Cakes";
    filteredCakes = cakes.filter((cake) => cake.category === "birthday");
  } else if (currentFilter === "combo") {
    sectionTitle = "Combo Deals";
    filteredCakes = cakes.filter((cake) => cake.category === "combo");
  } else if (currentFilter === "cupcake") {
    sectionTitle = "Cupcake Boxes";
    filteredCakes = cakes.filter((cake) => cake.category === "cupcake");
  } else if (currentFilter === "slicecake") {
    sectionTitle = "Slice Cakes";
    filteredCakes = cakes.filter((cake) => cake.category === "slicecake");
  } else if (currentFilter === "parfait") {
    sectionTitle = "Small Size Cake Parfaits";
    filteredCakes = cakes.filter((cake) => cake.category === "parfait");
  }
  cakesSectionTitle.textContent = sectionTitle;
  if (filteredCakes.length === 0) {
    cakesGrid.innerHTML =
      '<div class="no-cakes">No cakes available in this category.</div>';
    return;
  }
  filteredCakes.forEach((cake) => {
    const cakeCard = createCakeCard(cake);
    cakesGrid.appendChild(cakeCard);
  });
}

function createCakeCard(cake) {
  const card = document.createElement("div");
  card.className = "cake-card";
  let mediaHtml = "";

  // Show image for birthday cakes, id 12, and id 13 if image is a file
  if (
    (cake.category === "birthday" || cake.id === 12 || cake.id === 13) &&
    cake.image &&
    cake.image.match(/\.(jpg|jpeg|png|gif)$/i)
  ) {
    mediaHtml = `<img src="${cake.image}" alt="${cake.name}" style="width:100%;height:180px;object-fit:cover;border-radius:12px;background:#fff;" />`;
  } else if (cake.video) {
    // Video loads and plays only after metadata is loaded
    mediaHtml = `
      <div style="width:100%;height:180px;display:flex;align-items:center;justify-content:center;position:relative;">
        <video class="cake-video" style="width:100%;height:180px;object-fit:cover;border-radius:12px;display:none;" loop muted autoplay playsinline preload="auto">
          <source src="${cake.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-loading" style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:12px;">
          <span style="font-size:1.2rem;color:#888;">Loading video...</span>
        </div>
      </div>
    `;
  } else {
    mediaHtml = `<span style="font-size: 4rem;">${cake.image}</span>`;
  }

  card.innerHTML = `
        <div class="cake-image" style="width:100%;height:180px;overflow:hidden;display:flex;align-items:center;justify-content:center;">
            ${mediaHtml}
        </div>
        <div class="cake-info">
            <h3 class="cake-name">${cake.name}</h3>
            <p class="cake-description">${cake.description}</p>
            <div class="cake-details">
                <p><strong>Size:</strong> ${cake.size}</p>
                <p><strong>Flavors:</strong> ${cake.flavors.join(", ")}</p>
            </div>
            <div class="cake-price">${cake.price.toFixed(0)} Cedis</div>
            <a href="#contact" class="contact-jane-btn" onclick="scrollToContact()">
                <i class="fas fa-phone"></i> Contact Us
            </a>
        </div>
    `;

  // Ensure videos are loaded before showing
  setTimeout(() => {
    const video = card.querySelector("video.cake-video");
    const loadingDiv = card.querySelector(".video-loading");
    if (video) {
      video.addEventListener("loadeddata", () => {
        video.style.display = "block";
        if (loadingDiv) loadingDiv.style.display = "none";
      });
    }
  }, 0);

  return card;
}

function filterCakes(filter) {
  currentFilter = filter;
  // Update active filter button
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    }
  });
  loadCakes();
}

// Contact Functions
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

// Form Handling

function handleContactSubmission(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const contactData = {
    name: formData.get("contactName"),
    phone: formData.get("contactPhone"),
    eventDate: formData.get("eventDate"),
    cakeType: formData.get("cakeType"),
    guestCount: formData.get("guestCount"),
    message: formData.get("contactMessage"),
  };

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<span class="loading"></span> Sending...';
  submitBtn.disabled = true;

  // Simulate message sending
  setTimeout(() => {
    console.log("Contact message sent:", contactData);
    showSuccessMessage(
      "Message sent successfully! Jane will get back to you soon with a personalized quote."
    );
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Utility Functions
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function setupFormValidation() {
  // Set minimum date for event to today
  const eventDateInput = document.getElementById("eventDate");
  if (eventDateInput) {
    const today = new Date();
    eventDateInput.min = today.toISOString().split("T")[0];
  }
}

function showSuccessMessage(message) {
  const notification = document.createElement("div");
  notification.className = "success-message";
  notification.style.position = "fixed";
  notification.style.top = "50%";
  notification.style.left = "50%";
  notification.style.transform = "translate(-50%, -50%)";
  notification.style.zIndex = "3000";
  notification.style.maxWidth = "400px";
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}

// Add some interactive animations
function addHoverEffects() {
  const cakeCards = document.querySelectorAll(".cake-card");
  cakeCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Call addHoverEffects after cakes are loaded
const originalLoadCakes = loadCakes;
loadCakes = function () {
  originalLoadCakes();
  setTimeout(addHoverEffects, 100);
};

// Touch events for better mobile interaction
function setupTouchEvents() {
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchend",
    function (e) {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe up - close mobile menu if open
        if (navMenu.classList.contains("active")) {
          closeMobileMenu();
        }
      } else {
        // Swipe down - could be used for other interactions
      }
    }
  }

  // Prevent zoom on double tap for buttons
  document
    .querySelectorAll(".btn, .filter-btn, .add-to-cart")
    .forEach((button) => {
      button.addEventListener("touchend", function (e) {
        e.preventDefault();
        this.click();
      });
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll handler
window.addEventListener("scroll", debounce(handleNavbarScroll, 10));

// Add loading states for better UX
function showLoadingState(element, text = "Loading...") {
  const originalContent = element.innerHTML;
  element.innerHTML = `<span class="loading"></span> ${text}`;
  element.disabled = true;

  return function hideLoadingState() {
    element.innerHTML = originalContent;
    element.disabled = false;
  };
}

// Add error handling for form submissions
function handleFormError(form, errorMessage) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = errorMessage;

  form.insertBefore(errorDiv, form.firstChild);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Export functions for global access
window.scrollToContact = scrollToContact;
