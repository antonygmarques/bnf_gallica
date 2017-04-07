<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots_edit.html
// Temps de compilation total: 0.566 ms
//

function html_98f3f564049303c4de70dcce42f0585f($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = 
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/squelettes/hierarchie/groupe_mots') . ', array_merge('.var_export($Pile[0],1).',array(\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots_edit.html\',\'html_98f3f564049303c4de70dcce42f0585f\',\'\',1,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>';

	return analyse_resultat_skel('html_98f3f564049303c4de70dcce42f0585f', $Cache, $page, '../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots_edit.html');
}
?>