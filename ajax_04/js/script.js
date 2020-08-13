$(document).ready(function(){
    $.ajax({
        url: "list.json", //데이터를 요청할 경로 및 파일
        dataType: "json", //데이터 형식
        success : function(result){
            console.log(result);
            $(result.list).each(function(a, b){ //json 데이터의 list 항목에 저장된 값만큼 함수문을 순차적으로 실행을 진행. 이 때 매개변수 b에 list의 배열 인덱스의 객체가 할당되도록 구성
                console.log("a: " + a + ", b: " + b);
                //a : 인덱스 번호, b : 인덱스 번호 마다 작성된 객체데이터
                $("#wrap ul").append("<li>" + b["k"] + "</li>");
                //#1. b = ["k" : "캐나다"] 데이터 중에서 네이밍으로 지정한 "k"의 값을 반환 => 캐나다
                //#2. b = ["k" : "프랑스"] 데이터 중에서 네이밍으로 지정한 "k"의 값을 반환 => 프랑스
                //#3. b = ["k" : "브라질"] 데이터 중에서 네이밍으로 지정한 "k"의 값을 반환 => 브라질
            });
        }
    })
});

//$(선택자).each(function(){...실행문...});
//$.each("선택자", function(){...실행문...});