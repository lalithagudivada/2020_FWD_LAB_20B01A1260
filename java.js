let a=document.getElementById("names");
let b=document.getElementById("email");
let c=document.getElementById("password");
let d=document.getElementById("number");
function callme(){
    if((names.value.length)<6)
    {
        alert("name is less than 6 characters");
    }
    if((password.value)<6)
    {
        alert("password is less than 6 characters");
    }
    if((number!=10))
    {
        alert("number should contain 10 digits");
    }
    if((email.value)=" ")
    {
        alert("invalid email");

    }
    else{
        alert("successfull");
    }
}