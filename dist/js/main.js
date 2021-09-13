$(function () {

    // Menu opener hamburger

    $('.menu-open').click(function () {
        $('.menu-collapce').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });
  


       // плавное перемещение страницы к нужному блоку

    $('a.go').click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });


    // Всплывающее окно

     $('.call-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

});