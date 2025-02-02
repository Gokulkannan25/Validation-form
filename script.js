document.getElementById("Registration").addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const confirmpassword=document.getElementById("confirmpassword").value;
    let isValid=true;
    if(username.lenght<3){
        showError("username Error","Username must be more than 3characters");
        isValid=false;
    }
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}/;
    if(!emailPattern.test(email)){
        showError("email Error","Please enter valid email address");
        isValid=false;
    }
    if(password.lenght<6){
        showError("password Error","Password must be more than 6characters");
        isValid=false;
    }
    if(password!=confirmpassword){
        showError("confirmpassword error","Password not match");
        isValid=false;
    }
    if(isValid){
        alert("Registration Successful");
        document.getElementById("Registration").reset();
    }
});
function showError(elementId,message){
    const errorElement=document.getElementById(elementId);
    errorElement.textContent=message;
}
function clearErrors(){
     const errorElements=document.querySelectorAll(".error");
     errorElements.forEach(element =>element.texContent="");
}
