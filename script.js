const inputValue = document.getElementById("user-input");

// Handling number button clicks
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Handling operation buttons
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.slice(-1); // Get last character

    if (e.target.innerHTML === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText); // Calculate result
      } catch {
        inputValue.innerText = "Error"; // Handle invalid input
      }
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = "0"; // Reset input
    } else if (e.target.innerHTML === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1); // Remove last character
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0"; // Set to 0 if empty
      }
    } else {
      if (!isNaN(lastValue) || lastValue === ".") {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
