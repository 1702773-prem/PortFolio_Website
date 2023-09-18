

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
















