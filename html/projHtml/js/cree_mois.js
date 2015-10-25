/*
affiche le tableau html en fonction du mois
*/
function getJourFr(indice) {
	var jours = ["di", "lu","ma","me","je","ve","sa"];
	if (indice < 0 || indice > 6)
		return "??";
	else
		return jours[indice];
}

function affiche_mois() {
	$('#titre_mois').text($("#mois option:selected").text());
   var mois = $('#mois').val();
   //alert ("affiche_mois " + mois);
   if (mois < 1 || mois > 12)
    return;
  $('#tab_mois').html("");

	var i;
	var jourSem;
	// for  (i = 1 ; i <= 31 ; i++)  {
		// var jour = new Date("2015-" + mois + "-" + i);
		// jourSem = jour.getDay();	//0 = dimanche
		// $('#tab_mois').append ("<tr class=\"jourSem"+ jourSem + "\">");
		// $('#tab_mois').append ("<td id=\"td_JL" +  i + "\">" + getJourFr(jourSem) + "</td>");
		// $('#tab_mois').append ("<td id=\"td_JL" +  i + "\">" + i + "</td>");
		// //$('#tab_mois').append ("<td>" +"jour" + "</td>");
		// $('#tab_mois').append ("<td id=\"td_CL" +  i + "\">" + "cours " + i + "</td>");
		// //$('#tab_mois').append ("<td>"+ "cours" + "</td>");
		// $('#tab_mois').append ("<td>"+ "formateur" + "</td>");
		// $('#tab_mois').append ("</tr>");
    // }
    
  
  for  (i in formations)  {
    if(mois == formations[i].mois) {
	var j = new Date("2015-" + mois + "-" + formations[i].jour);
      $('#tab_mois').append ("<tr>");
      $('#tab_mois').append ("<td>"+ getJourFr(j.getDay()) + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].jour + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].cours + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].formateur + "</td>");
      $('#tab_mois').append ("</tr>");
    }
  }
}
