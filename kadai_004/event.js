
  $(window).on({
    'load': ()=>{
      //HTML要素を読み込む
      $(function(){});
      //コンソールに「loadイベントが発生しました」
      console.log('loadイベントが発生しました');
    },

    'scroll':()=>{
      //コンソールに「scrollイベントが発生しました」
      console.log('scrollイベントが発生しました');
    },
  });
