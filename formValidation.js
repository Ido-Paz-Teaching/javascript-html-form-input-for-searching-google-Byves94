//Please , don't remove the following code 
if (typeof window !== 'undefined') {
    window.onload = function () {
        //update the code that handles the form submit
        let button = document.querySelector("button");
        button.onclick = () => search(event);
    }
}
const forbidenWords = ['porn', 'murder', 'sex', 'violence'];
const minResults = 1;
const maxResults = 25;
const maxWordLength = 10;
//
function search(event) {
    let searchBox = document.getElementById('q').value;
    let numberResult = document.getElementById('num').value;

    if (validateQ(searchBox) != null && validateQ(searchBox) != undefined) {
        event.preventDefault();
        alert(validateQ(searchBox));
    }
    else if (validateNum(numberResult) != null && validateNum(numberResult) != undefined) {
        event.preventDefault();
        alert(validateNum(numberResult));
    }
    else
        return null;

}
//return a validation message in case the input is invalid
function validateQ(qValue) {
    let postfix = 'the search box';
    if (hasChar(qValue) && qValue.trim().length > 1) {
        if (isNumber(qValue))
            return '*Please enter only text ' + postfix;
        else if (hasATooLongWord(qValue))
            return `*Please enter words not longer then ${maxWordLength} ${postfix}`;
        else if (hasForbidenWord(qValue))
            return `*Please enter words other then ${forbidenWords} ${postfix}`;
    }
    else {
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    if (!isInRange(numValue))
        return `*Please enter number ${minResults} to ${maxResults} to tell google how many search results we want`;
    else {
        return null;
    }
}
//
function isInRange(text) {
    return (text > minResults && text <= maxResults);
}
//
function hasForbidenWord(text) {
    for (let x of forbidenWords) {
        if (text.indexOf(x) !== -1)
            return true;
    }
    return false;
}
//
function hasATooLongWord(text) {
    return text.length >= maxWordLength;
}
//
function hasChar(text) {
    if (!text) {
        return false;
    }
    return text.toString().trim().length > 0;
}

//
function isNumber(text) {
    return !isNaN(text);
}
//Please , don't remove the following code 
if (typeof module !== 'undefined') {
    module.exports = {
        isInRange,
        hasChar,
        isNumber,
        hasForbidenWord,
        hasATooLongWord,
    };
}
