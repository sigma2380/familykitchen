function getSingleParameter(paramName) 
{
    return location.search.split(paramName + "=")[1];
}

function displayError(errorMessage) {
    document.getElementById("content").innerHTML = `<div class="error">Error: ${errorMessage}<div>`;
}