// Selecting elements from the DOM
const cartIcon = document.querySelector("header img.cart");
const cartNotification = document.querySelector(".cartNotification");
const imageContainers = document.querySelectorAll(".imageContainer");
const minusButton = document.querySelector(".minus");
const quantityDisplay = document.querySelector(".quantity");
const plusButton = document.querySelector(".plus");
const addToCartButton = document.querySelector(".toCart");
const cartSection = document.querySelector(".cartSection");
const cartBody = document.querySelector(".cartBody");
const finalQuantityDisplay = document.querySelector(".finalQuantity");
const totalDisplay = document.querySelector(".total");
const lightbox = document.querySelector(".lightbox");
const productImg = document.querySelector("section.lightbox .productImg img");
const thumbnails = document.querySelectorAll("section.lightbox .thumbnail");
const closeLightboxButton = document.querySelector(".closeIcon");
const previousImageButton = document.querySelector(".previousIcon");
const nextImageButton = document.querySelector(".nextIcon");

// Function to toggle the cart section
const toggleCartSection = () => {
    // Listen for a click on the cart icon
    cartIcon.addEventListener("click", () => {
        cartSection.classList.toggle("activate");
        updateCartContent();
    });

    // Listen for a click on the "Add to Cart" button
    addToCartButton.addEventListener("click", () => {
        cartSection.classList.add("activate");
        cartNotification.setAttribute("data-count", quantityDisplay.innerText);
        setTimeout(() => {
            cartSection.classList.remove("activate");
        }, 3000);
        updateCartContent();
    });
};

// Function to update the cart content
const updateCartContent = () => {
    if (parseInt(quantityDisplay.innerText) === 0) {
        // Display a message if the cart is empty
        cartBody.innerHTML = `<p class="empty">Your cart is empty</p>`;
        setTimeout(() => {
            cartSection.classList.remove("activate");
        }, 2000);
    }
    else {
        // Display the selected product details
        cartBody.innerHTML = `
            <div class="first">
                <div class="selectedProduct">
                    <img src="${document.querySelector("section.left .productImg img").src}" alt="">
                </div>
                <div class="productDetails">
                    <div class="title">Fall Limited Edition Sneakers</div>
                    <div class="bill">$125.00 x <span class="finalQuantity">${quantityDisplay.innerText}</span> <span class="total">${"$" + (125.00 * parseInt(quantityDisplay.innerText)) + ".00"}</span></div>
                </div>
                 <img src="./images/icon-delete.svg" alt="Delete Btn" class="deleteBtn">
            </div>
            <div class="checkoutBtn">Checkout</div>`;

        // Add a click event listener to the delete button
        const deleteButton = document.querySelector("img.deleteBtn");
        deleteButton.addEventListener("click", () => {
            // Clear the cart and update the display
            cartBody.innerHTML = `<p class="empty">Your cart is empty</p>`;
            quantityDisplay.innerText = 0;
            cartNotification.setAttribute("data-count", quantityDisplay.innerText);
            setTimeout(() => {
                cartSection.classList.remove("activate");
            }, 1500);
        });
    }
};

// Function to handle thumbnail selection
const selectThumbnail = () => {
    imageContainers.forEach(container => {
        const thumbnails = container.querySelectorAll(".thumbnail");
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("click", () => {
                thumbnails.forEach(thumbnail => {
                    thumbnail.classList.remove("selected");
                });
                thumbnail.classList.add("selected");
                container.querySelector(".productImg img").src = thumbnail.querySelector("img").src;
            });
        });
    });
};

// Function to manage item quantity
const manageQuantity = () => {
    let items = 0;
    plusButton.addEventListener("click", () => {
        // Increase item quantity
        items++;
        quantityDisplay.innerText = items;
    });
    minusButton.addEventListener("click", () => {
        if (items > 0) {
            // Decrease item quantity (if greater than 0)
            items--;
            quantityDisplay.innerText = items;
        }
    });
};

// Function to change icon colors on hover
const changeIconColor = () => {
    closeLightboxButton.addEventListener("mouseenter", () => {
        closeLightboxButton.src = "./images/icon-close-orange.svg";
    });
    closeLightboxButton.addEventListener("mouseleave", () => {
        closeLightboxButton.src = "./images/icon-close-white.svg";
    });
    previousImageButton.addEventListener("mouseenter", () => {
        previousImageButton.src = "./images/icon-previous-orange.svg";
    });
    previousImageButton.addEventListener("mouseleave", () => {
        previousImageButton.src = "./images/icon-previous-dark.svg";
    });
    nextImageButton.addEventListener("mouseenter", () => {
        nextImageButton.src = "./images/icon-next-orange.svg";
    });
    nextImageButton.addEventListener("mouseleave", () => {
        nextImageButton.src = "./images/icon-next-dark.svg";
    });
};

// Function to toggle the image lightbox
const toggleImageLightbox = () => {
    document.querySelector("section.left .productImg").addEventListener("click", () => {
        // Display the lightbox
        lightbox.style.display = "block";
        //Display the same image in the lightbox on whick it was clicked
        productImg.src = document.querySelector("section.left .productImg img").src;
    });
    closeLightboxButton.addEventListener("click", () => {
        // Close the lightbox when the close button is clicked
        lightbox.style.display = "none";

        //Reset Lightbox Style onclicking close button
        productImg.src = "./images/image-product-1.jpg";
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove("selected");
        });
    });
};

const imageSlider = () => {
    let currentImage = 1;

    const totalImages = 4;

    nextImageButton.addEventListener("click", () => {
        currentImage = (currentImage % totalImages) + 1; // Loop back to 1 after the last image
        productImg.src = `./images/image-product-${currentImage}.jpg`;

        //Add 'selected' class to the current image
        thumbnails.forEach((thumbnail, index) => {
            if (index === currentImage - 1) {
                thumbnails.forEach(thumbnail => {
                    thumbnail.classList.remove("selected");
                });
                thumbnail.classList.add("selected");
            }
        });
    });

    previousImageButton.addEventListener("click", () => {
        currentImage = (currentImage - 2 + totalImages) % totalImages + 1; // Handle negative values correctly
        productImg.src = `./images/image-product-${currentImage}.jpg`;

        //Add 'selected' class to the current image
        thumbnails.forEach((thumbnail, index) => {
            if (index === currentImage - 1) {
                thumbnails.forEach(thumbnail => {
                    thumbnail.classList.remove("selected");
                });
                thumbnail.classList.toggle("selected");
            }
        });
    });
};

// Initialize the functions
toggleCartSection();
selectThumbnail();
manageQuantity();
toggleImageLightbox();
changeIconColor();
imageSlider();
