$(document).ready(function() {
	$("#dpto").change(function() {
		$("#localidad").load("texts/" + $(this).val() + ".txt");
	});
});