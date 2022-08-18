messageText = ""
function translateText(){
    var translateMessage = new XMLHttpRequest();
    console.log(messageText)
    
    translateMessage.open('GET', translate_url, true)

    translateMessage.setRequestHeader("Content-Type", "application/json");

    translateMessage.onload = function(){
        newText = JSON.parse(translateMessage.responseText);
        console.log(newText)
        document.getElementById("description").textContent = newText;
    }

    translateMessage.send();
}