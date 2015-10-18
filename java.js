function showOrHide(e) {
	if (document.getElementById) {
		var abra = document.getElementById(e).style;
		if (abra.display == "block") {
			abra.display = "none";
		} 
		else {
  			 abra.display = "block";
  		} 
 	 return false;
  } 
  	else {
  		return true;
 }
}