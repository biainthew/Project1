//버튼 모양 바뀜
btnOpen = $('.btn')
btnOpen.click(function(){
    $(this).toggleClass('btn-x');
})

//상단 header nav 열림
btnOpen.click(function(){
    btnOpen.prev('#menuTab').find('.main-menu>li>ul').toggleClass('block');
})
btnOpen.click(function(){
    btnOpen.prev('#menuTab').find('.menuTabBg').toggleClass('bgheight')
    btnOpen.prev('#menuTab').find('.menuTabBg>.menuTabLeft').toggleClass('leftheight')
    btnOpen.prev('#menuTab').find('.menuTabBg>.menuTabLeft>ul').toggleClass('block')
})

//메인 슬라이드
mainUl = $('.mainSlidebox>ul')
mainLi = $('.mainSlidebox>ul>li')
mbtnPrev = $('.cobox1')
mbtnPause = $('.cobox2')
mbtnNext = $('.cobox3')
mSpan = $('.cobox4')
let setIntervalId

//auto slide
rolling();
function rolling(){
    setIntervalId=setInterval(function(){
        let ini = mainLi.index();
        let inin = -(ini-mainLi.length);
        mSpan.text(inin + '/' +mainLi.length);
        mainUl.stop().animate({left:-895},function(){
            $(this).find('li:first').insertAfter($(this).find('li:last'));
            mainUl.css({left:0})
        })
    },1500);
}

//hover
mbtnNext.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rolling();
});
mbtnPrev.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rolling();
});
// mbtnPause.hover(function(){
//     clearInterval(setIntervalId);
// },function(){
//     rolling();
// });

//click
mbtnNext.click(function(){
    mainUl.stop().animate({left:-895},800,function(){
        let ini = mainLi.index();
        let inin = -(ini-mainLi.length);
        mSpan.text(inin + '/' +mainLi.length);
        $(this).children('li:first').insertAfter($(this).children('li:last'));
        mainUl.css({left:0})
    })
});

mbtnPrev.click(function(){
    let ini = mainLi.index();
    let inin = -(ini-mainLi.length);
    mSpan.text(inin + '/' +mainLi.length);
    $('.mainSlidebox>ul>li:last').insertBefore('.mainSlidebox>ul>li:first');
    mainUl.css({left:-895}).stop().animate({left:0},800)
})
let mbtnP = true;
mbtnPause.click(function(){
    if(mbtnP==true){
        clearInterval(setIntervalId);
        mbtnP=false;
    }else{
        rolling();
        mbtnP=true;
    }
})

// pagination
let totalSlide=$('.over>a').length;
let ini = $('.over>a').index();


//서브 슬라이드

subUl = $('.mainSlidebox2>.over')
subLi = $('.mainSlidebox2>.over>a')
sbtnPrev = $('.cobox11')
sbtnPause = $('.cobox22')
sbtnNext = $('.cobox33')
sSpan = $('.cobox44')
let setIntervalId1
setInterval(function(){$(this).animate(function(){},500)})
rolling1()
function rolling1(){
    setIntervalId1=setInterval(function(){
        let ini = subLi.index();
        let inin = -(ini-subLi.length);
        sSpan.text(inin + '/' +subLi.length)
        subUl.animate({left:-456},function(){
            $(this).children('a:first').insertAfter($(this).children('a:last'));
            subUl.css({left:0});
        })
    },2000)
}
sbtnPrev.hover(function(){
    clearInterval(setIntervalId1);
},function(){
    rolling1();
});
sbtnNext.hover(function(){
    clearInterval(setIntervalId1);
},function(){
    rolling1();
});
// sbtnPause.hover(function(){
//     clearInterval(setIntervalId1);
// },function(){
//     rolling1();
// });
sbtnNext.click(function(){
    subUl.animate({left:-456},function(){
        let ini = subLi.index();
        let inin = -(ini-subLi.length);
        sSpan.text(inin + '/' +subLi.length)
        $(this).children('a:first').insertAfter($(this).children('a:last'));
        subUl.css({left:0});
    });
});
sbtnPrev.click(function(){
    let ini = subLi.index();
    let inin = -(ini-subLi.length);
    sSpan.text(inin + '/' +subLi.length)
    $('.over>a:last').insertBefore($('.over>a:first'));
    subUl.css({left:-456}).stop().animate({left:0},800)
})
let btnp = true;
sbtnPause.click(function(){
    if(btnp==true){
        clearInterval(setIntervalId1);
        btnp=false;
    }else{
        rolling1();
        btnp=true;
    }
})

//하단 배너모음
leftBtn = $('.btn-left');
rightBtn = $('.btn-right');
stopBtn = $('.btn-stop');
list = $('.banner-ul');
li = $('.banner-ul>li')

function rolling2(){
    list.stop().animate({left:-100},500,function(){
        list.children('li:first').insertAfter(list.children('li:last'));
        list.css({left:0})
    })
};
setInterval(rolling2,2500);
rightBtn.stop().click(function(){
    list.stop().animate(li.width(),1000,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'));
        // $(this).css({left:0});
    });
});
leftBtn.click(function(){
    list.children('li:last').insertBefore(list.children('li:first'));
    list.css({left:0})
})
//하단 탭
const tabList=$('.mb3Left');

function tabMenu(){
    let $this=$(this);
    $this.addClass('active').next('ul').show().parent('li').siblings('li').find('a').removeClass('active').next('ul').hide();

}
tabList.find('>ul>li>a').click(tabMenu).focus(tabMenu)
