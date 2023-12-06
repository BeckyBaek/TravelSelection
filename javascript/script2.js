document.addEventListener("DOMContentLoaded", (event) => {
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionContainer = document.getElementById("option-container");
  const nextButton = document.getElementById("next");
  const previousButton = document.getElementById("previous");
  const progressBar = document.getElementById("progress-bar");

  let currentQuestionIndex = 0;

  const questions = [
    {
      question:
        "당신도 몰랐던 내 안의 숨겨진 모험심을 일깨우고 싶은 열망이 있으신가요?",
      options: [
        "모험심이라..! 안될 거 뭐 있어! 한번 사는 인생, 도전해볼래요!",
        "흠... 그래도 전 안전한 곳에서 편안하게 지내고 싶어요.",
      ],
    },
    {
      question:
        "도시의 반짝거리는 야경이 좋으신가요, 마음이 몽글몽글해지는 자연의 석양이 좋으신가요?",
      options: [
        "고층 건물에서 나오는 불빛으로 가득찬 도시적인 느낌이 좋아요.",
        "탁 트인 곳에서 해가 지는 것을 바라보는 것만큼 낭만적인게 없죠!",
      ],
    },
    {
      question: "캐리어에 어떤 옷을 챙겨가고 싶으신가요?",
      options: [
        "포근하고 따뜻한 겨울옷을 챙겨갈래요!겨울 악세러리만큼 귀여운게 없죠",
        "캐리어 무거운거 딱 질색이예요! 시원시원한 여름옷을 챙겨가고싶어요",
      ],
    },
    {
      question: "여행을 떠나기 위해 비행기를 타러가봅시다!",
      options: [
        "답답한 건 딱 질색! 최대한 적은 시간 비행하고싶어요",
        "나는야 체력왕! 장거리 비행도 끄떡없죠!",
      ],
    },
    {
      question:
        "비행기에서 내려서 드디어 도착한 공항! 제일 먼저 들려오는 언어는?",
      options: [
        "Welcome! 영어가 자연스레 들려온다. ",
        "#($*!&*@!익숙하지 않은 언어가 들려온다",
      ],
    },
    // 더 많은 질문을 추가할 수 있습니다.
  ];
  // 다른 질문들...

  function updateProgressBar() {
    // 전체 질문의 수로 나누어 현재 질문의 인덱스에 비례하는 너비를 계산합니다.
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
  }

  function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
    optionContainer.innerHTML = ""; // 기존 옵션들을 비웁니다.

    question.options.forEach((option, i) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = i;
      radio.id = "option" + i;

      const label = document.createElement("label");
      label.htmlFor = "option" + i;
      label.className = "option";
      label.appendChild(radio);

      const description = document.createTextNode(option);
      label.appendChild(description);

      optionContainer.appendChild(label);
    });
    updateProgressBar(); // 질문이 변경될 때마다 프로그레스 바를 업데이트합니다.
  }

  function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      showResults(); // 모든 질문이 끝났을 때 결과를 표시합니다.
    }
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    }
  }

  function showResults() {
    // 결과 처리 로직을 여기에 작성합니다.
    alert("심리테스트가 끝났습니다. 결과 페이지로 이동합니다.");
    // 결과 페이지로 리다이렉트하거나 결과를 표시할 수 있습니다.
  }

  nextButton.addEventListener("click", showNextQuestion);
  previousButton.addEventListener("click", showPreviousQuestion);

  // 최초 질문 표시
  showQuestion(currentQuestionIndex);
});
