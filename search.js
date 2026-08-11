// Load header name and tag results
window.addEventListener("DOMContentLoaded", () => 
    {
        // get URL parameters
        var tag = getSingleParameter("tag");
        var keyword = getSingleParameter("keyword");

        // ensure both are not populated
        if (tag !== null && keyword !== null) {
            displayError(`Both tag and keyword specified ${tag} ${keyword}`);
            return;
        }

        // Try tag first
        if (tag !== null)
        {
            document.querySelector("h3").innerText = tag + " Tags";
            var results = "";
            for (const r of recipes) {
                if (r.Categories !== undefined && r.Categories.includes(tag)) {
                    results += `<li><a href="recipe.html?id=${r.ID}">${r.Title}</a></li>`;
                }
            }
            document.getElementById("results").innerHTML = results;
        }

        // Then try keyword
        else if (keyword !== null) {
            keyword = keyword.toLowerCase();
            document.querySelector("h3").innerText = "Search for: " + keyword;
            var results = "";
            for (const r of recipes) {
                if ((r.Categories !== undefined && r.Categories.toLowerCase().includes(keyword)) ||
                    (r.Title !== undefined && r.Title.toLowerCase().includes(keyword)) ||
                    (r.Ingredients !== undefined && r.Ingredients.toLowerCase().includes(keyword)) ||
                    (r.Instructions !== undefined && r.Instructions.toLowerCase().includes(keyword))) {
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