
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
$(function(){
    var windW;
    /*os판단*/
    var isWin = navigator.platform.toUpperCase().indexOf('WIN') >= 0;
    //페이지 ready시 기본 적으로 호출
    addLoading();
    $(window).load(function(){
        removeLoading(); //로딩삭제
    });
});