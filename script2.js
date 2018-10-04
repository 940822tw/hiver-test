firstnum = document.URL.substring(document.URL.lastIndexOf("/") + -2, document.URL.length - 8);
secondnum = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length - 5);
$("html").attr("lang", "kr");
document.title = 'Session - ' + eval(Math.abs(firstnum-secondnum)+1);
console.log(document.title + " : " + eval(firstnum*1+1) + "번째 스타일의 " + eval(secondnum*1+1) + "번째 지문")
if (secondnum == "00") {
  document.write('<div class="start"><input type="button" value="시작하기" onclick="start()"></div><div class="number"><div class="circle-1" onclick="number()">1</div></div>')
} else if (secondnum != "00") {
  var pagenum = secondnum * 1 + 1
  pagenum = pagenum.toString();
  document.write('<div class="number"><div class="circle-1" onclick="number()">' + pagenum + '</div></div>')
};

function start() {
  $(".start").addClass("invisible");
}

function number() {
  $(".number").addClass("invisible");
  generate();
}

function end() {
  document.write('<div style="font-size:36px; margin-top:calc(50vh - 25px); color:#000; width:96vw; text-align:center; font-family:AppleSDGothicNeoL;" onclick="home()">수고하셨습니다.</div>');

}

function home() {
  window.location.href = "../index.html"
}


function generate() {
  // firstnum = parseInt(firstnum, 16); // spec
  // secondnum = parseInt(secondnum, 16); // text
  var html = '';
  var GSSurl_1 = "https://spreadsheets.google.com/feeds/cells/1DiPjhDY19pJgd7v1Kjz6jRjxC-0CBFf3s4XaIEP8N-E/1/public/basic?alt=json-in-script&callback=?";
  var GSSurl_2 = "https://spreadsheets.google.com/feeds/cells/1DiPjhDY19pJgd7v1Kjz6jRjxC-0CBFf3s4XaIEP8N-E/2/public/basic?alt=json-in-script&callback=?";
  $.getJSON(GSSurl_1, function(data) {
    var entry_1 = data.feed.entry;
    var i = firstnum * 6 + 7;
    $("body").css('font-family', entry_1[i].content.$t);
    i++;
    $("body").css('font-size', entry_1[i].content.$t);
    i++;
    $("body").css('line-height', entry_1[i].content.$t);
    i++;
    $("body").css('text-align', entry_1[i].content.$t);
    i++;
    $("body").css('word-break', entry_1[i].content.$t);
    i++;
  });
  setTimeout(function() {
    $.getJSON(GSSurl_2, function(data) {
      var entry_2 = data.feed.entry;
      var j = secondnum * 2 + 3;
      $("body").append(entry_2[j].content.$t);
      $("body").append("<br><br><br><div style='text-align:center; cursor:pointer; background-color:#fff; width:34px; height:32px; position:absolute; right:20px; padding-top:4px;'><img src='../arrow.svg' onclick='locate();' style='opacity:0.8; display=inline-block' width='28px' height='28px'></div><br><br>");
    });
  }, 100);
}


function locate() {
  if (secondnum == "18") {
    end();
  } else {
    var loc1 = firstnum*1 + 1;
    if(loc1<10){loc1="0"+loc1}
    if (firstnum == 18) {var loc1 = "00";}
    var loc2 = secondnum*1 + 1;
    if(loc2<10){loc2="0"+loc2}
    loc1 = loc1.toString();
    loc2 = loc2.toString();
    var location = "../" + loc1 + "/"+ loc2 + ".html";
    window.location.href = location;
  }
}

function toSurvey() {
  if (firstnum == "18") {
    var loc3 = "00";
  } else {
    var loc3 = firstnum*1 + 1;
    if(loc3<10){loc3="0"+loc3}
  }
  if(loc3<10){firstnum="0"+firstnum}
  var surveyHref = "../survey-" + loc3 + ".html";
  window.location.href = surveyHref;
}
