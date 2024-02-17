
    //hamburger button

    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menuBar = document.querySelector('.menu-bar');

    hamburgerBtn.addEventListener("click", () => {
        menuBar.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');

    });

    // revel animation settings 

    ScrollReveal({
        reset:true,
        distance:'60px',
        duration:2500,
        delay:0
    })

    // home section scroll animation

    ScrollReveal().reveal('.profile-pic');
    ScrollReveal().reveal('.first-heading',{delay : 200});
    ScrollReveal().reveal('.main-heading',{delay : 300});
    ScrollReveal().reveal('.sub-heading',{delay : 400});
    ScrollReveal().reveal('.download-cv-button',{delay : 500});
    ScrollReveal().reveal('.contacts-button',{delay : 600});
    ScrollReveal().reveal('.linkedin-button',{delay : 700});
    ScrollReveal().reveal('.github-button',{delay : 800});


    // about section scroll animation 

    ScrollReveal().reveal('.second-img');
    ScrollReveal().reveal('.about-sub-heading',{delay : 200});
    ScrollReveal().reveal('.about-main-heading',{delay : 300});
    ScrollReveal().reveal('.experience-div',{delay : 400});
    ScrollReveal().reveal('.education-div',{delay : 500});
    ScrollReveal().reveal('.paragraph-div',{delay : 600});


    // experience section scroll animation 

    ScrollReveal().reveal('.exp-sub-heading');
    ScrollReveal().reveal('.exp-main-heading',{delay : 200});
    ScrollReveal().reveal('.f-div',{delay : 300});
    ScrollReveal().reveal('.f-div-head',{delay : 400});
    ScrollReveal().reveal('.f-div-skills',{delay : 500});
    ScrollReveal().reveal('.b-div',{delay : 300});
    ScrollReveal().reveal('.b-div-head',{delay : 400});
    ScrollReveal().reveal('.b-div-skills',{delay : 500});

    // projects section scroll animation

    ScrollReveal().reveal('.proj-sub-heading');
    ScrollReveal().reveal('.proj-main-heading',{delay : 200});
    ScrollReveal().reveal('.pro-1',{delay : 300});
    ScrollReveal().reveal('.pro-2',{delay : 400});
    ScrollReveal().reveal('.pro-3',{delay : 500});
    ScrollReveal().reveal('.pro-1-head',{delay : 600});
    ScrollReveal().reveal('.pro-2-head',{delay : 600});
    ScrollReveal().reveal('.pro-3-head',{delay : 600});
    ScrollReveal().reveal('.pro-1-b-1',{delay : 800});
    ScrollReveal().reveal('.pro-2-b-1',{delay : 800});
    ScrollReveal().reveal('.pro-3-b-1',{delay : 800});
    ScrollReveal().reveal('.pro-1-b-2',{delay : 1000});
    ScrollReveal().reveal('.pro-2-b-2',{delay : 1000});
    ScrollReveal().reveal('.pro-3-b-2',{delay : 1000});

    //contacts section

    ScrollReveal().reveal('.cont-sub-heading');
    ScrollReveal().reveal('.cont-main-heading',{delay : 200});
    ScrollReveal().reveal('.cont-button',{delay : 300});
    ScrollReveal().reveal('.bottom-links',{delay : 400});
