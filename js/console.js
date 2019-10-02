	$(window).scroll(function(){ 
    if ($(window).scrollTop() > 0){ 
         $("#header").addClass('chageheader'); 
         $('.line-graph').each(function (i) {
          i = i + 1;
          $(this).addClass('line-chart-' + i);
        })
    }else{
       $("#header").removeClass('chageheader');
    }  
});
$(function() {
console.log('%c%s', 'font-size:48px;color:#42a9f4;', 'Welcome to W3BSAFE');
console.log(" \u54a6\uff01\u8fd9\u4e48\u5de7\u4f60\u4e5f\u559c\u6b22\u7814\u7a76WEB\u6280\u672f\uff01\n\u53c8\u8fd9\u4e48\u5de7\u6211\u4eec\u6025\u9700\u50cf\u4f60\u8fd9\u6837\u7684\u4e13\u4e1aWEB\u4eba\u58eb!\n\u6765\u52a0\u5165\u6211\u4eec\u5427\uff0c\u548c\u6211\u4eec\u4e00\u8d77\u7814\u7a76WEB!");
console.log("%c \u6211\u4eec\u7684QQ\u7fa4\uff1a242727715/616378927","color:red");
console.log("%c Copyright By 2016-2017 W3bSaFe.cN, All Rights Reserved","color:blue;");
});