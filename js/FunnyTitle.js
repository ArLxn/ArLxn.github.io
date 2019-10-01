<!--浏览器搞笑标题-->
<!--https://arlxn.github.io-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '正在跳转中...';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '跳到你怀里~' + ' | ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 1500);
     }
 });