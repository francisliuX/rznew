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
    // var a="data/getfestivalA.php";
    function fun(a){
        $.get(a).then(data => {
            "use strict";
            var html = "";
            // console.log(1)

            for (var i = 0; i < data.length; i++) {
                // console.log(data)
                // console.log(data[0])
                // console.log(data[i].pic)
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
//     $(function(){
//         $(window).scroll(()=>{
//             if($(document).scrollTop()>=800){
//                 $(".main_fixed_inner").css({display:'block'});
//                 // $(".fixed_lift_item").hover( {background: '#918888'});
//                 $(".fixed_lift_item1").addClass('hover')
//
//             }else{
//                 $(".main_fixed_inner").css({display:'none'});
//             }
//         })
//     })

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
        }
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

//******************尾********************
})
