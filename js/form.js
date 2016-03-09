// A basic sample on how to submit ajax data

// validate data, this is your validate functions
function validateData(){
	
	//var closeModal = document.getElementsByClassName("close")[0];
	
	//var saveBtn = document.getElementById("saveBtn");
	//var viewBtn = document.getElementById("viewBtn");

	var name = document.getElementById("name");
	var age = document.getElementById("age");
	var experience = document.getElementById("experience");
	var url = document.getElementById("url");

	var nameError = document.getElementById("nameError");
	var ageError = document.getElementById("ageError");
	var experienceError = document.getElementById("experienceError");
	var urlError = document.getElementById("urlError");
	
	var nameValid = 1;
	var ageValid = 1;
	var experienceValid = 1;
	var urlValid = 1;
	
	// check name input
	if(name.value == ""){
		nameValid = 0;
	}
	
	// check age input
	if(age.value <= 0 || age.value > 99){
		ageValid = 0;
	}
	
	// check years of experience input
	if(experience.value < 0 || experience.value > 99){
		experienceValid = 0;
	}
	
	// check age and years of experience inputs
	if(age.value <= experience.value){
		ageValid = 0;
		experienceValid = 0;
	}
	
	// check anchor url input
	if(url.value == "" || url.value.indexOf("#") == 0 || url.value.search(" ") >= 0 || url.value.search("http://www") >= 0){
		urlValid = 0;
	}
	
	// give error message when input name is invalid
	if(nameValid == 0){
		name.style.borderColor = "#dd4b39";
		name.style.borderWidth = "2px";
		nameError.style.opacity = 1;
	}else{
		name.style.borderColor = "#B9B9B9";
		name.style.borderWidth = "1px";
		nameError.style.opacity = 0;
	}

	// give error message when input age is invalid
	if(ageValid == 0){
		age.style.borderColor = "#dd4b39";
		age.style.borderWidth = "2px";
		ageError.style.opacity = 1;
	}else{
		age.style.borderColor = "#B9B9B9";
		age.style.borderWidth = "1px";
		ageError.style.opacity = 0;
	}

	// give error message when input years of experience is invalid
	if(experienceValid == 0){
		experience.style.borderColor = "#dd4b39";
		experience.style.borderWidth = "2px";
		experienceError.style.opacity = 1;
	}else{
		experience.style.borderColor = "#B9B9B9";
		experience.style.borderWidth = "1px";
		experienceError.style.opacity = 0;
	}

	// give error message when input anchor URL is invalid
	if(urlValid == 0){
		url.style.borderColor = "#dd4b39";
		url.style.borderWidth = "2px";
		urlError.style.opacity = 1;
		urlError.textContent = "Invalid anchor URL.";
	}else{
		url.style.borderColor = "#B9B9B9";
		url.style.borderWidth = "1px";
		urlError.style.opacity = 0;
	}

	// when all inputs are valid, open the modal
	if(nameValid == 1 && ageValid == 1 && experienceValid == 1 && urlValid == 1){ 			
		//(document.getElementById('myModal')).style.display = "block";
		return true; 
	}
}

// use ajax to submit the form data to server (see notes in week 4)
function sendData(){
	/*// when all inputs are valid, open the modal	
	(document.getElementById('myModal')).style.display = "block";
	
	// when the user clicks on <span> (x), close the modal
	(document.getElementsByClassName("close")[0]).onclick = function() {
		(document.getElementById('myModal')).style.display = "none";
	}*/
	
    console.log("Assignment2: Submit data to server using ajax");    
}

$(document).ready(function(){    
  
	// When the user clicks the view talent button, check the inputs and make corresponding responses
	viewBtn.onclick = function(){
		if(url.value == "" || url.value.indexOf("#") == 0 || url.value.search(" ") >= 0 || 
		url.value.search("http://www.dungeonsanddevelopers.com/#") >= 0){
			url.style.borderColor = "#dd4b39";
			url.style.borderWidth = "2px";
			urlError.style.opacity = 1;
			urlError.textContent = "Cannot view invalid URL.";
		}else{
			window.open("http://www.dungeonsanddevelopers.com/#" + url.value, '_blank');
		}
	}
  
	// call this when user submit the form
	// but when adding event.preventDefault() or return false
	// this will tell the page not to submit anything
	// call your ajax function to submit the data instead  
    $( "#target" ).submit(function( event ) { 
        event.preventDefault();
        
        var success = validateData();
        
        if(success)
            sendData();
        
        return false;
    });  
    
});

