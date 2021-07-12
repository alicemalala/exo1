$(document).ready(function(){
	let prixAchat = document.getElementById("prixdachat").value;
	let cost = document.getElementById("cout").value;
	let range = 1;

	$("prixdachat").change(function(){
  		alert("The text has been changed.");
	});

	$('#prixdachat')||('$cout').on("change", function() {
   		var range = $(this).val();
   		//alert(range);
	});

	$("prixderevient").on("change",function(){
		$(this).value = prixAchat + cost
	})
}