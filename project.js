//const errorMessage =document.getElementById('errorMessage')
const userName = document.getElementById('email')
const password =document.getElementById('matric')
const btn = document.getElementById('btn')
const myForm =document.getElementById('myForm')

//Add event listener
myForm.addEventListener('submit',formValidate)
//btn.addEventListener('click',moveToNextPage)


//create a function
function formValidate(e){
e.preventDefault();

// Create an array of error

let message = []


//Get users data
if(email.value === ""){
    message.push("Please Enter Email")
}

if(matric.value === ""){
    message.push("Please Enter Matric")
}
//if(matric.value.length < 5 ){
    //message.push("matric must be at least 5 charater ")
//}
//check if the error exist
if(message.length > 0 ){
    errorMessage.innerText = message.join(',');
}
else{
    moveToNextPage()
}

}


//move to next page
function moveToNextPage(){

    window.location = ("quiz.html")
}
