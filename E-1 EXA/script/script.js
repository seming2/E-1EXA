$(function(){/*문서로딩후 실행하시오*/
    var i = 0;
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0
        }
        $(".slide ul").animate({left:-100 * i + "%"},1000)
    }
    setInterval(slide, 2000)











    /*메뉴*/

    //열고 닫히는 부드러움이 없는 show, hide
    // $("nav>ul>li").mouseenter(function(){
    //     $(this).children(".sub").show();
    // })
    // $("nav>ul>li").mouseleave(function(){
    //     $(".sub").hide();
    // })

    //열고 닫히는 부드러움이 있는 slideDown, slideUp
    $("nav>ul>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })




    /*팝업*/
    $(".pop").click(function(){
        $(".popBg").show();
        return false;
    })

    
    $(".close").click(function(){
        $(".popBg").hide();
    })








})