// Add an event listener to call getVisitCount when the DOM content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

// Replace with your cloud-based Azure Function URL
const functionApi =
  "https://counteribrahim.azurewebsites.net/api/HttpTrigger1?code=pHzHGSaV0IBmxUk0olJyLH59TIVRGt42xZUBsbIE3QfXAzFu41Yzig==";

// Function to get the visit count from the API
const getVisitCount = () => {
  fetch(functionApi)
    .then((response) => response.text()) // Fetch the response as plain text
    .then((data) => {
      console.log("Raw response from API:", data); // Log the raw API response for debugging
      // Use a regular expression to find the first number in the response
      const countMatch = data.match(/\d+/);
      // Parse the number or default to 0 if no number is found
      const count = countMatch ? parseInt(countMatch[0], 10) : 0;
      console.log("Extracted count:", count); // Log the extracted count
      // Update the HTML element with the ID 'counter' to show the count
      document.getElementById("counter").innerText = count;
    })
    .catch((error) => {
      console.error("Error occurred:", error); // Log any errors encountered during the fetch
    });
};
