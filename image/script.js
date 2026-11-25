
const galleryImages = document.querySelectorAll(".gallery img");

const modal = document.getElementById("modal");
const slideImage = document.getElementById("slideImage");
const imageCount = document.getElementById("imageCount");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");

let currentIndex = 0;
let autoPlay = null;

// Display the selected image
function showImage(index) {
    currentIndex =
        (index + galleryImages.length) % galleryImages.length;

    slideImage.src = galleryImages[currentIndex].src;
    slideImage.alt = galleryImages[currentIndex].alt;

    imageCount.textContent =
        `Image ${currentIndex + 1} of ${galleryImages.length}`;
}

// Open slideshow when an image is clicked
galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        modal.classList.add("active");
        showImage(index);
    });
});

// Next image
nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// Previous image
prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

// Stop automatic slideshow
function stopAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = null;
    autoBtn.textContent = "▶ Auto Play";
}

// Start or stop automatic slideshow
autoBtn.addEventListener("click", () => {
    if (autoPlay) {
        stopAutoPlay();
    } else {
        autoBtn.textContent = "❚❚ Pause";
        autoPlay = setInterval(() => {
            showImage(currentIndex + 1);
        }, 2500);
    }
});

// Close slideshow
function closeGallery() {
    modal.classList.remove("active");
    stopAutoPlay();
}

closeBtn.addEventListener("click", closeGallery);

// Close when clicking the dark background
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeGallery();
    }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    if (event.key === "Escape") {
        closeGallery();
    }
});
