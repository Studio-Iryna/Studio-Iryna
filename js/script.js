// Мобильное меню
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Отправка формы через mailto
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    window.location.href = `mailto:hello@alexdesign.com?subject=New Inquiry&body=Имя: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
});
