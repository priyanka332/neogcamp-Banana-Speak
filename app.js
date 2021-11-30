var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", getTranslationURL)
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverUrl + "?" + "text= " + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time.")
}
function clickHandler() {
    var inputText = txtInput.value  // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)