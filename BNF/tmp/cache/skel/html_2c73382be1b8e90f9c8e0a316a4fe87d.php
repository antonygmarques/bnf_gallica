<?php

/*
 * Squelette : ../plugins-dist/mots/prive/objets/infos/groupe_mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:39 GMT
 * Boucles :   _info
 */ 

function BOUCLE_infohtml_2c73382be1b8e90f9c8e0a316a4fe87d(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_info';
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
			array('=', 'groupes_mots.id_groupe', sql_quote(interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'id', null),true)), '', 'char')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/objets/infos/groupe_mots.html','html_2c73382be1b8e90f9c8e0a316a4fe87d','_info',1,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	
	$l1 = _T('mots:titre_groupe_mots_numero');
	$l2 = _T('mots:icone_supprimer_groupe_mots');$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'
<div class=\'infos\'>
<div class=\'numero\'>' .
$l1 .
'<p>' .
$Pile[$SP]['id_groupe'] .
'</p></div>

' .
(($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('supprimer', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
' .
	invalideur_session($Cache, filtre_icone_horizontale_dist(generer_action_auteur('supprimer_groupe_mots',invalideur_session($Cache, $Pile[$SP]['id_groupe']),invalideur_session($Cache, generer_url_ecrire('mots'))),$l2,'groupe_mots','del')) .
	'
')) :
		'') .
'

</div>
');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_info @ ../plugins-dist/mots/prive/objets/infos/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/objets/infos/groupe_mots.html
// Temps de compilation total: 3.185 ms
//

function html_2c73382be1b8e90f9c8e0a316a4fe87d($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = BOUCLE_infohtml_2c73382be1b8e90f9c8e0a316a4fe87d($Cache, $Pile, $doublons, $Numrows, $SP);

	return analyse_resultat_skel('html_2c73382be1b8e90f9c8e0a316a4fe87d', $Cache, $page, '../plugins-dist/mots/prive/objets/infos/groupe_mots.html');
}
?>