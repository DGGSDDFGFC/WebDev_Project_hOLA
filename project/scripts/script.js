function validateForm() {
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let reason = document.getElementById("reason").value;
let question = document.getElementById("question").value;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (fname == "" || lname == "") {
	alert("First and last name are required");
    return 0;
}

for (const char of fname) {
    if (!(/[a-zA-Z]/).test(char)) {
        alert("Please enter your first name using english letters only");
        return 0;
    }
}

for (const char of lname) {
    if (!(/[a-zA-Z]/).test(char)) {
        alert("Please enter your last name using english letters only");
        return 0;
    }
}

if (email == "") {
	alert("Email is required");
    return 0;
}

else if(!emailRegex.test(email)) {
	alert("Please enter a valid email address");
	return 0;
}

else if (reason == "") {
    alert("Please select a reason for your inquiry");
    return 0;
}

else if (question == "") {
    alert("Please enter your question");
    return 0;
}




alert("Form submitted successfully!");
document.getElementById("fname").value="";
document.getElementById("lname").value="";
document.getElementById("email").value="";
document.getElementById("reason").value="";
document.getElementById("question").value="";   
return 1;
}