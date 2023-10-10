//Working scripts 
function btnChange() {
    document.getElementById("mainbtn").innerHTML = "You got it!";
}

function cartChange() {
    document.getElementById("labelChange").innerHTML = "Checkout";
    document.getElementById("valueChange").innerHTML = "1";

    var button = document.getElementById("linkChange");
    button.onclick = function(event) {
        event.preventDefault();
        window.location.href = "/checkout.html";
}
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

//customerror alert
document.getElementById("customError").addEventListener("click", function () {
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

//API Error POST
const buttonPost = document.getElementById('apiError');
buttonPost.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api-call/400?parm1=foo&parm2=bar');
    xhr.setRequestHeader("test", "fix test2 my test");
    xhr.setRequestHeader("content-type", "text/html");
    xhr.send("request body my test");

});
//API Error GET
const buttonGet = document.getElementById('apiError');
buttonGet.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    const params = new URLSearchParams({
        parm1: 'foo',
        parm2: 'bar'
    });
    const url = '/api-call/400?' + params.toString();

    xhr.open('GET', url);
    xhr.setRequestHeader("test", "fix test2 my test");
    xhr.setRequestHeader("content-type", "text/html");
    xhr.send()
});

//API Error GraphQL 
const buttonQL = document.getElementById('apiError');
buttonQL.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'error.html');
    xhr.setRequestHeader("test", "fix test2 my test");
    xhr.setRequestHeader("content-type", "text/html");
    xhr.send("request body my test");
});

//Console Message
function consoleError() {
  console.error("Your Steak Consolation Sir!");
}