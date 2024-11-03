document.getElementById("generate-button").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;

    const response = await fetch("/chatbot/", { // Update endpoint to match your FastAPI route
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: userInput }),
    });

    if (response.ok) {
        const data = await response.json();
        const generatedCode = data.output; // Update variable to match response structure
        document.getElementById("generatedOutput").textContent = generatedCode; // Update to match new ID
        document.getElementById("output-container").style.display = "block"; // Show output
    } else {
        alert("Error generating output.");
    }
});

document.getElementById("copy-button").addEventListener("click", () => {
    const code = document.getElementById("generatedOutput").textContent; // Update to match new ID
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy: " + err);
    });
});
