window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApi = "";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((response) => response.json())
    .then((response) => {
      count = response.count;
      console.log("Website called functionAPI.");
      document.getElementById("counter").innerText = "count";
    })
    .catch((error) => {
      console.log(error);
    });
  return count;
};
