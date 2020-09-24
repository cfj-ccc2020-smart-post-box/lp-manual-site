jQuery(function() {
  let top = $('#to-top');
  top.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  let toAbout = $('#to-about');
  
  toAbout.click(function () {
    $('body, html').animate({ scrollTop: $('#about').offset().top }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  let feature = $('#to-feature');
  feature.click(function () {
    $('body, html').animate({ scrollTop: $('#feature').offset().top }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  const toSpec = $('#to-spec');
  toSpec.click(() => {
    $('body, html').animate({scrollTop: $('#spec').offset().top}, 500)
  });
  const toStory = $('#to-story');
  toStory.click(() => {
    $('body, html').animate({scrollTop: $('#story').offset().top}, 500)
  });
  const toTeam = $('#to-team');
  toTeam.click(() => {
    $('body, html').animate({scrollTop: $('#team').offset().top}, 500)
  });
  let pagetop = $('#page_top');
  pagetop.click(() => {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});