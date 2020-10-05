$(document).ready(function(){
    $('.carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href^=#]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})