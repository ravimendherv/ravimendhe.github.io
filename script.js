$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function smsser(){
    window.open("#");
}
function poster(){
    window.open("https://drive.google.com/file/d/1Ir5fwD_Use3UM4wRSP2ebqaTbBGtMtgl/view?usp=sharing");
}
function doctorsoftware(){
    window.open("https://drive.google.com/file/d/1dmMQecXnrhl00EKWAQ51QxOeFP14e5NF/view?usp=sharing");
}
function mlheartdisease(){
    window.open("https://drive.google.com/file/d/13oK6BEwK3DtBUtOxSQsxWh1XdNXuoHUu/view?usp=sharing");
}
function timealert(){
    window.open("https://drive.google.com/file/d/1L6msILxCgCcby_i8ElnnKO3W5jXjoVQB/view?usp=sharing");
}
function multiconverter(){
    window.open("https://drive.google.com/file/d/1oExi5Zt1z52WOPzU5DTWFvmRsfqGNrBu/view?usp=sharing");
}
function keduapp(){
    window.open("https://drive.google.com/file/d/1yZhkifQUTAqNc7ExUm62z4Z_IUaV_Ck_/view?usp=sharing");
}
function doccard(){
    window.open("https://drive.google.com/file/d/1a6oUPIZks6J0uf9PkVfc4jvrklHReACb/view?usp=sharing");
}
