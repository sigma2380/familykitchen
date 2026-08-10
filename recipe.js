// Load header name and tag results
window.addEventListener("DOMContentLoaded", () => 
    {
        // get URL parameter
        var id = getSingleParameter("id");
        
        // ensure id is populated
        if (id === null) {
            displayError("No recipe selected");
            return;
        }
        var rec = recipes.filter(obj => obj.ID === id)[0];
        // ensure that 1 recipe exists
        if (rec === null) {
            displayError("Recipe not found");
            return;
        }

        document.querySelector("h2").innerText = rec.Title;
        document.getElementById("ingredients").innerHTML = listToHTML(rec.Ingredients, "<li>", "</li>", "\n");
        if (!rec.Notes) {
            document.getElementById("notes").remove();
            document.getElementById("notesheader").remove();
        }
        else
        {
            document.getElementById("notes").innerText = rec.Notes;
        }
        document.getElementById("tags").innerHTML = makeTags(rec.Categories);
        document.getElementById("directions").innerHTML = listToHTML(rec.Instructions, "<li>", "</li>", "\n");
    }
);

function listToHTML(list, startTag, endTag, delimiter) {
    const listArray = list.split(delimiter).filter(Boolean);
    return startTag + listArray.join(endTag + startTag) + endTag;
}

function makeTags(list) {
    const listArray = list.split("\n").filter(Boolean);
    var html = "";
    listArray.forEach(label => {
        html += `<a href='search.html?tag=${label}' class='smalltag'>${label}</a>`;
    });
    return html;
}