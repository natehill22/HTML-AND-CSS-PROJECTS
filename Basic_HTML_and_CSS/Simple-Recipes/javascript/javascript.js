//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) { //This content will be looped through all available modals until the end is reached
    btns[i].onclick = function (event) { //Pulls in the specific index in the modal array that was clicked upon and runs the function with the event argument
        var modal = document.querySelector(event.target.getAttribute("href")); //Sets modal variable to equal the inputs' href value
        modal.style.display = "block"; //Sets the display of the entire modal to be viewable (using the specified href link)
    }
}

//When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) { //This loops through all available close buttons until the end of the array is reached
    closeBtn[i].onclick = function () { //Pulls in the specific index in the closeBtn array (starting at 0) that was clicked and runs the function
        for (var index in modals) { //Sets index to be the value of the div element containing the .recipe-modal class. This will update as it loops through the values within the modals array
            if (modals[index].style) { 
                modals[index].style.display = "none"; //If the index value (or the associated class) possesses an inline style property, set it to hide that display
            }
        }
    }
}

//Email validation
document.getElementById("contactForm").addEventListener('submit', 
    function (event) {
        //Overrides the default browser refresh when the submit button is pressed
        event.preventDefault();

        //Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //Email pattern checks for all symbols that would be needed for an email address such as the @ and . and the text that would come before, between, and after
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //Use this variable to display messages if fields are filled out or thank you message
        const valMsg = document.getElementById('validateMsg');
        if (!firstName || !lastName || !phone || !message) {
            //Checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
            } else if (!emailPattern.test(email)) {
                //Checks if there is a valid email
                valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
            } else {
                //If all fields are filled out correctly display thank you message
                valMsg.innerHTML = '<p style="color: red;">Thank you for Submitting!</p>';
            }
    }
)