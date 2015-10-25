/*
affiche le tableau html en fonction du mois
*/
function affiche_mois(mois) {
  //alert ("affiche_mois " + mois);
  if (mois < 1 || mois > 12)
    return;
  $('#tab_mois').html("");
  for  (i in formations)  {
    if(mois == formations[i].mois) {
      $('#tab_mois').append ("<tr>");
      $('#tab_mois').append ("<td>"+ "jour" + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].jour + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].cours + "</td>");
      $('#tab_mois').append ("<td>"+ formations[i].formateur + "</td>");
      $('#tab_mois').append ("</tr>");
    }
  }
}
