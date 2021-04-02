import $ from "jquery";
//@ts-ignore
global.$ = $;
//@ts-ignore
global.jQuery = $;

$(function () {
  // アコーディオン フローチャート =====
  //スクロールで表示させるエリア
  var $scrollTarget = $('.js-accordion__content');
  //開閉メニューのボタン
  var $scroll = $('.js-accordion__title');
  //topからの位置を取得
  var $scrollInt = $scroll.offset()?.top;

  // コンテンツ非表示
  // $scrollTarget.css('display', 'none');
  // タイトルクリック
  $scroll.on('click', function () {
    // クリックされてないcontentの挙動　open取得
    $scroll.not(this).removeClass('js-open');
    // クリックされてないcontentの挙動　閉じる
    $scroll.not(this).next().slideUp(500);
    //openクラスを付与
    $(this).toggleClass('js-open');
    //子要素に js-open があった場合、親要素 .accordion に js-position クラスを追加
    $('.accordion .js-open').parents('.accordion').addClass('js-position');
    // content開閉
    $(this).next().slideToggle(500, function () {
      //表示状態であれば、topからの位置分スクロールトップに移動
      if ($scrollTarget.is(":visible")) {
        $("body,html").animate({ scrollTop: $scrollInt }, "fast");
      }
    });
  });
});