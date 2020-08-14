$(document).ready(function(){

    $.ajax({
        url : "coverstory.html", 
        type : "post",
        success : function(result){
            $("#content").html(result);
        }
    });

    $("nav li:eq(0)").click(function(){
        $.ajax({
            url : "coverstory.html", 
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");  //모든 li요소로 부터 active 제거
        $(this).addClass("active");  //클릭한 곳에만 active부여

        return false;
    });

    $("nav li:eq(1)").click(function(){
        $.ajax({
            url : "characters.html", 
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");  //모든 li요소로 부터 active 제거
        $(this).addClass("active");  //클릭한 곳에만 active부여

        return false;
    });

    $("nav li:eq(2)").click(function(){
        $.ajax({
            url : "snapshots.html", 
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");  
        $(this).addClass("active"); 

        return false;
    });

    $("nav li:eq(3)").click(function(){
        $.ajax({
            url : "epilogue.html", 
            type : "post",
            success : function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");  
        $(this).addClass("active"); 

        return false;
    });



});