//Opens the modal by altering display status of the HTML element
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Closes the modal by altering display status of the HTML element
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//Sets up the variables and functions needed to enable the paging functionality
var slideIndex = 1; //Sets slideIndex to 1 to ensure that the first image always shows upon modal open
showSlides(slideIndex); //Runs the showSlides function with the slideIndex arguement

//Next/previous controls
function plusSlides(n) { //Defines plusSlides and gives it the arguement of either 1 (for page next) or -1 (for previous)
    showSlides(slideIndex += n); //Runs the showSlides function with the updated slideIndex arguement (equals the number of the current slide plus the 1 or -1 given through page button functions)
}

//Thumbnail image controls
function currentSlide(n) { //Defines currentSlide function and gives it a parameter
    showSlides(slideIndex = n); //Runs the showSlides function with the updated slideIndex arguement (equals the number passed through currentSlide -- gained upon clicking on specific thumbnails)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //Sets the slides array to equal all the values of the mySlides class
    var dots = document.getElementsByClassName("demo"); //Sets the dots array to equal all the values of the demo class
    var captionText = document.getElementById("caption"); //Sets the captionText variable to be the value of caption ID (it's a paragraph)
    if (n > slides.length) {slideIndex = 1} //If the n value (pulled from the HTML by paging) is more than the number of elements in the slides array, set slideIndex back to 1 (show the first page)
    if (n < 1) {slideIndex = slides.length} //If the n value (pulled from the HTML by paging) is less than 1 (the first image), set slideIndex to the full count of the array (show the last page)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Iterate through the length of the slides array (until the end is reached) and hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Iterate through the length of the dots array (until the end is reached) and alter any .active classes to be inactive
    }
    slides[slideIndex-1].style.display = "block"; //Show the current selection of the slides array. slideIndex -1 to match array numbering (0-4) with .length numbering (1-5)
    dots[slideIndex-1].className += " active"; //Sets the current selection of the dots array to have an active class. slideIndex -1 to match array numbering (0-4) with .length numbering (1-5)
    captionText.innerHTML = dots[slideIndex-1].alt; //Shows the alt text for the currently active dot on the HTML p tag with the caption ID
}