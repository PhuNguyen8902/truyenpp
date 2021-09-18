$(document).ready(function()
{
    $("#bttop").hide()

    $(window).scroll(function()
    {
        if($(this).scrollTop()>20)
            $("#bttop").show("slow")
        else
            $("#bttop").hide("slow")
    })
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
})


