$(document).ready(function () {
    /*$('.media').hover( function () {
        $("this.media>div").css({backgroundColor: "#ffe"});
    
       // $('this.div').append($('<div>test</div>'));
    });*/
    $(".white-kn").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.knight-p').hide();
        $('.button-gen').show();
        $('.white-kn').css('background-color', '#f5ba7e');//!!!!!! last line!!!



        //$('.white-knight').slideUp('slow');
    });



    $('.hide-knight').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-gen').hide();
        //appends details about plant
        $('.knight-p').show();
        $('.details-wk').show();
        $('.close-window').click(function () {
            $('.details-wk').hide();
        });


        /*$(".media-body").click(function () {
            $(".details-wk").toggle("slow", function () {
                // Animation complete.
            });
        });*/

    });

    $(".white-kn").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.knight-p').show();
        $('.button-gen').hide();
        $('.details-wk').hide(); //erases the info appended in click function
        $('.white-kn').css('background-color', 'transparent');
    
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
            alert('Something went wrong! Refresh your page.');
        }


    });





    $('#home').click(function () {
        /*$('.media').filter('.syngo,.monstera,.philo').show();//Here I need a default(homepage content of .media class) content of all divs.*/
        location.reload(0); // on stackoverflow.com shorcut for filter above.


    });
    //$(window).scrollTop();//it worked on one element, but javascript doesn't responde now.



});