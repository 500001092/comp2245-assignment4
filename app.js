document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        const url = query
            ? `superheroes.php?query=${encodeURIComponent(query)}`
            : "superheroes.php";

        console.log("Query:", query); 
        console.log("Request URL:", url); 

        fetch(url)
            .then(response => {
                console.log("Response Status:", response.status); 
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log("Response Data:", data); 
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error occurred:", error); 
                resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            });
    });
});
