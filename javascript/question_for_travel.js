document.addEventListener("DOMContentLoaded", (event) => {
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionContainer = document.getElementById("option-container");
  const nextButton = document.getElementById("next");
  const previousButton = document.getElementById("previous");
  const progressBar = document.getElementById("progress-bar");
  const askElemnet = document.getElementById("asks");
  // 현재 질문의 인덱스
  let currentQuestionIndex = 0;
  // 사용자가 선택한 답을 저장할 배열
  let userAnswers = [];

  // 질문들
  const questions = [
    {
      // 질문 1
      question:
        "당신도 몰랐던 내 안의 숨겨진 모험심을 일깨우고 싶은 열망이 있으신가요?",
      options: [
        "모험심이라..! 안될 거 뭐 있어! 한번 사는 인생, 도전해볼래요!",
        "흠... 그래도 전 안전한 곳에서 편안하게 지내고 싶어요.",
      ],
    },
    {
      // 질문 2
      question:
        "도시의 반짝거리는 야경이 좋으신가요, 마음이 몽글몽글해지는 자연의 석양이 좋으신가요?",
      options: [
        "고층 건물에서 나오는 불빛으로 가득찬 도시적인 느낌이 좋아요.",
        "탁 트인 곳에서 해가 지는 것을 바라보는 것만큼 낭만적인게 없죠!",
      ],
    },
    {
      // 질문 3
      question: "캐리어에 어떤 옷을 챙겨가고 싶으신가요?",
      options: [
        "포근하고 따뜻한 겨울옷을 챙겨갈래요!겨울 악세러리만큼 귀여운게 없죠",
        "캐리어 무거운거 딱 질색이예요! 시원시원한 여름옷을 챙겨가고싶어요",
      ],
    },
    {
      // 질문 4
      question: "여행을 떠나기 위해 비행기를 타러가봅시다!",
      options: [
        "답답한 건 딱 질색! 최대한 적은 시간 비행하고싶어요",
        "나는야 체력왕! 장거리 비행도 끄떡없죠!",
      ],
    },
    {
      // 질문 5
      question: "나에게 여행이란?",
      options: [
        "새로운 곳에서 새로운 나를 찾아가는 것",
        "지친 현실을 피해 느긋하게 쉬고 오는 것 ",
      ],
    },
    // 더 많은 질문을 추가할 수 있습니다.
  ];
  // 다른 질문들...

  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + "%";
  }

  function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
    optionContainer.innerHTML = "";

    question.options.forEach((option, i) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = i;
      radio.id = "option-" + i;

      const label = document.createElement("label");
      label.htmlFor = "option-" + i;
      label.className = "option";
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));

      optionContainer.appendChild(label);
    });
    updateProgressBar();
  }

  function showNextQuestion() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );
    // 사용자가 선택한 답을 저장한다.
    if (selectedOption) {
      userAnswers[currentQuestionIndex] = selectedOption.value === "0";
    }
    // 다음 질문이 있으면 다음 질문을 보여주고, 없으면 결과를 보여준다.
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    }
  }

  // 여행지 추천 결과
  function showResults() {
    // !userAnswers[n]: "0", userAnswers[n]: "1"
    if (userAnswers.length === questions.length) {
      // 칸쿤 선택지: "0", "1", "1", "1", "1"
      // 모험심, 석양, 여름, 장거리, 휴양
      const result_Cancun_Mexico =
        userAnswers[0] &&
        !userAnswers[1] &&
        !userAnswers[2] &&
        !userAnswers[3] &&
        !userAnswers[4];
      // 아이슬란드 선택지: both, "1", "0", "1", both
      // 모험 + 안전, 석양, 겨울, 장거리, 자아 + 휴식
      const result_Iceland =
        (userAnswers[0] || !userAnswers[0]) &&
        !userAnswers[1] &&
        userAnswers[2] &&
        !userAnswers[3] &&
        (userAnswers[4] || !userAnswers[4]);
      // 뉴욕 선택지: "0", "0", both, both, both
      // 모험심, 도시, 여름 + 겨울, 장거리 + 단거리, 자아 + 휴식
      const result_NewYork =
        userAnswers[0] &&
        userAnswers[1] &&
        (userAnswers[2] || !userAnswers[2]) &&
        (userAnswers[3] || !userAnswers[3]) &&
        (userAnswers[4] || !userAnswers[4]);
      // 몽골 선택지: "0", "1", "1", "0", both
      // 모험심, 석양, 여름, 단거리, 자아 + 휴식
      const result_Mongolia =
        userAnswers[0] &&
        !userAnswers[1] &&
        !userAnswers[2] &&
        userAnswers[3] &&
        (userAnswers[4] || !userAnswers[4]);
      /// 칠레 선택지: "0", "1", "1", "1", "0"
      // 모험심, 석양, 여름, 단거리, 자아
      const result_Chile =
        userAnswers[0] &&
        !userAnswers[1] &&
        !userAnswers[2] &&
        !userAnswers[3] &&
        userAnswers[4];
      // 홍콩 선택지: "1", "0", both, "0", "0"
      // 안전, 도시, 여름 + 겨울, 단거리, 자아
      const result_HongKong =
        !userAnswers[0] &&
        userAnswers[1] &&
        (userAnswers[2] || !userAnswers[2]) &&
        userAnswers[3] &&
        userAnswers[4];
      // 일본 선택지" "1", "0", both, "0", "1"
      // 안전, 도시, 여름 + 겨울, 단거리, 휴식
      const result_Japan =
        !userAnswers[0] &&
        userAnswers[1] &&
        (userAnswers[2] || !userAnswers[2]) &&
        userAnswers[3] &&
        !userAnswers[4];
      // 캐나다 토론토 선택지: "1", "1","1 "1", "0"
      // 안전, 도시, 여름 + 겨울, 장거리, 자아
      const result_Toronto =
        !userAnswers[0] &&
        !userAnswers[1] &&
        !userAnswers[2] &&
        !userAnswers[3] &&
        (userAnswers[4] || !userAnswers[4]);
      // 호주 선택지: "1", "1", both, "0", both
      // 안전, 석양, 여름 + 겨울, 단거리, 자아 + 휴식
      const result_Australia =
        !userAnswers[0] &&
        !userAnswers[1] &&
        (userAnswers[2] || !userAnswers[2]) &&
        userAnswers[3] &&
        (userAnswers[4] || !userAnswers[4]);
      // 중국: "0", "1", "0", "0", both
      // 모험, 석양, 겨울, 단거리, 자아 + 휴식
      const result_China =
        userAnswers[0] &&
        !userAnswers[1] &&
        userAnswers[2] &&
        userAnswers[3] &&
        (userAnswers[4] || !userAnswers[4]);

      // 결과: 칸쿤
      if (result_Cancun_Mexico) {
        window.location.href = "result_destinations/result_cancun.html"; // Redirect to result page or display results
      }
      // 결과: 아이슬란드
      else if (result_Iceland) {
        window.location.href = "result_destinations/result_iceland.html"; // Redirect to result page or display results
      }

      // 결과: 뉴욕
      else if (result_NewYork) {
        window.location.href = "result_destinations/result_newyork.html"; // Redirect to result page or display results
      }
      // 결과: 몽골
      else if (result_Mongolia) {
        window.location.href = "result_destinations/result_mongolia.html"; // Redirect to result page or display results
      }
      // 결과: 칠레
      else if (result_Chile) {
        window.location.href = "result_destinations/result_santiago.html"; // Redirect to result page or display results
      }
      // 결과: 홍콩
      else if (result_HongKong) {
        window.location.href = "result_destinations/result_hongkong.html"; // Redirect to result page or display results
      }
      // 결과: 일본
      else if (result_Japan) {
        window.location.href = "result_destinations/result_tokyo.html"; // Redirect to result page or display results
      }
      // 결과: 캐나다 토론토
      else if (result_Toronto) {
        window.location.href = "result_destinations/result_toronto.html"; // Redirect to result page or display results
      }
      // 결과: 호주
      else if (result_Australia) {
        window.location.href = "result_destinations/result.sydney.html"; // Redirect to result page or display results
      }
      // 결과: 중국 하얼빈
      else {
        window.location.href = "result_destinations/result_harbin.html"; // Redirect to result page or display results
      }
    } else {
      alert("모든 질문에 답변해주세요.");
      window.location.href = "traveltest.html";
    }

    // Redirect to result page or display results
  }

  nextButton.addEventListener("click", showNextQuestion);
  -previousButton.addEventListener("click", showPreviousQuestion);

  showQuestion(currentQuestionIndex);
});
