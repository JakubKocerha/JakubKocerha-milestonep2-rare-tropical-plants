$(document).ready(function () {
    /*$('.media').hover( function () {
        $("this.media>div").css({backgroundColor: "#ffe"});
    
       // $('this.div').append($('<div>test</div>'));
    });*/
    $(".white-kn").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.knight-p').hide();
        $('.white-knight').show();
        //$('.white-knight').slideUp('slow');
        

    });
    $('.hide-knight').click(function () {
        // button click hides button and opens default info about the plant
        $('.white-knight').hide();
        $('.knight-p').append('<div><p>test</p></div>').show();//appends details about plant
    
    });

    $(".white-kn").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.knight-p').show();
        $('.white-knight').hide();
        $('.knight-p>div').remove();//erases the info appended in click function
    });







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


    });





    $('#home').click(function () {
        /*$('.media').filter('.syngo,.monstera,.philo').show();//Here I need a default(homepage content of .media class) content of all divs.*/
        location.reload(0); // on stackoverflow.com shorcut for filter above.


    });
    //$(window).scrollTop();//it worked on one element, but javascript doesn't responde now.



});