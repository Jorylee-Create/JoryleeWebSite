function SetBGRandom(){
    document.getElementsByTagName("html")[0].style.backgroundImage = "url('https://img.paulzzh.tech/touhou/random')";
    storage["BackgroundChoose"] = "1";
    //document.getElementsByClassName("MenuButtom")[2].style.backgroundColor = "red";
    //document.getElementsByClassName("MenuButtom")[1].style.backgroundColor = "#66ccff";
}

function SetBGDefault(){
  	document.getElementsByTagName("html")[0].style.backgroundImage = "url('static/img/defaultBG.jpg')";
  	storage["BackgroundChoose"] = "0";
  	//document.getElementsByClassName("MenuButtom")[1].style.backgroundColor = "red";
  	//document.getElementsByClassName("MenuButtom")[2].style.backgroundColor = "#66ccff";

}
function menu(){
	var menu = document.getElementById("menu");
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
	var category = document.getElementsByName("category");
	var information = document.getElementsByClassName("information");
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

function OpenCFList(i){
	var CFList = document.getElementsByClassName("CFList")[0];
	CFList.style.width = i.clientWidth + "px";
	CFList.style.display = "block";
}

function CloseCFList(i){
	var CFList = document.getElementsByClassName("CFList")[0];
	CFList.style.display = "none";
}

function error(){
	var html = document.getElementsByTagName("html")[0];
	html.style.backgroundImage = "none";
	html.style.backgroundColor = "white";
}

function getImageDimensions(imgStyleRule) {  
  var img;  
  img = new Image();  
  img.onerror = "error()";
  console.log(imgStyleRule.replace(/url\(|\)$|"/ig, ''));
  img.src = imgStyleRule.replace(/url\(|\)$|"/ig, '');
  img.onload = function(){
  	setSize({  
    width: img.naturalWidth,  
    height: img.naturalWidth 
  });
  }  
  return {  
    width: img.naturalWidth,  
    height: img.naturalWidth 
  };  
}  

function setSize(image){
	var html = document.getElementsByTagName("html")[0];
	console.log(document.body.clientWidth/document.body.clientHeight>image.width/image.height);
	if(document.body.clientWidth/document.body.clientHeight>image.width/image.height) html.style.BackgroundSize = "100% auto";
	else html.style.BackgroundSize = "auto 100%";
}

function setBG(){
	var html = document.getElementsByTagName("html")[0];
	var linkTit = document.getElementsByClassName("jj-list-tit");
	function titColor(color){
		for(var i=0;i<linkTit.length;i++){
			linkTit[i].style.color = color;
		}
	}
  	switch(storage["BackgroundChoose"]){
  		case "0":
    		html.style.backgroundImage = "url('https://api.ixiaowai.cn/gqapi/gqapi.php')";
    		getImageDimensions(html.style.backgroundImage);
    		html.style.backgroundColor = "white";
    		titColor("white");
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose0").attr("checked","checked");      
    		break;
  		case "1":
    		html.style.backgroundImage = "url('https://api.ixiaowai.cn/api/api.php')";
    		getImageDimensions(html.style.backgroundImage);
    		html.style.backgroundColor = "white";
    		titColor("white");
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose1").attr("checked","checked");      
    		break;
  		case "2":
    		html.style.backgroundImage = "url('https://img.paulzzh.tech/touhou/random')";
    		getImageDimensions(html.style.backgroundImage);
    		html.style.backgroundColor = "white";
    		titColor("white");
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose2").attr("checked","checked");      
    		break;
    	case "3":
    		html.style.backgroundImage = "none";
    		html.style.backgroundColor = '#' + storage["BackgroundColor"];
    		titColor("white");
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose3").attr("checked","checked"); 
    		document.getElementsByName("HEXColor")[0].value = storage["BackgroundColor"];
    		break;
    	case "4":
    		html.style.backgroundImage = "url('" + storage["BackgroundImage"] + "')";
    		var ImageInfo = getImageDimensions(storage["BackgroundImage"]);
    		html.style.backgroundColor = "white";
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose4").attr("checked","checked"); 
    		if(storage["BackgroundImage"] != undefined) {
    		document.getElementsByName("URL")[0].value = storage["BackgroundImage"];
    		}
    		break;
    	default:
    		html.style.backgroundImage = "url('https://api.ixiaowai.cn/gqapi/gqapi.php')";
    		getImageDimensions(html.style.backgroundImage);
    		html.style.backgroundColor = "white";
    		titColor("white");
    		$("#choose0").removeAttr("checked");
    		$("#choose1").removeAttr("checked");
    		$("#choose2").removeAttr("checked");
    		$("#choose3").removeAttr("checked");
    		$("#choose4").removeAttr("checked");
    		$("#choose0").attr("checked","checked");      
    		break;
    }
}

window.onload = function(){
	setBG();
}