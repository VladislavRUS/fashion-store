$(document).ready(function () {
    $('.menu__button').bind('click', function () {
        $(this).toggleClass('_active');
        $('.options').toggleClass('_active');
    });
});