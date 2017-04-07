<?php

/*
 * Squelette : ../plugins-dist/mots/prive/objets/liste/mots_associer.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:27:53 GMT
 * Boucles :   _exclus, _compte, _groupes
 */ 

function BOUCLE_exclushtml_844d21f7fde39ccf5d586e15fa6c9518(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (table_valeur($Pile["vars"], (string)'exclus', null)))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	if (!isset($command['table'])) {
		$command['table'] = 'mots';
		$command['id'] = '_exclus';
		$command['from'] = array('mots' => 'spip_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("mots.id_groupe");
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['orderby'] = array(((!sql_quote($in) OR sql_quote($in)==="''") ? 0 : ('FIELD(mots.id_mot,' . sql_quote($in) . ')')));
	$command['where'] = 
			array(sql_in('mots.id_mot',sql_quote($in)));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_exclus',4,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= ((unique($Pile[$SP]['id_groupe']))  ?
		(' ' . vide($Pile['vars'][$_zzz=(string)'groupes_vus'] = concat(table_valeur($Pile["vars"], (string)'groupes_vus', null),',',$Pile[$SP]['id_groupe']))) :
		'');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_exclus @ ../plugins-dist/mots/prive/objets/liste/mots_associer.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_comptehtml_844d21f7fde39ccf5d586e15fa6c9518(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (table_valeur($Pile["vars"], (string)'exclus', null)))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	if (!isset($command['table'])) {
		$command['table'] = 'mots';
		$command['id'] = '_compte';
		$command['from'] = array('mots' => 'spip_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("count(*)");
		$command['orderby'] = array();
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['where'] = 
			array(
			array('=', 'mots.id_groupe', sql_quote($Pile[$SP]['id_groupe'], '', '')), sql_in('mots.id_mot',sql_quote($in),'NOT'));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_compte',8,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$Numrows['_compte']['total'] = @intval($iter->count());
	$SP++;
	// RESULTATS
	
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_compte @ ../plugins-dist/mots/prive/objets/liste/mots_associer.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_groupeshtml_844d21f7fde39ccf5d586e15fa6c9518(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_groupes';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("groupes_mots.id_groupe",
		"groupes_mots.titre",
		"groupes_mots.comite",
		"groupes_mots.minirezo",
		"groupes_mots.unseul",
		"groupes_mots.obligatoire");
		$command['orderby'] = array('groupes_mots.titre');
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['where'] = 
			array(
			array('REGEXP', 'groupes_mots.tables_liees', sql_quote(interdire_scripts(table_objet(entites_html(table_valeur(@$Pile[0], (string)'objet', null),true))), '', 'char')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_groupes',6,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
BOUCLE_comptehtml_844d21f7fde39ccf5d586e15fa6c9518($Cache, $Pile, $doublons, $Numrows, $SP)
. vide($Pile['vars'][$_zzz=(string)'total'] = $Numrows['_compte']['total']) .
((((table_valeur($Pile["vars"], (string)'total', null) != '0')) AND (invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('afficherselecteurmots', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']), '', invalideur_session($Cache, array('objet' => interdire_scripts(invalideur_session($Cache, entites_html(table_valeur(@$Pile[0], (string)'objet', null),true))), 'id_objet' => interdire_scripts(invalideur_session($Cache, entites_html(table_valeur(@$Pile[0], (string)'id_objet', null),true))), 'comite' => interdire_scripts(invalideur_session($Cache, $Pile[$SP]['comite'])), 'minirezo' => interdire_scripts(invalideur_session($Cache, $Pile[$SP]['minirezo'])))))?" ":""))))  ?
		('
	' . ' ' . (	'
	<li class="editer associer_mot groupe_mots' .
	(($t2 = strval(interdire_scripts(((($Pile[$SP]['unseul'] == 'oui')) ?' ' :''))))!=='' ?
			($t2 . 'unseul') :
			'') .
	(($t2 = strval(interdire_scripts(((($Pile[$SP]['obligatoire'] == 'oui')) ?' ' :''))))!=='' ?
			($t2 . 'obligatoire') :
			'') .
	(($t2 = strval((in_any($Pile[$SP]['id_groupe'],filtre_explode_dist(table_valeur($Pile["vars"], (string)'groupes_vus', null),',')) ? 'vu':'nonvu')))!=='' ?
			(' ' . $t2) :
			'') .
	'">
		<label for="ajouter_lien-groupe' .
	$Pile[$SP]['id_groupe'] .
	'">' .
	interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
	'</label>

		' .
	(((table_valeur($Pile["vars"], (string)'total', null) < table_valeur($Pile["vars"], (string)'_MAX_MOTS_LISTE', null)))  ?
			(' ' . (	'
			' .
		(($t3 = strval(interdire_scripts(((($Pile[$SP]['unseul'] == 'oui')) ?' ' :''))))!=='' ?
				($t3 . (	'
				' .
			recuperer_fond( 'prive/objets/liste/mots_associer-select-unseul' , array_merge($Pile[0],array('exclus' => table_valeur($Pile["vars"], (string)'exclus', null) ,
	'id_groupe' => $Pile[$SP]['id_groupe'] )), array('compil'=>array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_groupes',15,$GLOBALS['spip_lang'])), _request('connect')) .
			'
			')) :
				'') .
		'
			' .
		(($t3 = strval(interdire_scripts(((($Pile[$SP]['unseul'] == 'oui')) ?'' :' '))))!=='' ?
				($t3 . (	'
				' .
			recuperer_fond( 'prive/objets/liste/mots_associer-select' , array_merge($Pile[0],array('exclus' => table_valeur($Pile["vars"], (string)'exclus', null) ,
	'id_groupe' => $Pile[$SP]['id_groupe'] )), array('compil'=>array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_groupes',13,$GLOBALS['spip_lang'])), _request('connect')) .
			'
			')) :
				'') .
		'
		')) :
			'') .
	'
		' .
	(!((table_valeur($Pile["vars"], (string)'total', null) < table_valeur($Pile["vars"], (string)'_MAX_MOTS_LISTE', null)))  ?
			(' ' . (	'
			' .
		recuperer_fond( 'prive/objets/liste/mots_associer-recherche' , array_merge($Pile[0],array('exclus' => table_valeur($Pile["vars"], (string)'exclus', null) ,
	'id_groupe' => $Pile[$SP]['id_groupe'] ,
	'unseul' => interdire_scripts($Pile[$SP]['unseul']) )), array('compil'=>array('../plugins-dist/mots/prive/objets/liste/mots_associer.html','html_844d21f7fde39ccf5d586e15fa6c9518','_groupes',14,$GLOBALS['spip_lang'])), _request('connect')) .
		'
		')) :
			'') .
	'
	</li>
	')) :
		''));
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_groupes @ ../plugins-dist/mots/prive/objets/liste/mots_associer.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/objets/liste/mots_associer.html
// Temps de compilation total: 41.489 ms
//

function html_844d21f7fde39ccf5d586e15fa6c9518($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
vide($Pile['vars'][$_zzz=(string)'groupes_vus'] = '0') .
vide($Pile['vars'][$_zzz=(string)'_MAX_MOTS_LISTE'] = (defined('_MAX_MOTS_LISTE') ? constant('_MAX_MOTS_LISTE'):'50')) .
'
' .
vide($Pile['vars'][$_zzz=(string)'exclus'] = interdire_scripts(lister_objets_lies(entites_html(table_valeur(@$Pile[0], (string)'objet_source', null),true),interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'objet', null),true)),interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'id_objet', null),true)),interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'_objet_lien', null),true))))) .
BOUCLE_exclushtml_844d21f7fde39ccf5d586e15fa6c9518($Cache, $Pile, $doublons, $Numrows, $SP) .
'

' .
(($t1 = BOUCLE_groupeshtml_844d21f7fde39ccf5d586e15fa6c9518($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		('
	<ul>
	' . $t1 . '
	</ul>
') :
		'') .
'
');

	return analyse_resultat_skel('html_844d21f7fde39ccf5d586e15fa6c9518', $Cache, $page, '../plugins-dist/mots/prive/objets/liste/mots_associer.html');
}
?>