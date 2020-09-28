jQuery(function() {
  let top = $('#to-top');
  top.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500) //0.5秒かけてトップへ戻る
    return false;
  });

  const toPost = $('#to-post');
  toPost.click(() => {
    $('body, html').animate({scrollTop: $('#post-it').offset().top}, 500)
  })

  let toAbout = $('#to-about');
  toAbout.click(function () {
    $('body, html').animate({ scrollTop: $('#about').offset().top }, 500) //0.5秒かけてトップへ戻る
    return false;
  });
  
  const toPrice = $('#to-price');
  toPrice.click(() => {
    $('body, html').animate({scrollTop: $('#price').offset().top}, 500)
  });

  const toStory = $('#to-story');
  toStory.click(() => {
    $('body, html').animate({scrollTop: $('#story').offset().top}, 500)
  });

  const toReview = $('#to-review');
  toReview.click(() => {
    $('body, html').animate({scrollTop: $('#review').offset().top}, 500)
  })

  const toTeam = $('#to-team');
  toTeam.click(() => {
    $('body, html').animate({scrollTop: $('#team').offset().top}, 500)
  });

  let pagetop = $('#totop');
  pagetop.click(() => {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });


  let b_1 = true;
  let b_2 = true;
  let b_3 = true;
  let b_4 = true;

  const button1 = $('#button1');
  button1.on('click', () => {
    if(button2.hasClass('isActive')){
      button2.toggleClass('isActive');
    }
    b_1 = true;
    button1.toggleClass('isActive');
  });

  const button2 = $('#button2');
  button2.on('click', () => {
    if(button1.hasClass('isActive')){
      button1.toggleClass('isActive');
    }
    b_1 = false;
    button2.toggleClass('isActive');
  });

  const button3 = $('#button3');
  button3.on('click', () => {
    if(button4.hasClass('isActive')){
      button4.toggleClass('isActive');
    }
    b_2 = true;
    button3.toggleClass('isActive');
  });

  const button4 = $('#button4');
  button4.on('click', () => {
    if(button3.hasClass('isActive')){
      button3.toggleClass('isActive');
    }
    b_2 = false;
    button4.toggleClass('isActive');
  });

  const button5 = $('#button5');
  button5.on('click', () => {
    if(button6.hasClass('isActive')){
      button6.toggleClass('isActive');
    }
    b_3 = true;
    button5.toggleClass('isActive');
  });

  const button6 = $('#button6');
  button6.on('click', () => {
    if(button5.hasClass('isActive')){
      button5.toggleClass('isActive');
    }
    b_3 = false;
    button6.toggleClass('isActive');
  });

  const button7 = $('#button7');
  button7.on('click', () => {
    if(button8.hasClass('isActive')){
      button8.toggleClass('isActive');
    }
    b_4 = true;
    button7.toggleClass('isActive');
  });

  const button8 = $('#button8');
  button8.on('click', () => {
    if(button7.hasClass('isActive')){
      button7.toggleClass('isActive');
    }
    b_4 = false;
    button8.toggleClass('isActive');
  });

  $('#search').on('click', () => {
    if(b_1){
      if(b_2) {
        if(b_3){
          if(b_4){
            $('#model').text("SP-E-M-S-W");
            $('.res-ele1 h4').text('Standard');
            $('.res-ele1 h5').text('¥1,458');
            $('.addition').text('');
            $('#sensor').text('センサー: 磁気センサー');
            $('#shooting').text('定期的なポスト内撮影: なし');
          }else{
            $('#model').text("SP-EM-M-S-W");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥3,850');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 磁気センサー');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        } else {
          if(b_4) {
            $('#model').text("SP-E-M-S-WM");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥2,243');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 磁気センサー');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-M-S-WM");
            $('.res-ele1 h4').text('Pro');
            $('.res-ele1 h5').text('¥4,495');
            $('.addition').append('<li>定期的にポストの中を撮影」と「携帯回線」のどちらかも選べます</li>');
            $('#sensor').text('センサー: 磁気センサー');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        }
      }else{
        if(b_3) {
          if(b_4) {
            $('#model').text("SP-E-M-B-W");
            $('.res-ele1 h4').text('Standard');
            $('.res-ele1 h5').text('¥3,661');
            $('.addition').text('');
            $('#battery').text('バッテリーサイズ: Big');
            $('#sensor').text('センサー: 磁気センサー');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-M-B-W");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥5,878');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#battery').text('バッテリーサイズ: Big');
            $('#sensor').text('センサー: 磁気センサー');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        } else {
          if(b_4) {
            $('#model').text("SP-E-M-B-WM");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥4,480');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 磁気センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-M-B-WM");
            $('.res-ele1 h4').text('Pro');
            $('.res-ele1 h5').text('¥6,587');
            $('.addition').append('<li>定期的にポストの中を撮影」と「携帯回線」のどちらも選べます</li>');
            $('#sensor').text('センサー: 磁気センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        }
      }
    } else {
      if(b_2){
        if(b_3){
          if(b_4){
            $('#model').text("SP-E-I-S-W");
            $('.res-ele1 h4').text('Standard');
            $('.res-ele1 h5').text('¥1,470');
            $('.addition').text('');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Small');
            $('#connection').text('接続: Wi-Fiのみ');
            $('#shooting').text('定期的なポスト内撮影: あり');
          } else {
            $('#model').text("SP-E-I-S-WM");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥3,652');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Small');
            $('#connection').text('接続: Wi-Fiのみ');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        } else {
          if(b_4) {
            $('#model').text("SP-E-I-S-WM");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥2,258');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Small');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-I-S-WM");
            $('.res-ele1 h4').text('Pro');
            $('.res-ele1 h5').text('¥4,475');
            $('.addition').append('<li>定期的にポストの中を撮影」と「携帯回線」のどちらも選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Small');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        }
      } else {
        if(b_3) {
          if(b_4) {
            $('#model').text("SP-E-I-B-W");
            $('.res-ele1 h4').text('Standard');
            $('.res-ele1 h5').text('¥3,672');
            $('.addition').text('');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fiのみ');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-I-B-W");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥5,889');
            $('.addition').append('<li>定期的にポストの中を撮影」と「携帯回線」のどちらも選べます</li>');$('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fiのみ');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        } else {
          if(b_4) {
            $('#model').text("SP-E-I-B-WM");
            $('.res-ele1 h4').text('Plus');
            $('.res-ele1 h5').text('¥4,435');
            $('.addition').append('<li>定期的にポストの中を撮影」か「携帯回線」のどちらかを選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: なし');
          } else {
            $('#model').text("SP-EM-I-B-WM");
            $('.res-ele1 h4').text('Pro');
            $('.res-ele1 h5').text('¥6,602');
            $('.addition').append('<li>定期的にポストの中を撮影」と「携帯回線」のどちらも選べます</li>');
            $('#sensor').text('センサー: 赤外線センサー');
            $('#battery').text('バッテリーサイズ: Big');
            $('#connection').text('接続: Wi-Fi + モバイル回線');
            $('#shooting').text('定期的なポスト内撮影: あり');
          }
        }
      }
    }
  });

  


});