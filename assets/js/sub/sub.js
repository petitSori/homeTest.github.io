
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
$(function(){
    introdue();
    etcPos();
    topBtn();

    // 서브 탑
    function topBtn() {
        $(".btn-top").on("click", function(){
            $("html, body").stop().animate({ scrollTop: 0 }, 800);
        });
    }

    // 상품소개페이지 스크립트
    function introdue() {
        var sectionName1 = $('.intro-wrap');
        var slideName = $('.cont-slide');

        if(sectionName1.length >= 1){
            var introSwiper = new Swiper(".intro-wrap .intro-slide", {
                initialSlide: 0,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                },
                speed: 1500,
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: ".intro-slide .swiper-pagination",
                    clickable: true,
                },
            });
        }
        if(slideName.length >= 1){
            slideName.each(function(){
                if($(this).hasClass('type1')){
                    var _next = $(this).next().find('.swiper-button-next');
                    var _prev = $(this).next().find('.swiper-button-prev');
                    var _page = $(this).next().next('.swiper-pagination');
                    var hasDotClass = $(this).hasClass('dot');

                    var swiperOptions = {
                        initialSlide: 0,
                        autoplay: {
                            delay: 10000,
                            pauseOnMouseEnter: false,
                            disableOnInteraction: false,
                        },
                        speed: 1500,
                        centeredSlides: true,
                        loop: true,
                        observer: true,
                        observeParents: true,
                        slidesPerView: 'auto',
                        navigation: {
                            nextEl: _next,
                            prevEl: _prev,
                        },
                    };

                    if (hasDotClass) {
                        swiperOptions.pagination = {
                            el: _page,
                            clickable: true,
                        };
                    }
                    var contSwiper1 = new Swiper(".cont-slide.type1", swiperOptions);
                    
                    if ($(this).hasClass('slideto')) {
                        contSwiper1.on('slideChange', function () {
                            var _idx = contSwiper1.realIndex;
                            $('.bubble-slide.slideto').find('.bubble-item').eq(_idx).addClass('active').siblings().removeClass('active');
                        });
                    }
                    $(window).on('resize', function () {
                        if (contSwiper1) {
                            contSwiper1.update();
                        }
                    }).resize();
                }
                if($(this).hasClass('type2')){
                    var contSwiper2 = new Swiper(".cont-slide.type2", {
                        initialSlide: 0,
                        autoplay: {
                            delay: 10000,
                            pauseOnMouseEnter: false,
                            disableOnInteraction: false,
                        },
                        speed: 1500,
                        centeredSlides: true,
                        loop: true,
                        observer: true,
                        observeParents: true,
                        slidesPerView: 'auto',
                        pagination: {
                            el: ".cont-slide.type2 .swiper-pagination",
                            clickable: true,
                        },
                        breakpoints: {
                            1024: {
                                spaceBetween: 15,
                            },
                        },
                    });  
                }

                if($(this).hasClass('wide')){
                    var _next = $(this).find('.swiper-button-next');
                    var _prev = $(this).find('.swiper-button-prev');
                    var _paging = $(this).find('.page-num');
                    var contSwiper3 = new Swiper(".cont-slide.wide", {
                        initialSlide: 0,
                        autoplay: {
                            delay: 10000,
                            pauseOnMouseEnter: false,
                            disableOnInteraction: false,
                        },
                        effect: "fade",
                        speed: 1500,
                        loop: true,
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        pagination: {
                            el: _paging,
                            type: "fraction",
                        },
                        navigation: {
                            nextEl: _next,
                            prevEl: _prev,
                        },
                    });  
                }
            });
        }
        $('.poster-list').each(function(){
            var posterSwiper = new Swiper(".poster-list", {
                initialSlide: 0,
                centeredSlides: true,
                touchRatio: 0,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                },
                speed: 800,
                loop: true,
                slidesPerView: 'auto',
                effect: "slide",
            });
        });
    }

    // 게시판 이벤트
    var listOtherSlide = undefined;
    function boradEvent() {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        $('.add-slide').each(function() {
            if (windowWidth < 1025 && listOtherSlide == undefined) {
                var $slider = $(this);
                listOtherSlide = new Swiper($slider, {
                    loop: false,
                    autoplay: false,
                    observer: true,
                    observeParents: true,
                    centeredSlides: true,
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                    pagination: {
                        el: $(this).find('.swiper-pagination'),
                        clickable: true,
                    },
                });
                }else if (windowWidth >= 1025 && listOtherSlide != undefined) {
                    listOtherSlide.destroy();
                    listOtherSlide = undefined;
                }
        });

        //공유하기 링크 복사
        $('#shareLink').each(function() {
            $(this).click(function(){
                var _copyUrl = '';
                var _textarea = document.createElement("textarea");
                document.body.appendChild(_textarea);
                _copyUrl = window.document.location.href;
                _textarea.value = _copyUrl;
                _textarea.select();
                document.execCommand("copy");
                document.body.removeChild(_textarea);
                $(this).next('#tostMessage').addClass('active');
                setTimeout(function(){
                    $('#tostMessage').removeClass('active');
                },1800);
            });
        });

    }
    boradEvent();
    //포스 대행사 이벤트
    function etcPos() {
        $('.agency-list .list-tab ul li').each(function() {
            $(this).children().click(function(){
                var _num = $(this).parent().data('num');
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('.agency-wrap .list-cont').eq(_num - 1).addClass('active').siblings().removeClass('active');
            });
        });
    }

    //로고롤링
    let logoswiper = [];
    function logoSwipers() {
        $('.logo-list').each(function(index) {
            $(this).addClass('swiper-' + index);
            logoswiper[index] = new Swiper(this, {
                autoplay: {
                    delay: 0,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                },
                loopAdditionalSlides: 1,
                spaceBetween: 12,
                speed: 3000,
                freeMode: true,
                loop: true,
                slidesPerView: 'auto',
                preventInteractionOnTransition: true,
                breakpoints: {
                    1024: {
                        spaceBetween: 6,
                    },
                },
            });
        });
    }
    $(window).on('resize', function () {
        logoswiper.forEach(swiper => swiper.destroy(true, true));
        logoSwipers();
        boradEvent();
    }).trigger('resize');
});