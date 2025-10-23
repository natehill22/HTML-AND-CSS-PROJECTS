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
        setTimeout(function() {modal.style.display = "none"}, 10000); //Closes the open modal after 10 seconds
    }
}

//When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) { //This loops through all available close buttons until the end of the array is reached
    closeBtn[i].onclick = function () { //Pulls in the specific index in the closeBtn array (starting at 0) that was clicked and runs the function
        for (var index in modals) { //Sets index to be the value of the div element containing the .recipe-modal class. This will update as it loops through the values within the modals array
            if (modals[index].style) { 
                modals[index].style.display = "none"; //If the specific "index" div element within the .recipe-modal class array has any existing CSS style within the HTML element, set it to hide that display
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

        //Use this variable to display validation or thank you messages
        const valMsg = document.getElementById('validateMsg'); //Ties the valMsg variable to the HTML location where we want messages shown
        if (!firstName || !lastName || !phone || !message) { //Checks if any of these variables are falsy
            //Checks if fields have been filled out. If not, update HTML location with below content
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
        } else if (!emailPattern.test(email)) {
            //Checks if there is a valid email. If not, update HTML location with below content
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
        } else {
            //If all fields are filled out correctly, display thank you message
            valMsg.innerHTML = '<p style="color: red;">Thank you for Submitting!</p>';
        }

        //Creates an object that pulls all the entered form data 
        const formData = { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //Display what the user wrote in the console
        console.log(JSON.stringify(formData))
    }
)