

// JQuery Code



$(document).ready(function () {


    // Role will change in every two seccond

    let count = 1;

    setInterval(function () {
        if (count === 1) {

            $('#role1').fadeIn(1700);
            $('#role2').fadeOut(0);
            $('#role3').fadeOut(0);
            count = 2;

        }

        else if (count === 2) {
            $('#role1').fadeOut(0);
            $('#role2').fadeIn(1700);
            $('#role3').fadeOut(0);
            count = 3;
        }

        else if (count === 3) {
            $('#role1').fadeOut(0);
            $('#role2').fadeOut(0);
            $('#role3').fadeIn(1700);
            count = 1;
        }

    }, 2000);

    // Made the color of link white after clicking the link in header

    $('li').click(function () {
        $(this).siblings().find('a').removeClass('focus');
        $(this).find('a').addClass('focus');
    });


    // set the background color white and text color black after clicking on heading title in resume section 

    $('.heading-title').click(function () {
        $(this).siblings().removeClass('change-heading-title');
        $(this).siblings().find('span').removeClass('change-heading-color');
        $(this).addClass('change-heading-title');
        $(this).find('span').addClass('change-heading-color');

    });

    // When we hover on icons  -> icons move to top.

    $(".brand").hover(function () {

        $(this).animate({ top: '10px' }, 500);
    },
        function () {
            $(this).animate({ top: '18px' }, 500);
        })


    // Clicking on menu button menu option will show on page 
    // this work only for small device. implemented this logic to make website responsive

    $(".menu-btn").click(function () {
        $(".menu-item").animate({ "right": "0" }, 500);
    });

    $(".close-btn").click(function () {
        $(".menu-item").animate({ "right": "-200px" }, 500);
    });


});