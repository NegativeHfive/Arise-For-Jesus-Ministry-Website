
document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("side-page").classList.toggle("active");
});

document.addEventListener("click", function(event) {
    var sidePage = document.getElementById("side-page");
    var menuIcon = document.getElementById("menu-icon");
    var openBtn = document.getElementById("openBtn");

    if (event.target !== sidePage && event.target !== menuIcon && event.target !== openBtn) {
        // If the click is not on the side page, menu icon, or open button, close the side page
        sidePage.classList.remove("active");
    }
});

const scrollNav = document.querySelector('.scroll-nav');

// Function to handle scroll events
function handleScroll() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;

    // Show or hide the secondary navigation based on the scroll position
    if (scrollPosition > 200) { // Adjust the threshold as needed
        scrollNav.style.top = '0'; // Show the secondary navigation
    } else {
        scrollNav.style.top = '-100px'; // Hide the secondary navigation
    }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);


// scroll down animation

// JavaScript code to detect scroll event and trigger animation
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var ministries = document.querySelector('.ministries');
    
    // Adjust this value based on when you want the animation to start
    var triggerOffset = 200; // For example, start animation when scrolled 200px down
    
    if (scrollPosition > triggerOffset) {
        ministries.classList.add('show-animation');
    } else {
        ministries.classList.remove('show-animation');
    }
});


// when i click on the button it should make me go up back to the top 

const upIcon = document.getElementById('up_icon');

// Add a click event listener to the up icon
upIcon.addEventListener('click', () => {
    // Scroll the page to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var icon = document.querySelector('.up_icon');
    
    // Adjust this value based on when you want the animation to start
    var triggerOffset = 2; // For example, start animation when scrolled 2px down
    
    if (scrollPosition > triggerOffset) {
        icon.classList.add('show-animation');
    } else {
        icon.classList.remove('show-animation');
    }
});

// javascript voor live event

// selecting the id of the live event 
let Event= document.querySelector("#countdown")

// giving a specific dat for the event 
const targetDate = new Date('2024-03-28T12:20:00');

// making a function to make the current live events
function updateCountDown(){
    let now =new Date();
    let timeDifference=targetDate-now;

    //calculate remaining time 
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    // display the current time
    Event.textContent=`${days} days ${hours} hours ${minutes} mins ${seconds} secs`;

    // if its time it will end 
    if(timeDifference < 0){
        clearInterval(timer);
        Event.textContent = `Event has ended`
    }
}

updateCountDown();
const timer = setInterval(updateCountDown,1000);

// toggle History 
function toggleHistory() {
    var historyText = document.querySelector('.history .text_mi');
    var visionText = document.querySelector('.vision .text_mi');
    var believeText = document.querySelector('.believe .text_mi');
    
    // Close other sections if they are open
    if (visionText.classList.contains('show-text')) {
        visionText.classList.remove('show-text');
    }
    if (believeText.classList.contains('show-text')) {
        believeText.classList.remove('show-text');
    }
    
    // Toggle the target section
    historyText.classList.toggle('show-text');
}

function toggleVision() {
    var historyText = document.querySelector('.history .text_mi');
    var visionText = document.querySelector('.vision .text_mi');
    var believeText = document.querySelector('.believe .text_mi');
    
    // Close other sections if they are open
    if (historyText.classList.contains('show-text')) {
        historyText.classList.remove('show-text');
    }
    if (believeText.classList.contains('show-text')) {
        believeText.classList.remove('show-text');
    }
    
    // Toggle the target section
    visionText.classList.toggle('show-text');
}

function toggleBelieve() {
    var historyText = document.querySelector('.history .text_mi');
    var visionText = document.querySelector('.vision .text_mi');
    var believeText = document.querySelector('.believe .text_mi');
    
    // Close other sections if they are open
    if (historyText.classList.contains('show-text')) {
        historyText.classList.remove('show-text');
    }
    if (visionText.classList.contains('show-text')) {
        visionText.classList.remove('show-text');
    }
    
    // Toggle the target section
    believeText.classList.toggle('show-text');
};

// javascript for parallex effect

