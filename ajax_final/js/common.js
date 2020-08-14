$(document).ready(function(){

    var $sum = 0;

    $(document).on("click", ".container .inner_box", function(){
        var num = Number($(this).text());
        $sum += num;
        console.log($sum);

    });

    

    $.ajax({
        url : "main.html", //요청할 파일 주소
        type: "post", 
        success: function(result){
            $("#content").html(result);
        }

    });

    $(".menu ul li:eq(0)").click(function(){
        $.ajax({
            url : "sub1.html",
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        })

        console.log($sum);

        return false;
    });

    $(".menu ul li:eq(1)").click(function(){
        $.ajax({
            url : "sub2.html",
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        })
        console.log($sum);
        return false;
    });







});