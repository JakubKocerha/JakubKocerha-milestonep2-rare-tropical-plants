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
        // button opens info details about the plant
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
        $('.details-wk').hide();
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
        // button opens info details about the plant
        $('.button-thai').hide();
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
        $('.details-co').hide();
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
        // button opens info details about the plant
        $('.button-pr-wh').hide();
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
        $('.details-wh').hide();
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
        // button opens info details about the plant
        $('.button-pr-pi').hide();
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
        $('.details-pi').hide();
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
        // button opens info details about the plant
        $('.button-sy-co').hide();
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
        $('.details-sc').hide();
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
        // button opens info details about the plant
        $('.button-mo-al').hide();
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
        $('.details-al').hide();
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
        // button opens info details about the plant
        $('.button-sy-al').hide();
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
        $('.details-sa').hide();
        $('.syngonium-al').css('background-color', 'transparent');
    });

// Filtering of required content items and setting active class into the Plants button
    $('.dropdown-item').click(function () {
        
        // button Plants/Home .active class
        $('.active').removeClass('active');
        $('.dropdown').addClass('active');
        // filters for dropdown items
        if ($(this).hasClass('philodendron')) {
            $('.media').filter('.syngo,.monstera').hide();
            $('.media').filter('.philo').show();
        } else if ($(this).hasClass('monsteras')) {
            $('.media').filter('.philo,.syngo').hide();
            $('.media').filter('.monstera').show();
        } else if ($(this).hasClass('syngonium')) {
            $('.media').filter('.philo,.monstera').hide();
            $('.media').filter('.syngo').show();
        } else {
            alert('Something went wrong! Refresh your page.');
        }
        
    });

    $('#home').click(function () {
        location.reload(0); // on stackoverflow.com shorcut for filter above.
    });






});