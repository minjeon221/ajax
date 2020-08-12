$(document).ready(function(){
    $.ajax({
        url: "rank.xml", //데이터를 요청할 주소
        dataType : "xml", //요청할 데이터의 형식
        success : function(result){
            if($(result).find("rank").length>0){ // 요청한 xml 파일의 데이터에서 <rank>태그의 개수가 0보다 크다면
                $(result).find("rank").each(function(){ //<rank>의 총 갯수만큼 순차적으로 접근
                    var name = $(this).find("j").text(); //<rank> 하위의 <j>라는 태그로 접근하여 텍스트 결과값을 각각 저장
                    var result_01 = "<li>" + name + "</li>"; //변수 name에 저장된 텍스트 결과값을 result_01에 각각 순차적으로 저장
                    $("#wrap ol").append(result_01);
                });
            }
        }
    });



});