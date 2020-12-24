// DOMContentLoaded event to sure that HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
    function theToggle() {
        const showNav=document.querySelector('#navbar__list');
        showNav.classList.toggle('.menu__link');
    };
    theToggle();

    // scrolls to anchors from navigation,
    const trip1 =document.querySelector('#firstTrip');
    // Scroll to section on link click
    trip1.addEventListener('click' , function myFunction1(event) {
        const secScroll = document.getElementById('section1');
        // Scroll to anchor ID using scrollIntoView event
        secScroll.scrollIntoView({behavior:"smooth" , block:"center"});
        event.preventDefault();

    }); 

    // scrolls to anchors from navigation,
    const trip2 =document.querySelector('#secondTrip');
    // Scroll to section on link click
    trip2.addEventListener('click' , function myFunction2(event) {
        const secScroll = document.getElementById('section2');
        // Scroll to anchor ID using scrollIntoView event
        secScroll.scrollIntoView({behavior:"smooth" , block:"center"});
        event.preventDefault();
        
    }); 

    // scrolls to anchors from navigation,
    const trip3 =document.querySelector('#thirdTrip');
    // Scroll to section on link click
    trip3.addEventListener('click' , function myFunction3(event) {
        // Scroll to anchor ID using scrollIntoView event
        const secScroll = document.getElementById('section3');
        secScroll.scrollIntoView({behavior:"smooth" , block:"center"});
        event.preventDefault();
        
    }); 

    // scrolls to anchors from navigation,
    const trip4 =document.querySelector('#fourthTrip');
    // Scroll to section on link click
    trip4.addEventListener('click' , function myFunction4(event) {
        const secScroll = document.getElementById('section4');
        // Scroll to anchor ID using scrollIntoView event
        secScroll.scrollIntoView({behavior:"smooth" , block:"center"});
        event.preventDefault();
        
    }); 

    // highlights section in viewport upon scrolling.
    const sections =document.querySelectorAll('section');
    onscroll = function() {
        const scrollPosition = document.documentElement.scrollTop;
        sections.forEach( section => {
            if(scrollPosition >= section.offsetTop - section.offsetHeight *0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight *0.25) {
                const currentSection = section.attributes.id.value;
                removeActiveClasses();
                addaActiveClass(currentSection);
            }
        })
    };
    // remove the active classes
    const removeActiveClasses = function() {
        document.querySelectorAll('nav a').forEach( el => {
            el.classList.remove("menu__link")
        })
    };

    // add active class 
    const addaActiveClass = function (id) {
        const selector= `nav a[data-link="#${id}"]`;
        document.querySelector(selector).classList.add("menu__link")
    }
    
        
});
