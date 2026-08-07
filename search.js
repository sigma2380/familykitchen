// Load header name and tag results
window.addEventListener("DOMContentLoaded", () => 
    {
        // get URL parameters
        var tag = getSingleParameter("tag");
        var keyword = getSingleParameter("keyword");

        // ensure both are not populated
        if (tag !== undefined && keyword !== undefined) {
            displayError("Both tag and keyword specified");
            return;
        }

        // Try tag first
        if (tag !== undefined)
        {
            document.querySelector("h3").innerText = tag + " Tags";
            var results = "";
            for (const r of recipes) {
                if (r.Categories.includes(tag)) {
                    results += `<li><a href="recipe.html?id=${r.ID}">${r.Title}</a></li>`;
                }
            }
            document.getElementById("results").innerHTML = results;
        }

        // Then try keyword
        else if (keyword !== undefined) {
            document.querySelector("h3").innerText = "Search for: " + keyword;
            var results = "";
            for (const r of recipes) {
                if (r.Categories.includes(keyword) || r.Ingredients.includes(keyword) || r.Instructions.includes(keyword) || r.Title.includes(keyword)) {
                    results += `<li><a href="recipe.html?id=${r.ID}">${r.Title}</a></li>`;
                }
            }
            document.getElementById("results").innerHTML = results;
        }

        // Neither search method was defined
        else {
            displayError("No tag or keyword specified");
            return;
        }
    }
);