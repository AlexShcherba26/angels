$(document).ready(function () {
    $(window).on("load",function(){
        $(".mCustomScrollbar").mCustomScrollbar();
    });
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
    // $('.dropDown .lang').click(function () {
    //     $(this).siblings('.dropList').slideToggle(500);
    // });

    // $("li").on("click", function () {
    //     var a = $(this).text();
    //     $(".lang").text(a);
    //     $(".dropList").slideUp(500)
    // })
});