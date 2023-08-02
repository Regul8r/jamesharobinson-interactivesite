
function sayHelloByName()
{
    var userInput = document.querySelector("#userInput").value;
    var userInput = document.querySelector ("#userName").innerHTML + " " + userInput
    document.querySelector("#userName").innerHTML = userInput

}

function briefMessage()
{
    var userMessage = document.querySelector("#userMessage").value; 
    var newLine = document.querySelector("#paragraph").innerHTML + " " + userMessage
    document.querySelector("#paragraph").innerHTML = newLine
}

function changeColor(el) 
{
    document.body.style.backgroundColor = el.value;
    var colorSelected = document. querySelector ("#theColors").value;   
    console.log(userInput + " has chosen " + colorSelected);
    
  }


function add_to_list()
{
    var item  = document.getElementById("add_item").value;
    if (item== ""){
        alert("Null value");
    }
    else{
        document.getElementById("addol").innerHTML += "<li>" + item + "</li>";
    document.getElementById("add_item").value = "";
    }
}



