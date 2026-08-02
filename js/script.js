// ハンバーガーメニュー(jq)
$(function () {
// ハンバーガーメニューのボタンクリック時
  $('#js-hamburger-menu').click(function () {
    $('.hamburger-menu').toggleClass('hamburger-menu-open'); // クラスを切り替え
    $('body').toggleClass('no-scroll'); // スクロールを無効／有効に
    $('#g-nav').slideToggle(); // メニューを開閉
  });

  // メニュー内のリンクをクリックした時
  $('.list-nav-header li a').on('click', function () {
    if (window.innerWidth <= 599) {
      $('.hamburger-menu').removeClass('hamburger-menu-open');
      $('body').removeClass('no-scroll');
      $('#g-nav').slideUp();
    }
  });
});

$(function () {
  const images = [
    './images/mv/Drink.jpd',
    './images/mv/Dart.jpg',
    './images/mv/Darts.jpg'
  ];

  let index = 0;
  const img = $('#slideshow');

  function changeImage() {
    // 4秒表示
    setTimeout(() => {

      // 1秒でフェードアウト
      img.fadeOut(1000, function () {

        // 画像変更
        index = (index + 1) % images.length;
        img.attr('src', images[index]);

        // 1秒でフェードイン
        img.fadeIn(1000, function () {

          // 次の切り替え
          changeImage();
        });

      });

    }, 4000);
  }

  changeImage();
});


// お品書き(jq)
$(function () {
  const $filters = $('.filter [data-filter]');
  const $boxes = $('.menu-boxes [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault(); // ページ遷移を防ぐ

    // フィルターの見た目を更新
    $filters.removeClass('active');
    $(this).addClass('active');

    const selectedCategory = $(this).data('filter');

    // 一度全てのメニューを非表示に
    $boxes.fadeOut().promise().done(function () {
      if (selectedCategory === 'menu-boxes') {
        // 「すべて」のときは全項目を表示
        $boxes.fadeIn();
      } else {
        // 該当カテゴリのみ表示
        $boxes
          .filter(`[data-category="${selectedCategory}"]`)
          .fadeIn();
      }
    });
  });
});


// リターントップボタン(js)
window.addEventListener('scroll', function() {
  const show = document.querySelector('.back-btn');
  if(!show) return;

   show.classList.toggle('show', window.scrollY >= 300);
}); 