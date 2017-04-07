<?php

/*
 * Squelette : ../prive/squelettes/navigation/article_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 06 Jan 2017 13:35:59 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/navigation/article_edit.html
// Temps de compilation total: 0.086 ms
//

function html_dd0db58b6a04aeb208bca3e769d2c442($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = '';

	return analyse_resultat_skel('html_dd0db58b6a04aeb208bca3e769d2c442', $Cache, $page, '../prive/squelettes/navigation/article_edit.html');
}
?>