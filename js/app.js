// DOMContentLoaded event to sure that HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
    //create lists of anchors 
    const addList = document.getElementById('navbar__list');
    const elementCrt1=document.createElement('li');
    const elementCrt2=document.createElement('li');
    const elementCrt3=document.createElement('li');
    const elementCrt4=document.createElement('li');
    elementCrt1.innerHTML ='<a id="firstTrip" class="menu__link" data-link="#section1">Trip 1</a>';
    elementCrt2.innerHTML ='<a id="secondTrip" class="menu__link" data-link="#section2">Trip 2</a>';
    elementCrt3.innerHTML ='<a id="thirdTrip" class="menu__link" data-link="#section3">Trip 3</a>';
    elementCrt4.innerHTML ='<a id="fourthTrip" class="menu__link" data-link="#section4">Trip 4</a>';
    addList.appendChild(elementCrt1);
    addList.appendChild(elementCrt2);
    addList.appendChild(elementCrt3);
    addList.appendChild(elementCrt4);

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
