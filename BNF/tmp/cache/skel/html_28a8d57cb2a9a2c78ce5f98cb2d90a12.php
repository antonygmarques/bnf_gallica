<?php

/*
 * Squelette : ../prive/squelettes/navigation/infos_perso.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 13 Jan 2017 12:25:37 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/navigation/infos_perso.html
// Temps de compilation total: 0.805 ms
//

function html_28a8d57cb2a9a2c78ce5f98cb2d90a12($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = 
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/squelettes/navigation/auteur') . ', array_merge('.var_export($Pile[0],1).',array(\'id_auteur\' => ' . argumenter_squelette(interdire_scripts(invalideur_session($Cache, table_valeur($GLOBALS["visiteur_session"], (string)'id_auteur', null)))) . ',
	\'exec\' => ' . argumenter_squelette(interdire_scripts(replace(entites_html(table_valeur(@$Pile[0], (string)'exec', null),true),'infos_perso','auteur'))) . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../prive/squelettes/navigation/infos_perso.html\',\'html_28a8d57cb2a9a2c78ce5f98cb2d90a12\',\'\',1,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>';

	return analyse_resultat_skel('html_28a8d57cb2a9a2c78ce5f98cb2d90a12', $Cache, $page, '../prive/squelettes/navigation/infos_perso.html');
}
?>