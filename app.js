
// Reference all the necessary tags
let btn = document.querySelector(".btn");
let input = document.querySelector(".input-box")
let output = document.querySelector(".output-box")


// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

// construct url by appending the user's text
let getUrl = text => serverUrl + "?" + "text=" + text


// Get the data (fetched by url) on click on the button.
let getData = () =>{

    let inputText = input.value

    // Fetch data
    fetch(getUrl(inputText))
    .then(
        response => response.json() // converts the response in readable format
    )
    .then(
        json => {
            let outputText = json.contents.translated
            output.value = outputText
        }
    )
}

// Event handler 
btn.addEventListener("click", getData)





