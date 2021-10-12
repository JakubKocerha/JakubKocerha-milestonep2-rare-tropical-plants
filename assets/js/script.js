$(document).ready(function () {

    /* -Interactive content container- */

    /* --Eventlisteners for container in .white-kn-- */

    $(".white-kn").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.knight-p').hide();
        $('.button-gen').show();
        $('.white-kn').css('background-color', '#f5ba7e');
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
    });

    $(".white-kn").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.knight-p').show();
        $('.button-gen').hide();
        $('.details-wk').hide(); //erases the info appended in click function
        $('.white-kn').css('background-color', 'transparent');
    });




    /* --Eventlisteners for container in .thai-co-- */
    
    $(".thai-co").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.thai-p').hide();
        $('.button-thai').show();
        $('.thai-co').css('background-color', '#f5ba7e');
    });

    $('.hide-thai').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-thai').hide();
        //appends details about plant
        $('.thai-p').show();
        $('.details-co').show();
        $('.close-window').click(function () {
            $('.details-co').hide();
        });
    });

    $(".thai-co").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.thai-p').show();
        $('.button-thai').hide();
        $('.details-co').hide(); //erases the info appended in click function
        $('.thai-co').css('background-color', 'transparent');
    });


    /* --Eventlisteners for container in .princess-wh-- */
    
    $(".princess-wh").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.princess-wh-p').hide();
        $('.button-pr-wh').show();
        $('.princess-wh').css('background-color', '#f5ba7e');
    });

    $('.hide-whpr').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-pr-wh').hide();
        //appends details about plant
        $('.princess-wh-p').show();
        $('.details-wh').show();
        $('.close-window').click(function () {
            $('.details-wh').hide();
        });
    });

    $(".princess-wh").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.princess-wh-p').show();
        $('.button-pr-wh').hide();
        $('.details-wh').hide(); //erases the info appended in click function
        $('.princess-wh').css('background-color', 'transparent');
    });


    /* --Eventlisteners for container in .princess-pi-- */
    
    $(".princess-pi").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.princess-pi-p').hide();
        $('.button-pr-pi').show();
        $('.princess-pi').css('background-color', '#f5ba7e');
    });

    $('.hide-pipr').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-pr-pi').hide();
        //appends details about plant
        $('.princess-pi-p').show();
        $('.details-pi').show();
        $('.close-window').click(function () {
            $('.details-pi').hide();
        });
    });

    $(".princess-pi").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.princess-pi-p').show();
        $('.button-pr-pi').hide();
        $('.details-pi').hide(); //erases the info appended in click function
        $('.princess-pi').css('background-color', 'transparent');
    });


    /* --Eventlisteners for container in .syngonium-co -- */
    
    $(".syngonium-co").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.syngonium-co-p').hide();
        $('.button-sy-co').show();
        $('.syngonium-co').css('background-color', '#f5ba7e');
    });

    $('.hide-syco').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-sy-co').hide();
        //appends details about plant
        $('.syngonium-co-p').show();
        $('.details-sc').show();
        $('.close-window').click(function () {
            $('.details-sc').hide();
        });
    });

    $(".syngonium-co").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.syngonium-co-p').show();
        $('.button-sy-co').hide();
        $('.details-sc').hide(); //erases the info appended in click function
        $('.syngonium-co').css('background-color', 'transparent');
    });


    /* --Eventlisteners for container in .monstera-al -- */
    
    $(".monstera-al").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.monstera-al-p').hide();
        $('.button-mo-al').show();
        $('.monstera-al').css('background-color', '#f5ba7e');
    });

    $('.hide-moal').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-mo-al').hide();
        //appends details about plant
        $('.monstera-al-p').show();
        $('.details-al').show();
        $('.close-window').click(function () {
            $('.details-al').hide();
        });
    });

    $(".monstera-al").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.monstera-al-p').show();
        $('.button-mo-al').hide();
        $('.details-al').hide(); //erases the info appended in click function
        $('.monstera-al').css('background-color', 'transparent');
    });


    /* --Eventlisteners for container in .syngonium-al -- */
    
    $(".syngonium-al").mouseenter(function () {
        // onmouse event listener hides <p> with general info and opens a button leading user further.
        $('.syngonium-al-p').hide();
        $('.button-sy-al').show();
        $('.syngonium-al').css('background-color', '#f5ba7e');
    });

    $('.hide-syal').click(function () {
        // button click hides button and opens default info about the plant
        $('.button-sy-al').hide();
        //appends details about plant
        $('.syngonium-al-p').show();
        $('.details-sa').show();
        $('.close-window').click(function () {
            $('.details-sa').hide();
        });
    });

    $(".syngonium-al").mouseleave(function () {
        // triggers default info about the plant onmouse leave
        $('.syngonium-al-p').show();
        $('.button-sy-al').hide();
        $('.details-sa').hide(); //erases the info appended in click function
        $('.syngonium-al').css('background-color', 'transparent');
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