$(document).ready(function(){

    var epilogue_arr = [
        ["ep_top_01.png", "“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”"],
        ["ep_top_02.png", "“학도병들은 군번 없는 용사였다.<br>싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다.”"],
        ["ep_top_03.png", "“화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해<br>무엇보다 진정성을 담고자 했다”"]
    ];

    var $list = `
    <li>
        <div class="img_box"></div>
        <div class="txt_box">
            <div class="center">
                <p>“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”</p>
            </div>
        </div>
    </li>
    `; 

    for(i=0; i<epilogue_arr.length;i++){
        $(".epilogue ul").append($list);
    };

    $(".epilogue ul li").each(function(index){
        $(this).find(".img_box").css("background-image", "url(img/"+ epilogue_arr[index][0] +")")
        $(this).find(".txt_box p").html(epilogue_arr[index][1]);
    });

    $(".epilogue ul li").eq(1).find(".img_box").addClass("right_img");



});