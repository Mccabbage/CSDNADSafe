try {
	document.getElementsByTagName("aside")[0].children[1].style.display="none"
} catch(err) {
	console.log(err)
}
try {
	document.getElementById("asideFooter").remove()
} catch(err) {
	console.log(err)
}
try {
	if(document.getElementsByClassName("ad_top").length>0){
		document.getElementsByClassName("ad_top")[0].remove()
	}
} catch(err) {
	console.log(err)
}
try {
	if(document.getElementById("mainBox").getElementsByClassName("p4course_target")){
		document.getElementById("mainBox").getElementsByClassName("p4course_target")[0].remove()
	}
} catch(err) {
	console.log(err)
	
}
//try {
	//document.getElementById("logo-close-btn").click();
//} catch(err) {
//	console.log(err)
//}
try {
	var adboxes = document.getElementsByClassName("recommend-ad-box");
	if(adboxes.length>0) {
		for(var i=0;i<adboxes.length;i++) {
			adboxes[i].remove();
		}
	}
} catch(err) {
	console.log(err)
}

