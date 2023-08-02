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
const buttonQL = document.getElementById('buttonQL');
buttonQL.addEventListener('click', async () => {
    const url = '/graphql'; // Update with your GraphQL endpoint

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

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json', // Use JSON content type for GraphQL
                'test': 'fix test2 my test',
            },
            body: requestBody,
        });

        const responseData = await response.json();
        console.log('Response:', responseData);

        if (responseData.errors) {
            console.error('GraphQL Error:', responseData.errors);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
});