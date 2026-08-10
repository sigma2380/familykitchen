function getSingleParameter(paramName) 
{
    const params = new URLSearchParams(location.search);
    return params.get(paramName);
}

function displayError(errorMessage) {
    document.getElementById("content").innerHTML = `<div class="error">Error: ${errorMessage}</div>`;
}