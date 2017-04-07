<?php

/*
 * Squelette : ../plugins-dist/mots/formulaires/inc-choisir-groupemots-tables-liees.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   _objets
 */ 

function BOUCLE_objetshtml_0ff359fd07fe4ce4636a3df831af3bc2(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$command['source'] = array(lister_tables_objets_sql(''));
	$command['sourcemode'] = 'table';
	if (!isset($command['table'])) {
		$command['table'] = '';
		$command['id'] = '_objets';
		$command['from'] = array();
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array(".valeur",
		".cle");
		$command['orderby'] = array();
		$command['where'] = 
			array(
			array('NOT', 
			array('=', 'cle', "'spip_mots'")), 
			array('NOT', 
			array('=', 'cle', "'spip_groupes_mots'")));
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"DATA",
		$command,
		array('../plugins-dist/mots/formulaires/inc-choisir-groupemots-tables-liees.html','html_0ff359fd07fe4ce4636a3df831af3bc2','_objets',1,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (($t1 = strval(interdire_scripts(((table_valeur($Pile[$SP]['valeur'], 'editable')) ?' ' :''))))!=='' ?
		($t1 . (	'
' .
	vide($Pile['vars'][$_zzz=(string)'id'] = interdire_scripts(concat(replace(entites_html(table_valeur(@$Pile[0], (string)'name', null),true),'\\W','_'),'_',interdire_scripts($Pile[$SP]['cle'])))) .
	'<div class="choix choix_' .
	interdire_scripts($Pile[$SP]['cle']) .
	'">
	<input type="checkbox"  id="' .
	table_valeur($Pile["vars"], (string)'id', null) .
	'" name="' .
	interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'name', null),true)) .
	'[]"
				 value="' .
	interdire_scripts(table_valeur($Pile[$SP]['valeur'], 'table_objet')) .
	'"' .
	(($t2 = strval(interdire_scripts(in_any(table_valeur($Pile[$SP]['valeur'], 'table_objet'),interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'selected', null),true))))))!=='' ?
			($t2 . 'checked="checked"') :
			'') .
	' />
	<label for="' .
	table_valeur($Pile["vars"], (string)'id', null) .
	'">' .
	interdire_scripts(_T(table_valeur($Pile[$SP]['valeur'], 'texte_objets'))) .
	'</label>
</div>
')) :
		'');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_objets @ ../plugins-dist/mots/formulaires/inc-choisir-groupemots-tables-liees.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/formulaires/inc-choisir-groupemots-tables-liees.html
// Temps de compilation total: 4.374 ms
//

function html_0ff359fd07fe4ce4636a3df831af3bc2($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
BOUCLE_objetshtml_0ff359fd07fe4ce4636a3df831af3bc2($Cache, $Pile, $doublons, $Numrows, $SP) .
'
<input type="hidden" name="' .
interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'name', null),true)) .
'[]" value="" />
<!--choix_tables-->');

	return analyse_resultat_skel('html_0ff359fd07fe4ce4636a3df831af3bc2', $Cache, $page, '../plugins-dist/mots/formulaires/inc-choisir-groupemots-tables-liees.html');
}
?>