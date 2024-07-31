function search() {
    var searchTerm = document.getElementById("searchInput").value;
    // Here you would perform a search operation, either using AJAX to a server-side script or searching through client-side data
    // For demonstration purposes, let's assume you have a list of books stored in a JavaScript array
    var theses = [
        {title: "Exploring The Challenges of Student Leaders in Educational Institutions in Tagbilaran City", author: "Group 2", link: "llama.png"},
        {title: "Feasibility of an e-Library for Students' Theses", author: "Group 4", link: "test"},
        {title: "Banana Peelings And Soybean Meal as Fertilizer for Sweet Potatoes", author: "Joemari S. Deluna", link: "BananaPeelingsandSoybeanMealasFertilizerforSweetPotatoes.pdf"}
        // Add more books as needed
    ];
    var searchResults = theses.filter(
        function(theses) {
            return theses.title.toLowerCase().includes(searchTerm.toLowerCase()) || theses.author.toLowerCase().includes(searchTerm.toLowerCase());
        }
    );
    var searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results

    if (searchResults.length > 0) {
        searchResults.forEach(function(theses) {
            var bookDiv = document.createElement("div");
            bookDiv.innerHTML = "<h2><a href=\""+theses.link+"\">" + theses.title + "</a></h2><p>By: " + theses.author + "</p>";
            searchResultsContainer.appendChild(bookDiv);
        });
    } else {
        searchResultsContainer.innerHTML = "<center><p>No results found.</p></center>";
    }
}