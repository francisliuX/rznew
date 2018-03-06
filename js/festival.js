$(()=>{

    //************************进入hover出下拉******************************
    $(".image_tit_txt").hover(
        function(){
            $(this).parent().parent().children("div:last-child").css({
                display:"block",
                "z-index":"999"
            })

        },
        // function(){
        //     $(this).parent().parent().children("div:last-child").css({
        //         display:"none"
        //     })
        //
        // }
    )
    //**********************进入内容栏来回切换*****************************
    var LIWIDTH=248;
    $(".main_image_tit").mouseover(e=>{
        e.preventDefault();
        var $tar=$(e.target);
        // console.log($tar)
        if($tar.is("a")){
            var index=$tar.parent().index();
            console.log(index);
            $(".move_box").css("left",LIWIDTH*index);

    //************************下拉内容******************************


    $.get("data/getfestivalA.php").then(data => {
        "use strict";
        var html = "";
        console.log(1)

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
        console.log(2);
        var $img = $(".main_image_inn");
        console.log(3);
        $img.html(html);
    })

        }
    });

})