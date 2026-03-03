  // 画像パタパタ・アニメーション
    const images = ["images/Loading_anime/load1.png", "images/Loading_anime/load2.png"];
    let currentIdx = 0;
    const switchInterval = 180; // ms（速さ調整できるよ）
    const spinner = document.getElementById("spinner-img");

    // 交互画像切替
    const imgTimer = setInterval(()=>{
      currentIdx = 1 - currentIdx;
      spinner.src = images[currentIdx];
    }, switchInterval);

    // Loading... テキストを1文字ずつ生成
    const text = "Loading...";
    const loadingText = document.getElementById('loading-text');
    loadingText.innerHTML = "";
    for (let i=0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      loadingText.appendChild(span);
    }

    // ロード制御（最低1秒＆本体表示切り替え）
    const minLoadTime = 1000;
    const startTime = Date.now();
    window.addEventListener('load', () => {
      const loadTime = Date.now() - startTime;
      const delay = Math.max(0, minLoadTime - loadTime);
      setTimeout(() => {
        document.getElementById('loading').classList.add('loaded');
        document.getElementById('content').classList.add('show');
        clearInterval(imgTimer);
      }, delay);
    });