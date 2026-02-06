//top 버튼
var winH2 = $(window).height()||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
//모바일 툴바 높이 제어
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});

//loading
/**
 * customAlert
 * @param _option._selector : 셀렉터 ex) addLoading(".ex-loading");
 * @return
 *
 */
function addLoading(_selector,_position){   
    var loadingTag = "<div class='loading-wrap'><div class='spinner'><img src='../../../assets/images/common/etc/loading.png' alt=''></div></div>";
    if ($('.loading-wrap').length > 0) {
        $('.loading-wrap').remove();
    }
    if(typeof _selector == "undefined"){
        $("body").append(loadingTag);
    }else{
        if (typeof _position == "undefined") {
            $(_selector).append(loadingTag);
            $('.loading-wrap').addClass("relative");
        }else{
            $(_selector).prepend(loadingTag);
            $('.loading-wrap').addClass("absolute");
        }
    }
}
function removeLoading(){
    if ($('.loading-wrap').length > 0) {
        $('.loading-wrap').stop().fadeOut(100,function(){$('.loading-wrap').remove();});
    }
}
