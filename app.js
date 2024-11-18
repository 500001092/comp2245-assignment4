// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Grab the button by its ID
    const searchButton = document.getElementById("searchButton");

    // Add a click event listener to the button
    searchButton.addEventListener("click", () => {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Open a GET request to 'superheroes.php'
        xhr.open("GET", "superheroes.php", true);

        // Define what happens when the request is complete
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Display the server's response as an alert
                alert(xhr.responseText);
            } else {
                // Handle errors
                alert("Error fetching data: " + xhr.statusText);
            }
        };

        // Handle network errors
        xhr.onerror = function () {
            alert("Network error occurred.");
        };

        // Send the request
        xhr.send();
    });
});
