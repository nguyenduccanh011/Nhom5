// Toggle menu trên mobile
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Cuộn mượt mà khi click vào menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Đóng menu trên mobile sau khi click
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

// Khởi tạo AOS (Animate On Scroll)
AOS.init({
    duration: 1000,  // Thời gian hiệu ứng (ms)
    once: true,      // Chỉ chạy hiệu ứng một lần
    offset: 100      // Khoảng cách từ dưới lên để kích hoạt hiệu ứng
});