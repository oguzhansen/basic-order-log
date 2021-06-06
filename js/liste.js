$(document).ready(function()
{
	var nickname = localStorage.getItem("nick");
	var site = localStorage.getItem("site");
	var sip = localStorage.getItem("siparis");
	var tes = localStorage.getItem("teslim");

	$(".ekle").click(function()
	{
		var nickname = $("#nick").val();
		var site = $("#tur").val();
		var sip = $("#siparis").val();
		var tes = $("#teslim").val();
		localStorage.setItem("nick",nickname);
		localStorage.setItem("site",site);
		localStorage.setItem("siparis",sip);
		localStorage.setItem("teslim",tes);

		window.location.href = "liste.html";

	});
});