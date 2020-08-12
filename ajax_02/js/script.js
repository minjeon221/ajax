$(document).ready(function(){
    $("#member").submit(function(){ //회원가입이라는 버튼을 클릭했을 때 전송(submit)이 진행
        var $confirm = $(this).serialize(); //폼 내부의 요소의 전송할 데이터를 재가공
        console.log($confirm);
        $.ajax({
            url: "member.php", //데이터를 전송 및 요청할 url주소
            type: "post", //데이터 전송방식(get 또는 post)
            data: $confirm, //전송할 데이터
            success: function(result){ //ajax로 통신이 완료되고, 전송이 정상적으로 진행되었을 때 함수문을 실행
                $("#user").html(result);
            }
        });
        return false; //"회원가입"이라는 버튼을 클릭했을 때, action 페이지로 전환되는 것을 막음

    });




});