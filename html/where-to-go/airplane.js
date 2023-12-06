window.onload = function () {
  const icon = document.getElementById("flyingAirplane");
  const mainContent = document.getElementsByTagName("main")[0];

  // Move the icon
  icon.style.left = "65%"; // Adjust as needed for your layout

  // Set a timeout to fade out the icon after 2.5 seconds
  setTimeout(() => {
    icon.style.opacity = "0";
    icon.style.display = "none";
    icon.style.scale = "1"; // Adjust as needed for your layout

    // Fade in the main content after the icon fades out
    setTimeout(() => {
      mainContent.style.display = "block";
      mainContent.style.opacity = "1";
    }, 500);
  }, 3500);
};
