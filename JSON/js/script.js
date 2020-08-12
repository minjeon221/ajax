$(document).ready(function(){
    //json data의 기본형식 key와 그에 따른 value로 구성
    /* 
    {
        "key1" : "value1",
        "key2" : "value2",
        "key3" : "value3"
    }
    */

    var item1 = {
        "company" : "Apple - 애플",
        "model" : "iPhone-SE",
        "color" : "Blue(블루)"
    };

    function jsonTest_01(){
        console.log(item1.company);
        console.log(item1.model);
        console.log(item1.color);

        $(".item_01 li:eq(0)").text(item1.company);
        $(".item_01 li:eq(1)").text(item1.model);
        $(".item_01 li:eq(2)").text(item1.color);
    };

    jsonTest_01();

    var item2 = {
        "quiz" : {
            "sports" : "basketball",
            "player" : "서장훈",
            "teams" : ["nights", "dongbu", "orions"]
        },
        "season" : {
            "season2008" : "신인왕",
            "season2010" : ["득점왕", {"베스트5" : "Golden Ball"}, "최우수 선수"]
        }
    };

    console.log(item2.quiz.sports);
    console.log(item2.quiz.teams[2]);
    console.log(item2.season.season2010[2]);
    console.log(item2.season.season2010[1].베스트5);

    
//외부 json파일과의 연동
//json 파일의 내부패턴 = {아이디, 이름, 이메일, 성별}

    $.getJSON("./res/ex_01.json", function(data){
        console.log(data);
        for(key in data){//배열 데이터 형식을 갖고 있는 변수에 적용 가능 
            console.log(key); //배열 데이터의 인덱스 번호 추출
            console.log("name : " + data[key].name + ". email : " + data[key].email);

        }
    });

    //data 라는 변수명을 person으로 변경하여도 무방
    $.getJSON("./res/ex_01.json", function(person){
        console.log(person);
        for(i in person){//배열 데이터 형식을 갖고 있는 변수에 적용 가능 
            console.log(i); //배열 데이터의 인덱스 번호 추출
            console.log("name : " + person[i].name + ". email : " + person[i].email);

        }
    });

    $.getJSON("./res/ex_01.json", function(member){
        var $externalData = member;
        $externalData.sort(function(a, b){
            //데이터의 형태가 숫자타입일 경우
            //return b.id - a.id; 

            //데이터의 형태 문자타입일 경우 (아스키 코드 값에 의한 문자를 비교)
            if(a.name < b.name){
                return -1;  //자리를 바꾸지 않는다
            }
            if(a.name > b.name){
                return 1;  //자리를 바꿔라
            }
            return 0; 
        });
        
        console.log("외부데이터 : ", $externalData);
    });












});