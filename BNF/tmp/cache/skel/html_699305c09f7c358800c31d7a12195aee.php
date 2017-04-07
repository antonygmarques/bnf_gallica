<?php

/*
 * Squelette : ../prive/squelettes/hierarchie/infos_perso.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 13 Jan 2017 12:25:37 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/hierarchie/infos_perso.html
// Temps de compilation total: 0.061 ms
//

function html_699305c09f7c358800c31d7a12195aee($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = '';

	return analyse_resultat_skel('html_699305c09f7c358800c31d7a12195aee', $Cache, $page, '../prive/squelettes/hierarchie/infos_perso.html');
}
?>