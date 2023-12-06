# My TravelSelection

# 😎프로젝트 소개

여행은 가고싶은데.. 어딜 가야 할 지 모르겠다면!!🤔 <br>이보다 좋은 여행지 추천 테스트는 없을걸요? 여행지 추천받고 여행지 정보, 준비물까지 싹 다 한번에 알 수 있다니 ! <br><br>
**TravelSelection**은 간단한 성향 테스트를 통해 본인에게 어울리는 여행지를 추천해주고, 해당 여행지에 대한 간단한 정보를 얻을 수 있습니다. 
<br><br>
테스트 문항은 총 5개이며, 결과에 따라<br><br> '칸쿤🇲🇽','뉴욕🇺🇸',도쿄🇯🇵','몽골🇲🇳','홍콩🇭🇰','하얼빈🇨🇳','시드니🇦🇺','토론토🇨🇦','산티아고🇨🇱','아이슬란드🇮🇸'<br><br> 중 하나를 추천해주게 됩니다.<br>

가슴을 떨리게 해줄 여행지로 당장 떠나보아요! 

## ⏲️ 개발 기간  
- 2023.11.07 ~ 2023.12.6
- 아이디어 노트 작성
- 테스트 문항 선정 및 레이아웃 작성
- css 및 javascript를 통해 화면 꾸미기


## 👀 프로젝트 미리보기 
[![Youtube]: (http://img.youtube.com/vi/'m97cOvtwgkk&feature'/0.jpg)](https://youtu.be/m97cOvtwgkk?si=pJT8zeEdXLFTPJEf).<br>
👆 해당 링크를 클릭하면 < 'TravelSelection' >이 어떤 화면으로 구성되는지 미리 볼 수 있습니다. (이상한 링크 아니니 걱정마세요😉)


## 🛠프로젝트 사용법 
1. 직접 다운로드 받아서 사용하기 : 코드를 눌러서 Download zip을 누른 뒤 다운받아서 사용하시면 됩니다.
2. 터미널에서 다운로드 받기 :
   - 터미널에서 내가 코드를 다운로드 받을 위치로 이동한다 `$ cd ~/Desktop`
   - 다음과 같이 입력해준다.`git clone https://github.com/BeckyBaek/TravelSelection.git`
   - 폴더가 생성된 후 폴더 안으로 들어가서 client 폴더 안으로 들어가서 명령어를 입력하면 그 안에 포함되어 있는 모듈들이 전부 설치된다.`$ npm install`

  **시작화면**<br>
  html 파일에서 **index.html** 파일을 실행하시면 '홈'화면이 나타납니다! <br><br>

  그럼, 나만의 여행지로 출발할 준비 끝! ✈️

## 🤖프로젝트 기능 
순서<br><br>홈 -> 성향 테스트 시작 -> 5가지 문항 -> 결과 -> a.관련 여행지 정보 b.테스트 다시하기 -> a.여행지 관련 정보 (실시간 환율/ 날씨, 기후/옷 , 추천 명소, 추천 음식, 그 외 꿀팁) -> 체크 메뉴 -> 여행 가기 전 체크사항{필수체크리스트(비자/상비약/출력물), 수하물 확인} 이 외에도 다른 여행지 확인 가능 

주요 기능을 설명해드릴게요! 알고보면 더 재밌는 성향 테스트랍니다🤩
1. **홈** : index.html파일로 접근할 수 있습니다. '성향 테스트'클릭해보세요.
3. **성향 테스트 시작**: 보랏빛 하늘에서 비행기를 타고 가슴떨리는 여행지로 안내해줍니다.
4. **5가지 문항**: 5가지 문항을 통해 10가지 여행지 중 하나를 추천받을 수 있어요.
\#사용자의 각 응답은 if 문을 통해 평가되며, 이를 바탕으로 사용자의 선호도에 가장 잘 맞는 여행지를 추천\#
- 사용자 입력: 사용자는 각각의 문항에 대한 두 개의 선택지 중 하나를 선택합니다. 이 응답들은 프로그램에서 첫번째 선택지는 true (예), 두번째 선택지는 false (아니오)로 처리됩니다.
- 조건부 로직: JavaScript에서 if 문을 사용하여 각각의 응답을 검사합니다. 예를 들어, 특정 문항 중 첫번째 선택지를 선택했다면 라고 해당 조건문은 true로 평가되고, 그에 따른 특정 코드 블록이 실행됩니다.
- 결정 메커니즘: 각 if 문은 사용자의 응답에 따라 다른 경로를 선택합니다. 예를 들어, 첫 번째 질문에 대한 'True' 응답은 여행지 A에 더 가까워지는 반면, 'Flase' 응답은 여행지 B에 더 가깝게 만듭니다.
- 최종 추천: 모든 문항에 대한 응답이 처리된 후, 프로그램은 가장 적합한 여행지를 결정합니다. 이는 사용자의 응답을 기반으로 한 논리적 결정입니다.
- 결과 출력: 최종적으로, 프로그램은 사용자에게 추천 여행지를 제시합니다. 이는 그들의 선호도와 일치하는 최적의 선택입니다
5. **결과** : 추천하는 여행지를 간단하게 유튜브 영상으로 확인할 수 있으며, 당신을 형용하는 말과 함께 간단한 설명이 제시됩니다.
6. **여행지 관련 정보**
  - 해당 여행지 페이지에는 다양한 정보가 포함되어 있습니다. 실시간 환율/ 날씨는 링크를 통해 새로운 Tab으로 열리기하게, 사용자의 불편함을 최소화하였습니다.
  - 추천 명소는 명소에 대한 간단한 설명과 멋있는 사진을 여러장 첨부하여 잠깐동안이라도 여행지의 설렘을 느낄 수 있습니다.
  - 추천 음식은 마우스를 hover하면 사진이 커지면서 음식 이름과 설명이 보이게 설정하여, 음식에 대한 기대감을 증폭시켰습니다.🤤
  - 왼쪽 네비바와 오른쪽 네비바는 fixed로 설정하여, 사용자가 페이지 내의 내용을 스크롤하며 볼 때에도 언제든지 원하는 정보로 이동할 수 있도록 anchor를 활용하였습니다.
7. **체크 메뉴**
    -여행지 관련 정보의 오른쪽 네비 바의 '체크 사항 및 메뉴'를 클릭하면 나타나는 페이지로, 여행 가기 전 체크사항에 대해 볼 수 있습니다.
    - 포함된 내용은 많은 사람들이 자주 헷갈려하는 (~~사실은 제가 여행갈때마다 헷갈리는~~)정보를 위주로 작성하였습니다.
    - 비자가 필요한 여행지는 링크를 통해 해당 홈페이지로 이동할 수 있으며, 상비약과 출력물은 checkbox를 통해 본인이 잘 챙겼는지 다시 한번 검토할 수 있는 기능을 추가했습니다.
    - 특히,수하물 section에서는 기내 수하물일까? 위탁 수하물일까? 부분에서 헷갈리는 물품들을 보여주고, 마우스를 hover하면 기내인지 위탁인지 보여주는 방식으로 작성했습니다.
    - 마지막으로, 오른쪽에 있는 네비바에서 홈,다른 여행지, 테스트 하러가기로 이동할 수 있습니다. 

## 💻 개발환경 
<img alt="HTML" src
 ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
 <img alt="CSS" src
 ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
 <img alt="Javascript" src
 ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>

## 🔍저작권 및 사용권 정보
