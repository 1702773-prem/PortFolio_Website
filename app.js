

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


    // HIRE ME button in header section
    // When we hover on hire-me-button -> button move to top.

    $("#hire-me-btn").hover(function () {

        $(this).animate({ top: '8px' });
    },
        function () {
            $(this).animate({ top: '10px' });
        })


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

    // When we hover on icons  -> icons move to top like a hire-me-btn.

    $(".brand").hover(function () {

        $(this).animate({ top: '10px' }, 500);
    },
        function () {
            $(this).animate({ top: '18px' }, 500);
        })


    // When we will click on hire me button-- Html page fade out
    // and a form will fade in and when we will click on close button
    // form will fade out and Html page will fade in

    $("#hire-me-btn").click(function () {
        $(".hire-me-section").fadeIn(500);
        $(".All").fadeOut(0);
        $("li").find('a').css({ color: " rgba(255, 255, 255, 0.441)" });
        $(".menu-item").animate({ "right": "-200px" });

    })

    $("#close-button1").click(function () {
        $(".hire-me-section").fadeOut(0);
        $(".All").fadeIn(500);
        //  document.documentElement.scrollTop = 0

    })


    // // When we will click on portfolio item any where -- Html page fade out
    // and a project description will fade in and when we will click on close button
    //  project description will fade out and Html page will fade in

    $("#portfolio-item1").click(function () {
        $(".project1").fadeIn(500);
        $(".All").fadeOut(0);
        document.documentElement.scrollTop = 0
        $(".menu-item").animate({ "right": "-200px" });

    })

    $("#portfolio-item2").click(function () {
        $(".project2").fadeIn(500);
        $(".All").fadeOut(0);
        document.documentElement.scrollTop = 0
        $(".menu-item").animate({ "right": "-200px" });

    })

    $("#portfolio-item3").click(function () {
        $(".project3").fadeIn(500);
        $(".All").fadeOut(0);
        document.documentElement.scrollTop = 0
        $(".menu-item").animate({ "right": "-200px" });

    })



    $(".close-button2").click(function () {
        $(".project").fadeOut(500);
        $(".All").fadeIn(1500);
        // portfolioContainer.scrollIntoView({ behavior: 'smooth' });
        document.documentElement.scrollTop = 1800
    })

    // Clicking on menu button menu option will show on page 
    // this work only for small device. implemented this logic to make website responsive

    $(".menu-btn").click(function () {
        $(".menu-item").animate({ "right": "0" }, 500);
    });

    $(".close-btn").click(function () {
        $(".menu-item").animate({ "right": "-200px" }, 500);
    });



    /*
    
    // made the header sticky using jQuery
    
    const initialCoords =home.getBoundingClientRect();
    console.log(initialCoords)
    
    $(window).scroll(function(){
    
    if(window.scrollY > initialCoords.top-1)
        {
                        
            $('#header').slideDown();
            $('#header').addClass('sticky');
            console.log(window.scrollY)
        }
        else
        $('#header').removeClass('sticky');
       
    })
    
    */





});


// JavaScript Code


// made the header sticky using JavaScript ( IntersectionObserver API)

const header = document.querySelector('#header');
const home = document.querySelector('#home');

const stickyHeader = function (entries) {

    const [entry] = entries;
    if (!entry.isIntersecting) {
        header.classList.add('sticky');
    }

    else {
        header.classList.remove('sticky');
    }
}

const obsOptions = {
    root: null,
    threshold: 0.85
}

const observer = new IntersectionObserver(stickyHeader, obsOptions);
observer.observe(home);


// Change the content of resume dynamically when we click on header title. 

const education = document.getElementById('education');
const skills = document.getElementById('skills');
const experiences = document.getElementById('experiences');
const intrst = document.getElementById('intrst');
const educationQualification = document.getElementById('education-qualification');

education.addEventListener('click', function () {
    educationQualification.style.display = 'block';
    skill.style.display = 'none';
    learning.style.display = 'none';
    interest.style.display = 'none';

})

const skill = document.getElementById('skill');

skills.addEventListener('click', function () {
    educationQualification.style.display = 'none';
    skill.style.display = 'block';
    learning.style.display = 'none';
    interest.style.display = 'none';

})

const learning = document.getElementById('learning');

experiences.addEventListener('click', function () {
    educationQualification.style.display = 'none';
    skill.style.display = 'none';
    learning.style.display = 'block';
    interest.style.display = 'none';

})

const interest = document.getElementById('interest');

intrst.addEventListener('click', function () {
    educationQualification.style.display = 'none';
    skill.style.display = 'none';
    learning.style.display = 'none';
    interest.style.display = 'block';

})

// Smooth scrolling to particular part of Html page when we click on header link


const headerList = document.querySelectorAll('li');


const featureContainer = document.querySelector('#feature');
const portfolioContainer = document.querySelector('#portfolio');
const resumeContainer = document.querySelector('#resume');
const blogContainer = document.querySelector('#blog');
const contactContainer = document.querySelector('#contact');



headerList[1].addEventListener('click', function () {
    event.preventDefault();
    featureContainer.scrollIntoView({ behavior: 'smooth' });
})

headerList[2].addEventListener('click', function () {
    event.preventDefault();
    portfolioContainer.scrollIntoView({ behavior: 'smooth' });
})

headerList[3].addEventListener('click', function () {
    event.preventDefault();
    resumeContainer.scrollIntoView({ behavior: 'smooth' });
    console.log("bhhvj")
})

headerList[4].addEventListener('click', function () {
    event.preventDefault();
    blogContainer.scrollIntoView({ behavior: 'smooth' });
})

headerList[5].addEventListener('click', function () {
    event.preventDefault();
    contactContainer.scrollIntoView({ behavior: 'smooth' });

})


/*

const role1 = document.getElementById('role1');
const role2 = document.getElementById('role2');
const role3 = document.getElementById('role3');

let count =1;
//console.log(role1)

setInterval(function(){
    if(count ===1 )
    {

        role1.classList.remove("is-hidden");
        role2.classList.remove("is-visible");
        role3.classList.remove("is-visible")
        role1.classList.add("is-visible");
        role2.classList.add("is-hidden");
        role3.classList.add("is-hidden");
       
        count =2;
    }

    else if(count === 2)
    {

        role1.classList.remove("is-visible");
        role2.classList.remove("is-hidden");
        role3.classList.remove("is-visible")
        role1.classList.add('is-hidden');
        role2.classList.add('is-visible');
        role3.classList.add('is-hidden');
       
        count = 3; 
    }

    else if(count === 3)
    {

        role1.classList.remove("is-visible");
        role2.classList.remove("is-visible");
        role3.classList.remove("is-hidden")
        role1.classList.add('is-hidden');
        role2.classList.add('is-hidden');
        role3.classList.add('is-visible');
       
        count = 1; 
    }

   

},1500)

*/














