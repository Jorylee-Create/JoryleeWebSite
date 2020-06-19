var storage = window.localStorage;
var html = document.getElementsByTagName("html")[0];
var menu = document.getElementById("menu");
var category = document.getElementsByName("category");
var information = document.getElementsByClassName("information");
var choose = document.getElementsByClassName("choose");
var linkTit = document.getElementsByClassName("jj-list-tit");
var editing = false;
function changeMenu(){
	var setMenu = document.getElementById("SetMenu");
	if(menu.style.display != "block"){
		menu.style.display = "block";
		setMenu.style.height = "21em";
		setMenu.style.width = "20em";
	} else {
		menu.style.display = "none";
		setMenu.style.height = "3em";
		setMenu.style.width = "3em";
	}
}

function foo(){
	for(var i=0;i<information.length;i++){
		information[i].style.display = "none";
	}
  for(var i=0;i<category.length;i++){
   if (category[i].checked){
    　　　　		information[i].style.display = "block";
    storage["BackgroundChoose"] = i+"";
    setBG();
  　　　　}
}
}

function OpenList(i){
	i.getElementsByClassName("List")[0].style.width = i.clientWidth + "px";
	i.getElementsByClassName("List")[0].style.display = "block";
}

function CloseList(i){
	i.getElementsByClassName("List")[0].style.display = "none";
}

function error(){
	html.style.backgroundImage = "none";
	html.style.backgroundColor = "white";
}

function setInputChoose(n){
	for(var i=0;i<choose.length;i++){
		$("#choose" + i).removeAttr("checked");
	}
	$("#choose" + n).attr("checked","checked"); 
}

function titColor(color){
    for(var i=0;i<linkTit.length;i++){
      linkTit[i].style.color = color;
    }
  }

var listMember = new Array();
listMember[0] = function(){
  html.style.backgroundImage = "url('https://api.ixiaowai.cn/gqapi/gqapi.php')";
  //getImageDimensions(html.style.backgroundImage);
  html.style.backgroundColor = "white";
  titColor("white");
  setInputChoose(0); 
}
listMember[1] = function(){
  html.style.backgroundImage = "url('https://api.ixiaowai.cn/api/api.php')";
  //getImageDimensions(html.style.backgroundImage);
  html.style.backgroundColor = "white";
  titColor("white");
  setInputChoose(1);
}
listMember[2] = function(){
  html.style.backgroundImage = "url('https://img.paulzzh.tech/touhou/random')";
  //getImageDimensions(html.style.backgroundImage);
  html.style.backgroundColor = "white";
  titColor("white");
  setInputChoose(2); 
}
listMember[3] = function(){
  html.style.backgroundImage = "none";
  html.style.backgroundColor = '#' + storage["BackgroundColor"];
  titColor("white");
  setInputChoose(3); 
  document.getElementsByName("HEXColor")[0].value = storage["BackgroundColor"];
}
listMember[4] = function(){
  html.style.backgroundImage = "url('" + storage["BackgroundImage"] + "')";
  //var ImageInfo = getImageDimensions(storage["BackgroundImage"]);
  html.style.backgroundColor = "white";
  setInputChoose(4); 
  if(storage["BackgroundImage"] != undefined) {
    document.getElementsByName("URL")[0].value = storage["BackgroundImage"];
  }
}

function setBG(){
switch(storage["BackgroundChoose"]){
  case "0":
    listMember[0]();   
    break;
  case "1":
    listMember[1]();         
    break;
  case "2":
    listMember[2]();         
    break;
  case "3":
    listMember[3]();    
    break;
  case "4":
    listMember[4]();    
    break;
  default:
    listMember[0]();     
    break;
  }
}


function edit(){

}
window.onload = function(){
     setBG();
  }