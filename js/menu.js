/*    Close Previous Menu   */
const selectorButtons = Object.values(document.getElementsByClassName('selector-button'));
selectorButtons.forEach(link => {
    link.addEventListener("click", closeSections);
})

function closeSections(event) {

    let opensections = document.querySelector('section[class~="on"]');
    let activebutton = document.querySelector('button[class~="active"]');

    console.log(opensections + " " + "is open");

    if (opensections !== null) {
        opensections.classList.replace("on", "off");
        activebutton.classList.replace("active", "inactive");
    } 
}


/*   Open Selected Menu    */
document.getElementById("selector").addEventListener("click", openSection);

function openSection(event) {

    let button = event.target.id;

    if(button == "selector") {
        return;
    } else{

        console.log(button);
        let sectionid = button.slice(0,-7);
        console.log(sectionid);
        let section = document.getElementById(sectionid);

        if(section.classList.contains("off")) {
            //  Open Chosen Menu Section
            console.log("executing else if block");
            section.classList.replace("off", "on");
            event.target.classList.replace("inactive", "active");
        } else if(section.classList.contains("on")) {
            //  Close Current Menu Section
            console.log("executing else if block");
            section.classList.replace("on", "off");/*
            event.target.classList.replace("active", "inactive");*/
        }
    }
}



/*------------------------------------------*/
/*------------------------------------------*/
/* Burgers & Sandwiches Expandable Sections */
/*------------------------------------------*/
/*------------------------------------------*/

/*Ex*/

/*function toggle(elementId) {
    var ele = document.getElementById(elementId);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
} */

/*  My Attempt  */ 
/*
document.getElementById("clubs").addEventListener("click", toggle);
document.getElementById("burgers").addEventListener("click", toggle);
document.getElementById("italian-sandwiches").addEventListener("click", toggle);
document.getElementById("sandwiches").addEventListener("click", toggle);


function toggle(event) {
    var elementId = event.target.id;
    var ele = document.getElementById(elementId);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
}*/