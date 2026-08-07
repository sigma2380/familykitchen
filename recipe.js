// Load header name and tag results
window.addEventListener("DOMContentLoaded", () => 
    {
        // get URL parameter
        var id = getSingleParameter("id");
        
        // ensure id is populated
        if (id === undefined) {
            displayError("No recipe selected");
            return;
        }
        var rec = recipes.filter(obj => obj.ID === id)[0];
        // ensure that 1 recipe exists
        if (rec === undefined) {
            displayError("Recipe not found");
            return;
        }

        document.querySelector("h2").innerText = rec.Title;
        document.getElementById("ingredients").innerHTML = listToHTML(rec.Ingredients, "<li>", "</li>", "\n");
        if (rec.Notes === "") {
            document.getElementById("notes").remove();
            document.getElementById("notesheader").remove();
        }
        else
        {
            document.getElementById("notes").innerText = rec.Notes;
        }
        document.getElementById("tags").innerHTML = listToHTML(rec.Categories, "<a href='asdf' class='smalltag'>", "</a>", "\n");
        document.getElementById("directions").innerHTML = listToHTML(rec.Instructions, "<ol>", "</ol>", "\n");
    }
);

function listToHTML(list, startTag, endTag, delimiter) {
    const listArray = list.split(delimiter).filter(Boolean);
    return startTag + listArray.join(endTag + startTag) + endTag;
}