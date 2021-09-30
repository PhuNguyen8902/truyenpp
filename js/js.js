$(document).ready(function()        // được kích hoạt khi html load xong
{
    $("#bttop").hide()

    $(window).scroll(function()
    {
        if($(this).scrollTop()>20)
            $("#bttop").show("slow")
        else
            $("#bttop").hide("slow")
    })

    // go to top
    $('#bttop').click(function()
    {
        $('html, body').animate(
            {
                scrollTop: 0
            },1000);
    })

    // Sắp xếp
    $("nav ul.menu a").click(function()
    {
        var h= $(this).attr("href")

        $("html, body").animate ({
            scrollTop: $(h).prop("offsetTop")
            },1000)
    })

    $('#foot-disappear').show()

    $(window).bind('mousewheel', function(E) {      // Hàm bind được xử dụng để đính kèm sự kiện với thành phần
        if (E.originalEvent.wheelDelta >= 0) {      // Mousewheel bắt sự kiện lăn chuột
            $("#foot-disappear").show()
        }
        else {
            $("#foot-disappear").hide()
        }
    });
})




