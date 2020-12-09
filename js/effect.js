$(document).ready(function () {
    $('#infor').hover(function (e) { 
        $('.infor_bg').fadeIn(100);
    });
    $('.close_btn').click(function (e) { 
        $('.infor_bg').fadeOut(100);
    });
});