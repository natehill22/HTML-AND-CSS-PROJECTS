//Intialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]') //Creates an array of all elements in the html that use the popover setting for the data-bs-toggle property and sets it to the popoverTriggerList variable

popoverTriggerList.forEach(function (element) { //Element arguement represents each item in the popoverTriggerList array. Runs this function for each item within this array
    var imgSrc = element.getAttribute('data-bs-img'); //Gets the image path from the data attribute data-bs-img and assigns it to imgSrc
    var content = "<img class='star-rating' src='" + imgSrc + "'>"; //Passes that imgSrc data into the "content" variable with an HTML img tag structured around it so that it can effectively be inserted when the popover is triggered
    new bootstrap.Popover(element, { //Creates a new popover instance and attaches it to the specified element that will trigger it
        content: content, //Sets the content to the popover to the content variable (which contains the HTML string and imdSrc data)
        html: true, //Indicates that the content is HTML
        trigger: 'hover' //Sets the trigger event for the popover to hover, so it will show when hovered over
    });
});

//Initialize Toast
var toastElList = [].slice.call(document.querySelectorAll('.toast')) //Gathers and stores all "toast" class elements from the HTML into an array (toastElList) and converts this array into a true JS array
var toastList = toastElList.map(function (toastEl) { //Iterates over each element of an array and applies a callback function to each (each element is the arguement--this is defined by the map function). It then collects the results of calling the callback function into a new array (toastList)
  return new bootstrap.Toast(toastEl) //Turns the HTML element into a bootstrap.Toast object and stops the process
})

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text; //Setting the movie variable to a string of the selected option within the HTML's movieSelect ID
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text; //Setting the time variable to a string of the selected option within the HTML's timeSelect ID
    var quantity = document.getElementById('quantity').value; //Setting the quantity variable to the HTML's quantity value

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity; // \n is a newline character indicating a line break. Should show a string of all selected elements (movie, time, quantity) all on their own lines

    //Display toast
    var toastBody = document.getElementById('toastBody'); //Setting the toastBody variable to get the HTML element with the toastBody CSS class selector
    toastBody.textContent = message; //Shows the text value of the message variable within the toastBody container
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay')); //Setting the toast variable to the newly created Bootstrap toast instance and tying it to the HTML element toastDisplay
    toast.show() //Actually shows the toast

    //Shows a warning alert if quantity of purchased tickets is over ten.
    if (quantity >= 10) {
        document.querySelectorAll(".alert-warning").forEach(function(element) {
            element.style.display= "block";
        });
    } else { //If ticket quantity is redunced below 10, warning alert goes away
        document.querySelectorAll(".alert-warning").forEach(function(element) {
            element.style.display= "none";
        });
    }   
}

function buyTickets() {
    displaySelectedMovieOptions(); //When the buy tickets button is pressed to run the displaySelectedMovieOptions function
}

//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () { 
    if ($(document).scrollTop() > 50) { //When scrolled down (from the top) by 50px, add the nav-shrink class selector (to the HTML element that has the nav class) and adjust the position of the mobile drop menu to accommodate the new height decrease
        $("nav").addClass("nav-shrink"); 
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        $("nav").removeClass("nav-shrink"); //If the webpage has not been scrolled down or is back at the top, the nav-shrink class selector is removed from the HTML element (with the nav class selector) and 
        $("div.navbar-collapse").css("margin-top", "14px"); //The margin for the drop down menu is now returned to it's original amount
    }
});

//Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() { //Upon clicking on an element that contains the nav-link class (without the dropdown-toggle) or .dropdown-item (movie links),
        $(".navbar-collapse").collapse('hide'); //Collapse the navbar (when a link or dropdown item is clicked)
    });
});
