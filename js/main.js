(function ($) {
    "use strict";


 
// banner slider

    $('.banner-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: false,

    });
// testimonial slider

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows:false,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: false,

    });


    $(document).ready(function () {
        $(".hamburger").click(function () {
            $("body").addClass("header-contact");

        });
        $(".cross-btn").click(function () {
            $("body").removeClass("header-contact");

        });
    });




    window.addEventListener('scroll', function () {
        var aboutSection = document.getElementById('about-us');
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        var aboutSectionTop = aboutSection.offsetTop;
        var aboutSectionHeight = aboutSection.offsetHeight;

        var aboutLeft1 = document.querySelector('.about-left-1 img');
        var aboutLeft2 = document.querySelector('.about-left-2 img');

        var distanceFromTop = aboutSectionTop - scrollPosition;
        var distanceFromBottom = (aboutSectionTop + aboutSectionHeight) - (scrollPosition + windowHeight);

        var maxMove = 40; // Adjust maximum movement distance

        var moveAmount1 = (distanceFromTop / windowHeight) * maxMove;
        aboutLeft1.style.top = moveAmount1 + 'px';

        var moveAmount2 = (distanceFromBottom / windowHeight) * maxMove;
        aboutLeft2.style.bottom = moveAmount2 + 'px';
    });




// sticky btn

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('body').addClass("sticky");
    }
    else {
        $('body').removeClass("sticky");
    }
});

// isotope

$(window).on('load', function() {
    var $grid = $('.grid').isotope({
        itemSelector: 'article'
    });

    // Function to update layout
    function updateLayout() {
        $grid.isotope('layout');
    }

    // filter buttons
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        // Update layout after a button is clicked
        updateLayout();
    });

    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // Update layout after all resources including images have loaded
    updateLayout();
});



// toogl for contact details

$(document).ready(function () {
    $(".info-socail-media").click(function () {
        $("body").toggleClass("whats-app");
    });

});








// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
}


// moving image js

function moveImage(container, event) {
    const image = container.querySelector('.moving-images');
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + container.offsetWidth / 2;
    const containerCenterY = containerRect.top + container.offsetHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = mouseX - containerCenterX;
    const distanceY = mouseY - containerCenterY;

    const maxMoveHorizontal = 1200; // Adjust maximum horizontal movement distance
    const maxMoveVertical = 500;   // Adjust maximum vertical movement distance

    // Calculate movement based on cursor position relative to container center
    const moveX = (distanceX / container.offsetWidth) * maxMoveHorizontal;
    const moveY = (distanceY / container.offsetHeight) * maxMoveVertical;

    image.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
}




    
})(jQuery);

