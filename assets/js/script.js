$(document).ready(function(){
    //메인 배너
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        }
    }); 

    //menubar
    $(".icon .play").click(function(){
       $(this).hide();
       $(".stop").show();
       $(".fast path").css({fill: "#888", transition: "all 0.1s ease"});
    });

    $(".icon .stop").click(function(){
        $(this).hide();
        $(".play").show();
        $(".fast path").css({fill: "#111"});
     });

     $(".menubar li").click(function(){
        $(".on_icon").hide();
        $(".b_icon").show();
        $(".menubar li span").css({color: "#999", transition: "all 0.1s ease"});
     });
     $(".library").click(function(){
        $(".library .b_icon").hide();
        $(".library .on_icon").show();
        $(".library span").css({color: "#ff2d55", transition: "all 0.1s ease"});
     });
     $(".heart").click(function(){
        $(".heart .b_icon").hide();
        $(".heart .on_icon").show();
        $(".heart span").css({color: "#ff2d55", transition: "all 0.1s ease"});
     });
     $(".music").click(function(){
        $(".music .b_icon").hide();
        $(".music .on_icon").show();
        $(".music span").css({color: "#ff2d55", transition: "all 0.1s ease"});
     });
     $(".radio").click(function(){
        $(".radio .b_icon").hide();
        $(".radio .on_icon").show();
        $(".radio span").css({color: "#ff2d55", transition: "all 0.1s ease"});
     });
     $(".search").click(function(){
        $(".search .b_icon").hide();
        $(".search .on_icon").show();
        $(".search span").css({color: "#ff2d55", transition: "all 0.1s ease"});
     });
 
});
