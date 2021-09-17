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
})


