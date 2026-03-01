// Mobile menu - close on link click
document.querySelectorAll('#mobileMenu a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

// Contact form -> WhatsApp redirect
var form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = form.querySelector('[name="name"]').value;
        var email = form.querySelector('[name="email"]').value;
        var phone = form.querySelector('[name="phone"]').value;
        var message = form.querySelector('[name="message"]').value;
        var text = 'Olá! Meu nome é ' + name + '. Email: ' + email + '. Telefone: ' + phone + '. ' + message;
        window.open('https://wa.me/553899484217?text=' + encodeURIComponent(text), '_blank');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
