"use strict";
$(document).ready(function () {

    const dots = document.querySelectorAll('.dot');
    const heroTitle = document.querySelector('.hero_title');

    if (heroTitle) {
        dots.forEach(dot => {
            dot.addEventListener('mouseenter', function () {
                const color = this.getAttribute('data-color');
                heroTitle.style.color = color;
            });
            dot.addEventListener('mouseleave', function () {
                heroTitle.style.color = '#ffffff';
            });
        });
    }

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    $('.header-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 4000 
    });

  
    $('.news_grid').slick({
        slidesToShow: 3,     
        slidesToScroll: 1,  
        autoplay: true,      
        autoplaySpeed: 4000, 
        dots: true,
        prevArrow: $('.btn-prev'), 
        nextArrow: $('.btn-next'), 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function() {
    $('.gallery_item').append(`
        <div class="overlay">
            <img src="./assets/img/zoom.svg" class="zoom-icon" alt="zoom">
        </div>
    `);
});
$(document).ready(function() {
    // Шукаємо кнопку за ID або класом
    $('.btn-outline').on('click', function(e) {
        e.preventDefault(); 

        $('.gallery_item_hidden').removeClass('gallery_item_hidden').hide().fadeIn(800);
        $(this).fadeOut();
    });
});
function initMap() {
    const lat = 40.6782;
    const lng = -73.9442;
    const map = L.map('map', {
        center: [lat, lng],
        zoom: 13,
        zoomControl: false 
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup('Monticello Office') 
        .openPopup();
}

window.addEventListener('load', function() {
    if (typeof L !== 'undefined') {
        initMap();
    } else {
        console.error("Помилка: Бібліотека Leaflet не завантажена. Перевірте підключення у файлі HTML.");
    }
});



