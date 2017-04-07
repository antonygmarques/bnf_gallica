<?php

/*
 * Squelette : ../prive/squelettes/top/infos_perso.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 13 Jan 2017 12:25:37 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/top/infos_perso.html
// Temps de compilation total: 0.410 ms
//

function html_b95c8fb24672bffe1f546d3a20813669($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = barre_onglets('infos_perso','infos_perso');

	return analyse_resultat_skel('html_b95c8fb24672bffe1f546d3a20813669', $Cache, $page, '../prive/squelettes/top/infos_perso.html');
}
?>