window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const functionApi = "";

function addEventListener() {}

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((response) => response.json())
    .then((jsonResponse) => {
      count = jsonResponse.count;
      console.log("Website called functionAPI.");
      document.getElementById("counter").innerText = "count";
    })
    .catch((error) => {
      console.log(error);
    });
  return count;
};
