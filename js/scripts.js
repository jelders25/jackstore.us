//Working scripts 
function btnChange() {
    document.getElementById("mainbtn").innerHTML = "You got it!";
}
//customerror alert
document.getElementById("customerror").addEventListener("click", function () {
    var hiddenDiv = document.getElementById("alertmessage");
    hiddenDiv.style.display = "block";
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