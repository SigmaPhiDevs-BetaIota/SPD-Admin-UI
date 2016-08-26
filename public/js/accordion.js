
var accordionItem = $(".accordion-item");
var accordionImg = $(".accordion-img");
var accordionBckImg = $(".accordion-bck-img");
var overlay = $(".overlay");
/*$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});*/

accordionItem.mouseover(function() {
    accordionItem.removeClass("active");
    overlay.removeClass("active");
    $(this).addClass("active");
});

$(".accordionBckImg, .accordion-item.left").mouseover(function() {
    accordionItem.removeClass("active");
    $(".accordion-item.left").addClass("active");
    $(".overlay.overlay-bck").addClass("active");
});

$('.automatic-slider').unslider({
    autoplay: true
});
$( document ).ready(function(){
    if (navigator.userAgent.indexOf('Edge') !== -1 || navigator.appVersion.indexOf('Trident/') > 0 || navigator.userAgent.indexOf('MSIE') !== -1) {
       alert('Hello, we apologize but some features currently do not display correctly on Microsoft Edge or Internet Explorer. For optimal performance, use another browser such as Firefox or Chrome.');
    }

});
