<?php

/*
 * Squelette : ../prive/squelettes/contenu/article_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 06 Jan 2017 13:35:59 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/contenu/article_edit.html
// Temps de compilation total: 0.644 ms
//

function html_60b27944d55544d8bfeb2895a3b74fd1($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = 
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/echafaudage/contenu/objet_edit') . ', array_merge('.var_export($Pile[0],1).',array(\'objet\' => ' . argumenter_squelette('article') . ',
	\'id_objet\' => ' . argumenter_squelette(@$Pile[0]['id_article']) . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../prive/squelettes/contenu/article_edit.html\',\'html_60b27944d55544d8bfeb2895a3b74fd1\',\'\',1,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>';

	return analyse_resultat_skel('html_60b27944d55544d8bfeb2895a3b74fd1', $Cache, $page, '../prive/squelettes/contenu/article_edit.html');
}
?>