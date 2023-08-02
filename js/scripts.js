//Working scripts 
function btnChange() {
    document.getElementById("mainbtn").innerHTML = "You got it!";
}
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
const buttonPost = document.getElementById('apiError');
buttonPost.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api-call/400?parm1=foo&parm2=bar');
    xhr.setRequestHeader('test', 'fix test2 my test');
    xhr.setRequestHeader('content-type', 'application/json'); // Use JSON content type for GraphQL

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Parse the JSON response
                const response = JSON.parse(xhr.responseText);
                console.log('Response:', response);
                // Check for errors
                if (response.errors) {
                    console.error('GraphQL Error:', response.errors);
                }
            } else {
                console.error('Request failed:', xhr.status, xhr.statusText);
            }
        }
    };

    // GraphQL query with an error
    const requestBody = JSON.stringify({
        query: `
          query {
            user(id: 123) {
              name
              email
            }
          }
        `,
    });

    xhr.send(requestBody);