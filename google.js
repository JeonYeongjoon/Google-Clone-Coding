function enterSearch(){
    if(window.event.keyword == 13){
        myFunction();
    }
}

function myFunction(){
    var keyword = document.getElementsByClassName("search").value;
    location.href = "https://www.google.co.kr/search?q="+keyword;
}

