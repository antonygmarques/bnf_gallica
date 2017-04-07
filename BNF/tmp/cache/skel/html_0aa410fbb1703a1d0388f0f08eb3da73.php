<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:39 GMT
 * Boucles :   _nav
 */ 

function BOUCLE_navhtml_0aa410fbb1703a1d0388f0f08eb3da73(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($si_init)) { $command['si'] = array(); $si_init = true; }
	$command['si'][] = interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'exec', null),true) == 'groupe_mots'));

	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_nav';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("groupes_mots.id_groupe");
		$command['orderby'] = array();
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['where'] = 
			array(
			array('=', 'groupes_mots.id_groupe', sql_quote(@$Pile[0]['id_groupe'], '', '')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html','html_0aa410fbb1703a1d0388f0f08eb3da73','_nav',1,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'
' .
boite_ouvrir('', 'info') .
pipeline( 'boite_infos' , array('data' => '', 'args' => array('type' => 'groupe_mots', 'id' => interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'id_groupe', null),true)))) ) .
boite_fermer() .
'

<div class="ajax">
' .
executer_balise_dynamique('FORMULAIRE_EDITER_LOGO',
	array('groupe_mots',$Pile[$SP]['id_groupe'],'',@serialize($Pile[0])),
	array('../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html','html_0aa410fbb1703a1d0388f0f08eb3da73','_nav',5,$GLOBALS['spip_lang'])) .
'</div>
');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_nav @ ../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html
// Temps de compilation total: 4.868 ms
//

function html_0aa410fbb1703a1d0388f0f08eb3da73($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
(($t1 = BOUCLE_navhtml_0aa410fbb1703a1d0388f0f08eb3da73($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		$t1 :
		((	'
' .
	(($t2 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'exec', null),true) == 'groupe_mots_edit')) ?' ' :''))))!=='' ?
			($t2 . 
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/squelettes/navigation/groupe_mots_edit') . ', array_merge('.var_export($Pile[0],1).',array(\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html\',\'html_0aa410fbb1703a1d0388f0f08eb3da73\',\'\',10,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>') :
			'') .
	'
'))) .
'
');

	return analyse_resultat_skel('html_0aa410fbb1703a1d0388f0f08eb3da73', $Cache, $page, '../plugins-dist/mots/prive/squelettes/navigation/groupe_mots.html');
}
?>