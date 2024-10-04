document.getElementById('year').textContent = new Date().getFullYear();
    
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbarCollapse = document.querySelector('#navbarNav');
            
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});