
$(document).ready(function () {
    
    $('.dropdown-item').click(function () {
        if ($(this).hasClass('philodendron')) {
            /*let plantA = $('main-content1').children('div').hide();    this variable was not needed at the end*/
            $('.media').filter('.syngo,.monstera').hide();
            $('.media').filter('.philo').show();
            
            //alert('hapa');  Here I need the code to see only divs having the class criteria
        } else if ($(this).hasClass('monsteras')) {
            $('.media').filter('.philo,.syngo').hide();
            $('.media').filter('.monstera').show();
            
            //alert('papa');  The same here
        } else if ($(this).hasClass('syngonium')) {
            $('.media').filter('.philo,.monstera').hide();
            $('.media').filter('.syngo').show();
            
            
            //alert('coco'); The same here
        } else {
            alert('Something went wrong');
        }
        $(window).scrollTop();
    });
    $('#home').click(function () {
        /*$('.media').filter('.syngo,.monstera,.philo').show();//Here I need a default(homepage content of .media class) content of all divs.*/
        location.reload('true');// on stackoverflow.com shorcut for filter above.
    });
})

