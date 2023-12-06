// Two arrays are for searching the place name in the search bar.
let servicing_places = [
  "칸쿤",
  "아이슬란드",
  "홍콩",
  "뉴욕",
  "시드니",
  "도쿄",
  "토론토",
  "산티아고",
  "몽골",
  "하얼빈",
];

// display the places' name on the screen
document.addEventListener("DOMContentLoaded", () => {
  let listing_for_travel = document.getElementById("listing-for-travel");
  listing_for_travel.innerHTML = servicing_places.join("<br>");
});
