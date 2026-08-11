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
        document.getElementById("directions").innerHTML = listToHTML(rec.Instructions, "<li>", "</li>", "\n");
        var footer = makeFooter(rec);
        if (footer !== "") {
            document.getElementById("footer").innerHTML = "<h3>Notes</h3>" + footer;
        }
    }
);

function listToHTML(list, startTag, endTag, delimiter) {
    const listArray = list.split(delimiter).filter(Boolean);
    return startTag + listArray.join(endTag + startTag) + endTag;
}

function makeFooter(rec) {
    var footer = "";
    if (rec.Notes !== undefined) {
        footer += "<div id='notes'>" + rec.Notes + "</div>";
    }
    if (rec.PrepTime !== undefined) {
        footer += "<div id='preptime'>Prep Time: " + rec.PrepTime + "</div>";
    }
    if (rec.CookTime !== undefined) {
        footer += "<div id='cooktime'>Cook Time: " + rec.CookTime + "</div>";
    }
    if (rec.ServingSize !== undefined) {
        footer += "<div id='servingsize'>Serving Size: " + rec.ServingSize + "</div>";
    }
    if (rec.Categories !== undefined) {
        footer += makeTags(rec.Categories);
    }
    if (rec.Author !== undefined) {
        footer += "<div id='ftko'>From the kitchen of " + rec.Author + "</div>";
    }
    return footer;
}

function makeTags(list) {
    const listArray = list.split(" ").filter(Boolean);
    var html = "";
    listArray.forEach(label => {
        html += `<a href='search.html?tag=${label}' class='smalltag'>${label}</a>`;
    });
    return html;
}