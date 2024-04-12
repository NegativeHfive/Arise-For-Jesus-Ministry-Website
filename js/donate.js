let ProgressBars = document.querySelector("#donation_list");

// Define the delay in milliseconds
const animationDelay = 1000; // 500 milliseconds (0.5 seconds) delay

function ShowProgress(){
    let greenLines = ProgressBars.querySelectorAll(".c_1 .progress_bar .green_line, .c_2 .progress_bar .green_line");
    greenLines.forEach(progressbar => {
        let value = progressbar.getAttribute("data-progress");
        
        // Add a delay before animating each progress bar
        setTimeout(() => {
            progressbar.style.opacity = 1;
            progressbar.style.width = `${value}%`;
            progressbar.innerHTML = `${value}%`;
        }, animationDelay);
    });
}

//adding event listener
window.addEventListener('scroll', () =>{
    let sectionPos = ProgressBars.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if(screenPos > sectionPos){
        ShowProgress();
        console.log('show');
    } else {
        console.log("hide");
    }
});
