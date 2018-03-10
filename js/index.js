
/*************scroll***************/
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>730){
            $(".floor_con").css({position:'fixed',top:'0px'});
        }else{

                $(".floor_con").css({position:'absolute',top:'730px'});
        }
    })
})
//************************左侧栏下拉************************************

//banner左侧内容栏
$(()=>{
    $(".f_col1").parent().hover(
        function(){

            $(this).children(".dorpdown_layer").css({
                display:"block"
            });
        },
        function(){

            $(this).children(".dorpdown_layer").css({
                display:"none"
            });
        })




    var thisTime;
    //鼠标离开左侧内容栏
    $('.f_col1_cate .cate_menu .cate_menu_item').mouseleave(function(even){
        thisTime = setTimeout(thisMouseOut,100);
    });
    //鼠标进入左侧内容栏   滑动出弹层
    $('.f_col1_cate .cate_menu .cate_menu_item').mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        clearTimeout(thisTime);
        var thisMenu = $('.f_col1_cate .cate_menu .cate_menu_item').index($(this));
        if($.trim($('.cate_pop .cate_part').eq(thisMenu).html()) != ""){
            $('.cate_pop').addClass('active');
            $('.cate_part').hide();
            $('.cate_part').eq(thisMenu).show();
        }else{
            $('.cate_pop').removeClass('active');
        }
    });
    //函数——执行鼠标离开左侧内容栏的动作
    function thisMouseOut(){
        $('.cate_pop').removeClass('active');
        $('.f_col1_cate .cate_menu .cate_menu_item').removeClass('active');
    }
    $('.cate_pop').mouseenter(function(){
        clearTimeout(thisTime);
        $('.cate_pop').addClass('active');
    });
    $('.cate_pop').mouseleave(function(){
        $('.cate_pop').removeClass('active');
        $('.f_col1_cate .cate_menu .cate_menu_item').removeClass('active');
    });


//*********************slider*********************************
    const LIWIDTH=718,WAIT=3000,DURA=800;
    var moved=0,timer=null,
        $ul=$(".f_slider_list"),
        $ids=$(".f_slider_indicator"),
        $bg=$(".m_content");

     // console.log($ul.children().length)
    // console.log($ids)
    // console.log($bg)
    $ul.css("width",LIWIDTH*4);
    $ids.children().first().addClass("hover");

    function move(){
        moved++;

        /*****图片轮播动画****/
        $ul.animate({
            left:-LIWIDTH*moved,
        },DURA,()=>{
            for(var i=0;i<=moved;i++){
                if(i==0){
                    $bg.css({background:"#B8DFFC"});
                }else if(i==1){
                    $bg.css({background:"#F94D1D"});
                }else if(i==2){
                    $bg.css({background:"#791BF8"});
                }else if(i==3){
                    $bg.css({background:"#3A3A3C"});
                }else if(i==4){
                    $bg.css({background:"#B8DFFC"});
                }
            }

            if(moved==$ul.children().length-1){
                moved=0;
                $ul.css("left",0);
            }


            /*****图片上导航小圆点轮播动画****/
            $ids.children(":eq("+moved+")")
                .addClass("hover")
                .siblings().removeClass("hover")
        })
    }
    // /*设置定时器，实现图片轮播*/
    timer=setInterval(move,WAIT);
//**********************鼠标进入时轮播停止******************************
    $("#slide_show").hover(
        ()=>{clearInterval(timer);timer=null;},
        ()=>{timer=setInterval(move,WAIT);}
    );
    //*************下一张***************
    $(".slider_control_next").click(()=>{
        if(!$ul.is(":animated")){
            move();
        }
    });
    //***************上一张*********************
    $(".slider_control_prev").click(()=>{
        if(!$ul.is(":animated")){
            if(moved==0){
                $ul.css("left",-LIWIDTH*4);
                moved=4;
            }
            move(-1);
        }
    });
    //指示器mouseover事件

    // console.log($ids);
    $ids.on("mouseover","li",function(){

        var $li=$(this);

        var i=$li.index();
        moved=i;
        $ul.stop(true).animate({
            left:-LIWIDTH*moved
        },DURA,()=>{
            $ids.children(":eq("+i+")")
                .addClass("hover")
                .siblings().removeClass("hover");
        })
    });

//*****************全部分类**************************
    $(".f_c_content").parent().hover(
        function(){

            $(this).children(".f_c_dorpdown").css({
                display:"block"
            });
        },
        function(){
            $(this).children(".f_c_dorpdown").css({
                display:"none"
            });
        })


//    ****************pirtrue********************
    $(".hot_li").hover(
        function(){
            $(this).children().children(".hot_price").css({
                background:"#D9271D"
        });
            $(this).children().children().children().children().css({
                color:"#fff",

            });
            $(this).children().children().children().children().children(".price_sale_before").css({
                 color:"#fff",
                  // background: "url(img/price_picture.jpg) 0 0px no-repeat #fff"
            });

            $(this).children().children().children(".hot_price_buy").css({
                display:"block",
                position:"absolute",
                right: "9px",
                top: "11px",
                "text-align": "center",
                width: "65px",
                height: "28px",
                "line-height": "28px",
                background: "#FF7F2F",
                color:"#fff"
            });
    },
        function(){
            $(this).children().children(".hot_price").css({
                background:"#fff"
            });
            $(this).children().children().children().children().css({
                color:"#D9271D",

            });
            $(this).children().children().children().children().children(".price_sale_before").css({
            height: "18px",
            color: "#D9271D",
            // background:"url(../img/price_picture.jpg)  0 -20px no-repeat #d82223"
            });
            $(this).children().children().children(".hot_price_buy").css({                            display:"none"

            });
        }
)


});