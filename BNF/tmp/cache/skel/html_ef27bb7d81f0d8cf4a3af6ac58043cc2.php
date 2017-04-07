<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/navigation/mot_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:42 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/navigation/mot_edit.html
// Temps de compilation total: 0.153 ms
//

function html_ef27bb7d81f0d8cf4a3af6ac58043cc2($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = '
';

	return analyse_resultat_skel('html_ef27bb7d81f0d8cf4a3af6ac58043cc2', $Cache, $page, '../plugins-dist/mots/prive/squelettes/navigation/mot_edit.html');
}
?>