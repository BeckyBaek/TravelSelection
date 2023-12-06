let slideIndex = new Array();
let slideId = new Array();

// show js file is loaded, and let us know how many collectionOfPhotos are there.
console.log(
  `carouselButton.js is loaded. there are ${
    document.getElementsByClassName("collectionOfPhotos").length
  } collectionOfPhotos.`
);

// add slideId to slideId array
for (
  let i = 0;
  i < document.getElementsByClassName("collectionOfPhotos").length;
  i++
) {
  slideId.push(`photo-carousel-${i + 1}`);
  console.log(`photo-carousel-${i + 1} is added. Iteration: ${i}`);
  slideIndex.push(1);
}

for (
  let i = 0;
  i < document.getElementsByClassName("collectionOfPhotos").length;
  i++
) {
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);

  console.log(x[0]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  if (x[slideIndex[no] - 1]) {
    // Check if the element exists before trying to access its style property
    x[slideIndex[no] - 1].style.display = "block";
  }
}
