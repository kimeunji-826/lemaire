document.addEventListener(`DOMContentLoaded`, function () {
  // AOS
  window.addEventListener(`load`, function () {
    AOS.init();
    AOS.refresh();
  });

  // 마우스휠 헤더 이벤트
  // .header_area 가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정
  // scrollEvent 이라는 클래스 추가제거로 조절
  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      // wheel down
      headerArea.classList.remove(`scrollEvent`);
    } else {
      // wheel up
      headerArea.classList.add(`scrollEvent`);
    }
  });

  // body 에 배경색 조정
  // 스크롤 이벤트 offsetTop 값 활용
  const sec2 = document.querySelector(`.sec_2`);
  const sec3 = document.querySelector(`.sec_3`);

  window.addEventListener(`scroll`, function () {
    const sec2OffsetTop = sec2.offsetTop - 500;
    const sec3OffsetTop = sec3.offsetTop;

    const scrollTopData = window.scrollY;
    console.log(scrollTopData);

    const bodyBg = document.querySelector(`body`);

    // 스크롤상단값이 sec2의 상단위치값보다 크고 스크롤상단값이 sec3의 상단위치값보다 작다면 body 에 클래스 추가
    if (scrollTopData > sec2OffsetTop && scrollTopData < sec3OffsetTop) {
      bodyBg.classList.add(`bg`);
    } else {
      bodyBg.classList.remove(`bg`);
    }
  });

  // swiper(sec_3)
  // 세로로 굴러가는 스와이퍼

  var swiper = new Swiper(".ceoSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false, // 다른 인터렉션이 있을때 자동재생을 멈추는것을 방지
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // sub_menu(tab)
  //마우스 올리면 카테고리에 맞는 탭 활성화
  const submenuTab = document.querySelectorAll(`.main_menu li`);
  const submenuBox = document.querySelector(`.sub_menu_box`);
  const subMenus = document.querySelectorAll(`.sub_menu`);

  //   for (const li of submenuTab) {
  //     li.addEventListener(`mouseenter`, function () {
  //       submenuBox.classList.add(`active`);

  //       //탭메뉴 연결
  //       const liData = this.getAttribute(`data-tab`);
  //       const submenu = document.querySelectorAll(`.sub_menu`);

  //       // 전체적으로 서브메누 추가되어있으면 먼저 제거
  //       for (const tabContent of submenu) {
  //         tabContent.classList.remove(`active`);
  //       }

  //       // data-tab 에 작성된 데이터명과 동일한 아이디명을 사진 서브메뉴는 출력
  //       const changeTab = document.querySelector(`#${liData}`);

  //       changeTab.classList.add(`active`);
  //     });
  //   }

  //forEach, dataset 으로 변경해서 작성해보기
  submenuTab.forEach((li) => {
    li.addEventListener(`mouseenter`, () => {
      submenuBox.classList.add(`active`);

      // 모든 서브메뉴에서 active 제거
      // 여기서 화살표함수 한줄로 적을때 중괄호 안써도 오류없음
      subMenus.forEach((tab) => tab.classList.remove(`active`));

      // 해당 탭만 active 추가
      const target = li.dataset.tab;
      const changeTab = document.getElementById(target);
      changeTab.classList.add(`active`);
    });
  });

  // 서브메뉴박스에서 마우스 나가면 서브메뉴박스가 없어지게 설정
  submenuBox.addEventListener(`mouseleave`, function () {
    this.classList.remove(`active`);
  });

  // 상단이동버튼
  // 기존에는 투명하게 안보이다가 300px 이상일때 top_btn 보여지게끔
  // (css에서 클래스명 설정해주고 진행)
  const topBtn = document.querySelector(`.top_btn`);

  // 스크롤 이벤트 리스너 추가
  window.addEventListener(`scroll`, function () {
    const scrollTop = window.scrollY;

    // 현재 스크롤 위치가 300px 이상일 경우
    if (scrollTop > 300) {
      topBtn.classList.add(`on`);
    } else {
      topBtn.classList.remove(`on`);
    }
  });

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  });
  // indow.scrollTo 는 브라우저에서 제공하는 자바크립트 내장 매서드 : 페이지를 특정 위로 스크롤할때 사용
  // behavior: `smooth` 는 부드럽게 스크롤되도록 하는 옵션(기본값 auto) -> 직접 시간을 조정할 순 없다

  // 작은 그리드에서 햄버거버튼 누르면 메인메뉴 출력
});
