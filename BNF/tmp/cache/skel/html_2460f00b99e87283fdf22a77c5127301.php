<?php

/*
 * Squelette : ../prive/squelettes/contenu/configurer_contenu.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 06 Jan 2017 16:25:32 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/contenu/configurer_contenu.html
// Temps de compilation total: 14.697 ms
//

function html_2460f00b99e87283fdf22a77c5127301($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
invalideur_session($Cache, sinon_interdire_acces(((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('configurer', '_contenu')?" ":""))) .
'
<h1 class="grostitre">' .
_T('public|spip|ecrire:onglet_contenu_site') .
'</h1>
<div class="ajax">
	' .
executer_balise_dynamique('FORMULAIRE_CONFIGURER_ARTICLES',
	array(),
	array('../prive/squelettes/contenu/configurer_contenu.html','html_2460f00b99e87283fdf22a77c5127301','',4,$GLOBALS['spip_lang'])) .
'
</div>

<div class="ajax">
	' .
executer_balise_dynamique('FORMULAIRE_CONFIGURER_RUBRIQUES',
	array(),
	array('../prive/squelettes/contenu/configurer_contenu.html','html_2460f00b99e87283fdf22a77c5127301','',8,$GLOBALS['spip_lang'])) .
'
</div>

<div class="ajax">
	' .
executer_balise_dynamique('FORMULAIRE_CONFIGURER_LOGOS',
	array(),
	array('../prive/squelettes/contenu/configurer_contenu.html','html_2460f00b99e87283fdf22a77c5127301','',12,$GLOBALS['spip_lang'])) .
'
</div>

<div class="ajax">
	' .
executer_balise_dynamique('FORMULAIRE_CONFIGURER_FLUX',
	array(),
	array('../prive/squelettes/contenu/configurer_contenu.html','html_2460f00b99e87283fdf22a77c5127301','',16,$GLOBALS['spip_lang'])) .
'
</div>
');

	return analyse_resultat_skel('html_2460f00b99e87283fdf22a77c5127301', $Cache, $page, '../prive/squelettes/contenu/configurer_contenu.html');
}
?>