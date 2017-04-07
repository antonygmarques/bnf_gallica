<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/hierarchie/mot_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:42 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/hierarchie/mot_edit.html
// Temps de compilation total: 0.309 ms
//

function html_a394c10614066da1ec640805be2d2ff2($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = 
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/squelettes/hierarchie/mot') . ', array_merge('.var_export($Pile[0],1).',array(\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/hierarchie/mot_edit.html\',\'html_a394c10614066da1ec640805be2d2ff2\',\'\',1,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>';

	return analyse_resultat_skel('html_a394c10614066da1ec640805be2d2ff2', $Cache, $page, '../plugins-dist/mots/prive/squelettes/hierarchie/mot_edit.html');
}
?>