//Track the submit button and fire ajax request onClick
var submitButton = document.getElementById("submit-btn");
submitButton.onclick = function(){
    var values;
    if(values = getMessageFormValues()){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://52.37.109.117:5000/mail", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.onreadystatechange = function(){
            location.reload();
        }
        xhttp.send(JSON.stringify(values));
    }
};


//This will get and return values pertaining to the message form
function getMessageFormValues(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comment").value;
    if(name && email && message){
        return {
            name:name,
            email:email,
            message:message
        }
    }
    return null;
}
