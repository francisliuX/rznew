$(()=>{


 //**********************进入内容栏来回切换*****************************
    var LIWIDTH=248;
    $(".main_image_tit").mouseover(e=>{
        e.preventDefault();
        var $tar=$(e.target);
        // console.log($tar)
        if($tar.is("a")) {
            var index = $tar.parent().index();
            // console.log(index);
            $(".move_box").css("left", LIWIDTH * index);
            if(index==""){
                fun("data/getfestivalA.php");
            }else if(index==1){
                fun("data/getfestivalB.php");
            }else if(index==2){
                fun("data/getfestivalC.php");
            }else if(index==3){
                fun("data/getfestivalD.php");
            }
        }
    });
    //************************下拉内容******************************
    function fun(a){
        $.get(a).then(data => {
            "use strict";
            var html = "";
            // console.log(1)

            for (var i = 0; i < data.length; i++) {
                // console.log(data)
                html += ` <ul class="inner_list">
                    <li class="inner_item">
                        <a href="" target="_blank" class="inner_picture">
                                <img src="${data[i].pic}" alt="">
                            </a>
                            <div class="inner_info">
                                <p class="info_label">
                                    <span class="gift"></span>
                                </p>
                                <a href="#" target="_blank" class="info_title">${data[i].details}</a>
                                <div>
                                    <p class="inner_price">￥
                                        <span class="inner_pri_num">${data[i].price}</span>
                                    </p>
                                    <a href="#" class="inner_buy" target></a>
                                </div>
                            </div>
                     </li>
                    </ul>`;
            }
            // console.log(2);
            var $img = $(".main_image_inn");
            // console.log(3);
            $img.html(html);
        })

    }
    fun("data/getfestivalA.php");

//***********************lift****************************

    //楼层显示
    var $floors=$(".floorX");
    // var w=window.innerHeight;
    $(window).scroll(()=>{
        var scrollTop=$(window).scrollTop();
        var offsetTop=$("#f1").offset().top;
        if(offsetTop<scrollTop+innerHeight/3)
            //********电梯显示与隐藏***************
            $('.main_fixed_inner').show();
        else
            $('.main_fixed_inner').hide();
        //具体哪个楼层点亮
        for(var f of $floors){
            var $f=$(f);
            var offsetTop=$f.offset().top;
            if(offsetTop<scrollTop+innerHeight/5){
                var i=$floors.index($f);
                var $li=$(".fixed_lift_list").find(".fixed_lift_item:eq("+i+")");
                //*********楼层颜色变化**************
                $li.addClass("hover")
                    .siblings().removeClass("hover");
            }

        };
//************点击电梯跳转到具体楼层*********************
        $(".fixed_lift_list").on("click",".fixed_lift_item",function(){
            var $li=$(this);
            if(!$li.is(":last-child")){
                //找到当前的li对应的楼层
                var i=$li.index();
                var offsetTop=$floors.eq(i).offset().top;
                $("html,body").stop(true).animate({
                    scrollTop:offsetTop-350
                },500);
            }else{
                $("html,body").stop(true).animate({
                    scrollTop:0
                },500);
            }
        })

    })
//******************热销手机*********************
    $.get("data/getfestivalA.php").then(data=>{
        var html="";

        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            // console.log(data.length)
        html+=`<li class="slider_inner">
                <a href=""><img src="${data[i].pic}" alt=""></a>
                <p class="slider_title">${data[i].title}</p>
                <p class="slider_desc">${data[i].details}</p>
            <p class="slider_price">${data[i].price}</p>
                </li>`
        }
        $(".slider_inner_id").html(html);
    // })
    // $(()=>{
        var speed=20;
        // var $tab=$("#image_demo");
        // var $tab1=$("#image_demo1");
        // var $tab2=$("#image_demo2");
        // var inner=$tab1.html()
        // $tab2.html(inner)


        var tab=document.getElementById("image_demo");
        var tab1 = document.getElementById("image_demo1");
        var tab2 = document.getElementById("image_demo2");
            tab2.innerHTML = tab1.innerHTML;
            // console.log(tab2)
        function Marquee() {
            if (tab2.offsetWidth - tab.scrollLeft <= 0)
                tab.scrollLeft -= tab1.offsetWidth
            else {
                tab.scrollLeft++;
            }
            // console.log(tab.scrollLeft)
        }
        Marquee();
        var MyMar = setInterval(Marquee, speed);

        $("#image_demo").hover(
            ()=>{clearInterval(MyMar)},
            ()=>{MyMar = setInterval(Marquee, speed)}
        )


        // tab.onmouseover = function () {
        //     clearInterval(MyMar)
        // };
        // tab.onmouseout = function () {
        //     MyMar = setInterval(Marquee, speed)
        // };

    })

//******************尾********************
});

$(()=>{
    //*******************小轮播********************
    function cpu(change){
        var $item=$(change+" .floorA_box_cpu .floorA_box_item"),
            $page=$(change+" .floorA_box_cpu .floorA_box_page"),
            data=$(change+"  .floorA_box_cpu .floorA_box_item>li");
        const WAIT=3000,LIWIDTH=230,DURA=500;
        var moved=0,timer=null;
        // $page.children().first().addClass("pagesactive");
        // console.log(data.length);
        function move(dir=1){
            moved+=dir;
            $item.animate({
                left:-LIWIDTH*moved
            },DURA,()=>{
                if(moved==data.length-1){
                    $item.css("left",0);
                    moved=0;
                }
                // $page.children(":eq("+moved+")")
                //     .addClass("pagesactive")
                //     .siblings().removeClass("pagesactive")
            })
        }
        timer=setInterval(move,WAIT);

        $(change+" .floorA_box_item").hover(
            ()=>{clearInterval(timer);timer=null;},
            ()=>{timer=setInterval(move,WAIT);}
        );
        //*************前后切换******************
        $(change+" .small_slide_right").click((e)=>{
            console.log(1);

            e.preventDefault;
            if(!$item.is(":animated"))
                move();
        });
        $(change+" .small_slide_left").click((e)=>{
            console.log(2);
            e.preventDefault;
            if(!$item.is(":animated")){
                if(moved==0){
                    $item.css("left",-LIWIDTH*data.length-1);
                    moved=data.length-1;
                    // console.log(moved)
                }
                move(-1)
            }
        });

    }
    cpu(".A");
    cpu(".C");
    cpu(".D");
    cpu(".B");
})
$(()=>{

    var box=$(".image_box_sfq"),
         ul=box.children(),
         lis=ul.children();
    for (var i=0;i<lis.length;i++){
        var li=lis[i].children[0]
        // console.log(li)

        // lis[i].style.backgroundImage="url(img/image_floorB/a"+(i+1)+".png)";
        li.style.backgroundImage="url(img/image_floorB/b"+(i+1)+".jpg)";

        lis[i].onmouseover=function(){
            for(var j=0;j<lis.length;j++){
                animate(lis[j],{"width":100});
            }
            animate(this,{"width":550});
        };
    }
    // console.log(12)
    box.mouseout(function(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],{"width":190});
        }
    });
    // console.log(13)
    function animate(obj,json){
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            var flag=true;
            for (var k in json){
                var leader=parseInt(getStyle(obj,k))||0;
                var target=json[k];
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader+"px";
                if(leader!=target){
                    flag=false;
                }
            }
            if(flag){
                clearInterval(obj.timer);
            }
        },15);
    }
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
})































