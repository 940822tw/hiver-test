combinationNum = document.URL.substring(document.URL.lastIndexOf("/") + 8, document.URL.length-5);
  arr=[];
  j = parseInt(combinationNum); j=j*1;
  j++;
  styleOffset = j;
  document.title="Survey-"+j
  j--;
  html=''
  for(var i=0; i<19; i++){ //배열생성
    arr[i]={'firstnum':j,'secondnum':i}
    j++;
    if(j>18){j=0}
  }

  function home(){
      window.location.href="index.html"
  }
  $("html").attr("lang", "kr");

var alphabetical = ['A','B','C','D','E','F','G','H','I','J',
'K','L','M','N','O','P','Q','R','S']

var GSSurl_1 = "https://spreadsheets.google.com/feeds/cells/1DiPjhDY19pJgd7v1Kjz6jRjxC-0CBFf3s4XaIEP8N-E/1/public/basic?alt=json-in-script&callback=?";

var GSSurl_2 = "https://spreadsheets.google.com/feeds/cells/1DiPjhDY19pJgd7v1Kjz6jRjxC-0CBFf3s4XaIEP8N-E/2/public/basic?alt=json-in-script&callback=?";


$.getJSON(GSSurl_1,function(data){
  var entry_1=data.feed.entry;
    $("body").append("<div class='view'>");
  for(var k=0; k<19; k++){
    console.log("문단"+l)
    var l=k*6+7;
    var textid = "#text-"+k;
    var pageid = "#page-"+k;
    buttonnum = arr[k].secondnum*1+1;
    var textnum = buttonnum*1 + styleOffset*1 - 1;
    html = ''
    html += '<div id="page-'+arr[k].secondnum+'" class="pageStyle">'
    html += '<div class="circle-2">'+alphabetical[eval(styleOffset-1)]+'-'+eval(textnum-styleOffset+1)+'</div><br><br><br>'
    html += '<div id="text-'+arr[k].secondnum+'"></div>'
    html += '</div>'
    console.log(l);
    $(".view").append(html);
    console.log("패밀리 : " + entry_1[l].content.$t)
    $(textid).css('font-family', entry_1[l].content.$t);l++;
    console.log("사이즈 : " + entry_1[l].content.$t)
    $(textid).css('font-size', entry_1[l].content.$t);l++;
    console.log("행간 : " + entry_1[l].content.$t)
    $(textid).css('line-height', entry_1[l].content.$t);l++;
    console.log("정렬 : " + entry_1[l].content.$t)
    $(textid).css('text-align', entry_1[l].content.$t);l++;
    console.log("단어분리 : " + entry_1[l].content.$t)
    $(textid).css('word-break', entry_1[l].content.$t);l++;
    $("#page-0").css('display', 'block');
         $("body").css('overflow-y', 'hidden');
   }

});

setTimeout(function() {
$.getJSON(GSSurl_2,function(data){
  var entry_2=data.feed.entry;
  for(var m=0; m<19; m++){
  var n = arr[m].secondnum; n=n*2+3;
  var fixedNum = styleOffset*2+1;
  var textid2 = "#text-"+m;
  console.log(textid2);
  $(textid2).append(entry_2[fixedNum].content.$t);
    $(textid2).append("<br><br>");
}});
}, 100);

setTimeout(function() {
     $("body").append("</div>");

     }, 100);
     function pageUp(num){
     var currentPageName = "page-"+num;
     var newPageNum = num+1;
     var newPageName = "page-"+newPageNum;
     var currentpage = document.getElementById(currentPageName);
     var newPage = document.getElementById(newPageName);
     currentpage.style.display = "none";
     newPage.style.display = "block";
     }
     function pageDown(num){
     var currentPageName = "page-"+num;
     var newPageNum = num-1;
     var newPageName = "page-"+newPageNum;
     var currentpage = document.getElementById(currentPageName);
     var newPage = document.getElementById(newPageName);
     currentpage.style.display = "none";
     newPage.style.display = "block";
     }

setTimeout(function() {


     window.onload=function(){pageNumber=0; var posX;var posX1;var posY;var posY1;
    var myDiv = document.querySelector(".view");
     myDiv.addEventListener("touchstart", function(e){
     e = e || window.event;
     posX = e.changedTouches[0].pageX;
     posY = e.changedTouches[0].pageY;
     })
     myDiv.addEventListener("touchend", function(e){
     e = e || window.event;
     posX1= e.changedTouches[0].pageX;
     posY1 = e.changedTouches[0].pageY;

     xControl=posX1-posX;
     yControl=posY1-posY;
     if(xControl>50){
       if(pageNumber!=0){pageDown(pageNumber);}
       pageNumber--; if(pageNumber<0){
         pageNumber=0;
         var currentPageName = "page-"+0;
         var newPageNum = 18;
         var newPageName = "page-"+newPageNum;
         var currentpage = document.getElementById(currentPageName);
         var newPage = document.getElementById(newPageName);
         currentpage.style.display = "none";
         newPage.style.display = "block";
         pageNumber=18;}
     console.log("right swipe");}else
     if(xControl<-50) {
       if(pageNumber!=18){pageUp(pageNumber);}
       pageNumber++; if(pageNumber>18)
       {
         pageNumber=18;
         var currentPageName = "page-"+18;
         var newPageNum = 0;
         var newPageName = "page-"+newPageNum;
         var currentpage = document.getElementById(currentPageName);
         var newPage = document.getElementById(newPageName);
         currentpage.style.display = "none";
         newPage.style.display = "block";
         pageNumber=0;
       }
     console.log("left swipe")}

     // if(yControl>50){
     // if(pageNumber!=0){pageDown(pageNumber);}
     // pageNumber--; if(pageNumber<0){pageNumber=0;}
     // console.log("down swipe");
     // console.log("pageNumber : "+ pageNumber);}else
     // if(yControl<-50){
     // if(pageNumber!=3){pageUp(pageNumber);}
     // pageNumber++; if(pageNumber>3){pageNumber=3;}
     // console.log("up swipe");
     // console.log("pageNumber : "+ pageNumber);}
       })
     }
     }, 100);

setTimeout(function() {
  $("body").append("<img id='back' class='nav' src='back.svg' onclick='back()'>");
  $("body").append("<img id='forward' class='nav' src='forward.svg' onclick='forward()'>");
  $("body").append("<img id='close' class='nav' src='close.svg' onclick='home()'>");
  }, 100);

  function back(){
      if(pageNumber!=0){pageDown(pageNumber);}
      pageNumber--; if(pageNumber<0){
        pageNumber=0;
        var currentPageName = "page-"+0;
        var newPageNum = 18;
        var newPageName = "page-"+newPageNum;
        var currentpage = document.getElementById(currentPageName);
        var newPage = document.getElementById(newPageName);
        currentpage.style.display = "none";
        newPage.style.display = "block";
        pageNumber=18;}}

  function forward(){
    if(pageNumber!=18){pageUp(pageNumber);}
    pageNumber++; if(pageNumber>18)
    {
      pageNumber=18;
      var currentPageName = "page-"+18;
      var newPageNum = 0;
      var newPageName = "page-"+newPageNum;
      var currentpage = document.getElementById(currentPageName);
      var newPage = document.getElementById(newPageName);
      currentpage.style.display = "none";
      newPage.style.display = "block";
      pageNumber=0;
    }}
