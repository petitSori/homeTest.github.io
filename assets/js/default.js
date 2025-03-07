// 드롭다운메뉴 스크립트
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
      const clickedHeader = e.target.closest(".dropdown-list-header");
      document.querySelectorAll(".dropdown-con").forEach(dropdown => {
        if (clickedHeader && dropdown.contains(clickedHeader)) {
          dropdown.classList.toggle("active");
        } else if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
        dropdown.querySelectorAll(".dropdown-list-layer li").forEach(item => {
          if (item.contains(e.target)) {
            dropdown.querySelector(".active")?.classList.remove("active");
            item.classList.add("active");
            dropdown.querySelector(".dropdown-list-header div").textContent = item.textContent.trim();
            dropdown.classList.remove("active");
          }
        });
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const mainGnbItems = document.querySelectorAll(".main-gnb-item");
  
    mainGnbItems.forEach((item) => {
      item.addEventListener("click", function () {
        const parentLi = this.parentElement;
        const mainGnb = document.querySelector(".main-gnb");
        
        // 모든 li에서 active 클래스 제거
        mainGnb.querySelectorAll("li").forEach((li) => {
          if (li !== parentLi) {
            li.classList.remove("active");
          }
        });
  
        // 클릭한 li만 active 토글
        parentLi.classList.toggle("active");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const moLnb = document.querySelector(".nav-wrap");
    const rootWrap = document.querySelector(".root-wrap");

    const toggleRootClass = () => {
        rootWrap.classList.toggle("hp-100vh", moLnb.classList.contains("open"));
    };
    document.querySelector(".mo-manu").addEventListener("click", () => {
        moLnb.classList.add("open");
        toggleRootClass();
    });
    document.querySelector(".mo-nav-header .close").addEventListener("click", () => {
        moLnb.classList.remove("open");
        toggleRootClass();
    });
  });

  // 토스트 
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".bottom-btn button");
    const toastLayer = document.querySelector(".bottom-btn .toast-layer");
  
    if (button && toastLayer) {
      button.addEventListener("click", function () {
        toastLayer.classList.add("active");
        
        // 일정 시간 후 active 클래스 제거 (예: 3초 후)
        setTimeout(() => {
          toastLayer.classList.remove("active");
        }, 1800);
      });
    }
  });