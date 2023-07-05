
$(document).ready(function () {

    // HIRE ME button in header section

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











    


