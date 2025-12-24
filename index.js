// Animation on scroll
        document.addEventListener('DOMContentLoaded', function () {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-right');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));

            // Mobile menu toggle
            const mobileMenu = document.getElementById('mobile-menu');
            const navMenu = document.querySelector('.nav-menu');

            if (mobileMenu) {
                mobileMenu.addEventListener('click', () => {
                    mobileMenu.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
            }

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile handling for culture popup
            const aboutItem = document.querySelector('.nav-item.with-popup');
            if (aboutItem && mobileMenu) {
                // For mobile, make the popup clickable
                if (window.innerWidth <= 768) {
                    const aboutLink = aboutItem.querySelector('.nav-link');
                    aboutLink.addEventListener('click', function (e) {
                        if (navMenu.classList.contains('active')) {
                            e.preventDefault();
                            aboutItem.classList.toggle('active');
                        }
                    });
                }
            }
        });
