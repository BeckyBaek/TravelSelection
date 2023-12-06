document.addEventListener("DOMContentLoaded", () => {
  const suggestButton = document.getElementById("go-to-test");

  suggestButton.addEventListener("click", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "../html/where-to-go/traveltest.html"; // Replace with your desired URL
    }, 1000);
  });
});
