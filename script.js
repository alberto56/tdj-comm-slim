const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
}

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  closeMobileMenu();
});
window.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    closeMobileMenu();
  }
});

const navItems = document.querySelectorAll("#navs ul li");
navItems.forEach(item => {
  item.addEventListener("click", closeMobileMenu);
});


document.querySelectorAll('navs lien').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const showMoreContent = document.querySelectorAll(".show-more-content");
const showMoreBtn = document.getElementById("show-more-btn");

showMoreBtn.addEventListener("click", () => {
  showMoreContent.forEach((content) => {
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
  showMoreBtn.textContent =
    showMoreBtn.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-button");
  const paragraphs = document.querySelectorAll(".paragraph");

  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      paragraphs[index].classList.toggle("hidden");
      button.classList.toggle("rotate-45");
    });
  });
});

let currentIndex = 0;
const items = document.querySelectorAll('#slider > div');
const totalItems = items.length;

function updateSlider() {
    const offset = -currentIndex * 200; // Adjust based on item width
    document.getElementById('slider').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
}

function submitForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const messageInput = document.getElementById("message-input");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const successMessage = document.getElementById("success-message");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (messageInput.value.trim() === "") {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (isValid) {
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000); 
  } else {
    successMessage.classList.add("hidden");
    
    setTimeout(() => {
      nameError.classList.add("hidden");
      emailError.classList.add("hidden");
      messageError.classList.add("hidden");
    }, 5000);
  }
}

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

if (isValid) {
  successMessage.classList.remove("hidden");
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 5000); 
}else {
  successMessage.classList.add("hidden");
  
  setTimeout(() => {
    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    messageError.classList.add("hidden");
  }, 5000);
}