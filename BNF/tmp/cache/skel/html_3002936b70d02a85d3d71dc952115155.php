<?php

/*
 * Squelette : plugins-dist/porte_plume/barre_outils_icones.css.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 31 Mar 2017 12:11:23 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette plugins-dist/porte_plume/barre_outils_icones.css.html
// Temps de compilation total: 1.171 ms
//

function html_3002936b70d02a85d3d71dc952115155($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<'.'?php header("X-Spip-Cache: 604800"); ?'.'>' .
'<'.'?php header("' . 'Content-Type: text/css; charset=utf-8' . '"); ?'.'>' .
'<'.'?php header("' . 'Vary: Accept-Encoding' . '"); ?'.'>' .
barre_outils_css_icones('') .
'

/* roue ajax */
.ajaxLoad{
		position:relative;
}
.ajaxLoad:after {
		content:"";
		display:block;
		width:40px;
		height:40px;
		border:1px solid #eee;
		background:#fff url(\'' .
protocole_implicite(url_absolue(find_in_path('images/searching.gif'))) .
'\') center no-repeat;
		position:absolute;
		left:50%;
		top:50%;
		margin-left:-20px;
		margin-top:-20px;
}
.fullscreen .ajaxLoad:after {
		position:fixed;
		left:75%;
}
');

	return analyse_resultat_skel('html_3002936b70d02a85d3d71dc952115155', $Cache, $page, 'plugins-dist/porte_plume/barre_outils_icones.css.html');
}
?>