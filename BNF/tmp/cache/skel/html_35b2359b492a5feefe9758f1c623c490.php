<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/navigation/groupe_mots_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/navigation/groupe_mots_edit.html
// Temps de compilation total: 0.102 ms
//

function html_35b2359b492a5feefe9758f1c623c490($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = '
';

	return analyse_resultat_skel('html_35b2359b492a5feefe9758f1c623c490', $Cache, $page, '../plugins-dist/mots/prive/squelettes/navigation/groupe_mots_edit.html');
}
?>