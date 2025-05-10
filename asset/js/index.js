document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".BurgerMenu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");

    // ハンバーガーメニューの開閉
    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // ナビゲーションリンクをクリックしたときの処理
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // デフォルトのリンク動作を無効化
            const targetId = link.getAttribute("href").substring(1); // リンク先のIDを取得
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // スムーズスクロール
                window.scrollTo({
                    top: targetElement.offsetTop, // 対象セクションの位置
                    behavior: "smooth" // スムーズスクロールを有効化
                });
            }

            // バーガーメニューを閉じる
            menuBtn.classList.remove("active");
            nav.classList.remove("active");
        });
    });
});
// スライダー切り替え
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // 5秒ごとにスライドを切り替え
    setInterval(nextSlide, 4000);

    // 初期スライドを表示
    showSlide(currentIndex);
});