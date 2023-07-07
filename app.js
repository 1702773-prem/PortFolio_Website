

// JQuery Code


$(document).ready(function () {

    // HIRE ME button in header section
    // When we hover on hire-me-button -> button move to top.

    $("#hire-me-btn").hover(function () {

        $(this).animate({ top: '8px' });
    },
        function () {
            $(this).animate({ top: '10px' });
        })


        // Made the color of link white after clicking the link
        
        $('li').click(function() {
            $(this).siblings().find('a').removeClass('focus');
            $(this).find('a').addClass('focus');
          });


        // set the background color white and text color black after clicking on heading title

          $('.heading-title').click(function() {
            $(this).siblings().removeClass('change-heading-title');
            $(this).siblings().find('span').removeClass('change-heading-color');
            $(this).addClass('change-heading-title');
            $(this).find('span').addClass('change-heading-color');
           
           });

          // When we hover on icons  -> icons move to top like a hire-me-btn.

          $(".brand").hover(function () {

            $(this).animate({ top: '10px' },500);
        },
            function () {
                $(this).animate({ top: '18px' },500);
            })

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
const home =document.querySelector('#home');

const stickyHeader = function(entries){

    const [entry] =entries;
    if(!entry.isIntersecting)
    {
        header.classList.add('sticky');
    }

    else{
        header.classList.remove('sticky');
    }
}

const obsOptions ={
    root:null,
    threshold:0.85
}

const observer = new IntersectionObserver(stickyHeader,obsOptions);
observer.observe(home);


// Change the content of resume dynamically when we click on header title. 

const education =document.getElementById('education');
const skills =document.getElementById('skills');
const experiences =document.getElementById('experiences');
const intrst =document.getElementById('intrst');
const educationQualification = document.getElementById('education-qualification');

education.addEventListener('click',function(){
         educationQualification.style.display='block';
         skill.style.display='none';
         learning.style.display='none';
         interest.style.display='none';
         
})

const skill = document.getElementById('skill');

skills.addEventListener('click',function(){
    educationQualification.style.display='none';
    skill.style.display='block';
    learning.style.display='none';
    interest.style.display='none';

})

const learning = document.getElementById('learning');

experiences.addEventListener('click',function(){
    educationQualification.style.display='none';
    skill.style.display='none';
    learning.style.display='block';
    interest.style.display='none';
   
})

const interest = document.getElementById('interest');

intrst.addEventListener('click',function(){
    educationQualification.style.display='none';
    skill.style.display='none';
    learning.style.display='none';
    interest.style.display='block';
   
})











    


