function search() {
    var searchTerm = document.getElementById("searchInput").value;
    fetch('entries.json') //fetches JSON objects
        .then(response => response.json())
        .then(entries => {
            var searchResults = entries.filter(
            function(entries) {
                return entries.title.toLowerCase().includes(searchTerm.toLowerCase()) || entries.author.toLowerCase().includes(searchTerm.toLowerCase());
            }
        );
        searchResults.sort((a, b) => (a.title > b.title ? 1 : -1)); //sorts alphabetically
        var searchResultsContainer = document.getElementById("searchResults");
        searchResultsContainer.innerHTML = ""; // Clear previous search results
        
        if (searchResults.length > 0) {
            searchResults.forEach(function(entries) {
                var bookDiv = document.createElement("div");
                bookDiv.innerHTML = "<h2><a href=\""+entries.link+"\">" + entries.title + "</a></h2><p>By: " + entries.author + "</p><p>ID: " + entries.id + "</p>";
                searchResultsContainer.appendChild(bookDiv);
            });
        } else {
            searchResultsContainer.innerHTML = "<center><p>No results found.</p></center>";
        }
    })
        .catch(error => console.error("Error fetching JSON data:", error));
}
document.addEventListener("DOMContentLoaded", search);