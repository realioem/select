function showOrHide(e) {
	if (document.getElementById) {
		var menu = document.getElementById(e).style;
		var abar = document.getElementById(e);
		if (abar.id == "menulink") {
			menu.display = "block";
		}
		else{
			menu.display = "none";
		}
	 return false;
  } 
  	else {
  		return true;
 }
	}