//Working scripts 
function btnChange() {
    document.getElementById("mainbtn").innerHTML = "You got it!";
}
//customerror alert
document.getElementById("customerror").addEventListener("click", function () {
    var containerDiv = document.getElementById("hiddenAlert");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "alertMessage");
    newDiv.innerHTML = "I don't do custom cuts! Who do you think I am? <span class='closebtn'>&times;</span>";
    newDiv.classList.add("errorMessage");
    containerDiv.appendChild(newDiv);



    newDiv.addEventListener("click", function () {
        containerDiv.removeChild(newDiv);
    });
});

//API Error 
const button = document.getElementById('apierror');
button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api-call/400?parm1=foo&parm2=bar');
    xhr.setRequestHeader("test", "fix test2 my test");
    xhr.setRequestHeader("content-type", "text/html");
    xhr.send("request body my test");
});