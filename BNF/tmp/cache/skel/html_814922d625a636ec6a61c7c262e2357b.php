<?php

/*
 * Squelette : ../plugins-dist/svp/modeles/svp_presenter_actions.html
 * Date :      Fri, 30 Sep 2016 21:38:58 GMT
 * Compile :   Fri, 31 Mar 2017 11:59:15 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/svp/modeles/svp_presenter_actions.html
// Temps de compilation total: 0.290 ms
//

function html_814922d625a636ec6a61c7c262e2357b($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'&bull;&nbsp;' .
interdire_scripts(table_valeur(@$Pile[0], (string)'valeur', null)) .
'<br />
');

	return analyse_resultat_skel('html_814922d625a636ec6a61c7c262e2357b', $Cache, $page, '../plugins-dist/svp/modeles/svp_presenter_actions.html');
}
?>