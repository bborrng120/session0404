const me1 = document.getElementById("me1")
const me2 = document.getElementById("me2")

me1.onclick = function() {
    alert('제 나이는 25살입니다(00년생)');
    alert('제 mbti는 ISFJ입니다');
    alert('제가 제일 좋아하는 색은 파란색입니다 하하');
}

me2.ondblclick = function() {
    var userName = prompt("당신의 이름은 무엇인가요 ?", "글쎄요");
    document.write("<h1> 당신의 이름은 :" + userName + "이군요, 저희 이제 친하게 지내봐요ㅎㅎ</h1>")
};
