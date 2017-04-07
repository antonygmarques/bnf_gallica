<?php

/*
 * Squelette : squelettes/inclure/tete.html
 * Date :      Fri, 07 Apr 2017 13:06:53 GMT
 * Compile :   Fri, 07 Apr 2017 14:01:38 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette squelettes/inclure/tete.html
// Temps de compilation total: 0.025 ms
//

function html_3edeb0c0009a954f6b6f26ac5b638b80($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = '';

	return analyse_resultat_skel('html_3edeb0c0009a954f6b6f26ac5b638b80', $Cache, $page, 'squelettes/inclure/tete.html');
}
?>