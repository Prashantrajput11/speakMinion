let btn = document.querySelector(".btn");
let input=document.querySelector(".input-box")
let output=document.querySelector(".output-box")
// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl="https://api.funtranslations.com/translate/minion.json"

function getUrl(text)
{
return serverUrl + "?" +"text="  +text
}
// getUrl("i am crazy")



btn.addEventListener("click",function(){

console.log("working");
var inputText=input.value 


// fetch(getUrl(inputText))
// .then(response=>response.json())
// .then(json=>{var outputText=json.contents.translated
//     output.value=outputText});

    fetch(getUrl(inputText))
    .then(function(response){
return response.json()
    })
    .then(function(data){
var outputText=data.contents.translated
output.value=outputText
    })
    .catch(errorHandler)
});

function errorHandler(error){
    console.log("oops! somthing went wrong" ,error)
   }



