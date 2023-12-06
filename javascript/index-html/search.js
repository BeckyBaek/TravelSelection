function searchAndRedirect() {
  const predefinedKeywords = {
    칸쿤: "http://127.0.0.1:3000/html/places-info/mexico/cancun1.html",
    아이슬란드: "http://127.0.0.1:3000/html/places-info/iceland/iceland.html",
    홍콩: "http://127.0.0.1:3000/html/places-info/hongkong/hognkong.html",
    뉴욕: "http://127.0.0.1:3000/html/places-info/newyork/newyork.html",
    시드니: "http://127.0.0.1:3000/html/places-info/australia/sydney.html",
    도쿄: "http://127.0.0.1:3000/html/places-info/japan/tokyo.html",
    토론토: "http://127.0.0.1:3000/html/places-info/canada/tornonto.html",
    산티아고: "http://127.0.0.1:3000/html/places-info/chile/santiago.html",
    몽골: "http://127.0.0.1:3000/html/places-info/mongolia/mongolia.html",
    하얼빈: "http://127.0.0.1:3000/html/places-info/china/harbin.html",
    // Add more keywords and URLs
  };

  let input = document.getElementById("searchInput").value;
  console.log(`input: ${input}`);
  if (predefinedKeywords[input]) {
    window.location.href = predefinedKeywords[input];
  } else {
    alert("다시 입력하세요.");
  }
}
