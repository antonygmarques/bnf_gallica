<?php

/*
 * Squelette : ../plugins-dist/mots/prive/objets/contenu/groupe_mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:40 GMT
 * Boucles :   _tables, _afficher_contenu
 */ 

function BOUCLE_tableshtml_b714e8147b12325672c08e33b1d69070(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$command['source'] = array(interdire_scripts(filtre_explode_dist($Pile[$SP]['tables_liees'],',')));
	$command['sourcemode'] = 'table';
	if (!isset($command['table'])) {
		$command['table'] = '';
		$command['id'] = '_tables';
		$command['from'] = array();
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array(".valeur");
		$command['orderby'] = array();
		$command['where'] = 
			array();
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
		array('../plugins-dist/mots/prive/objets/contenu/groupe_mots.html','html_b714e8147b12325672c08e33b1d69070','_tables',4,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t1 = (($t1 = strval(interdire_scripts(_T(objet_info($Pile[$SP]['valeur'],'texte_objets')))))!=='' ?
		('
<span class="table">' . $t1 . '</span>') :
		'');
		$t0 .= ((strlen($t1) && strlen($t0)) ? ', ' : '') . $t1;
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_tables @ ../plugins-dist/mots/prive/objets/contenu/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_afficher_contenuhtml_b714e8147b12325672c08e33b1d69070(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_afficher_contenu';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("groupes_mots.tables_liees",
		"groupes_mots.unseul",
		"groupes_mots.obligatoire",
		"groupes_mots.minirezo",
		"groupes_mots.comite",
		"groupes_mots.titre",
		"groupes_mots.descriptif",
		"groupes_mots.texte");
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
		array('../plugins-dist/mots/prive/objets/contenu/groupe_mots.html','html_b714e8147b12325672c08e33b1d69070','_afficher_contenu',1,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	
	$l1 = _T('mots:info_un_mot');
	$l2 = _T('mots:info_un_mot');
	$l3 = _T('mots:info_groupe_important');
	$l4 = _T('mots:info_groupe_important');
	$l5 = _T('public|spip|ecrire:info_administrateurs');
	$l6 = _T('public|spip|ecrire:info_administrateurs');
	$l7 = _T('public|spip|ecrire:info_redacteurs');
	$l8 = _T('public|spip|ecrire:info_redacteurs');
	$l9 = _T('public|spip|ecrire:info_visiteurs_02');
	$l10 = _T('public|spip|ecrire:info_visiteurs_02');
	$l11 = _T('public|spip|ecrire:info_titre');
	$l12 = _T('public|spip|ecrire:info_descriptif');
	$l13 = _T('public|spip|ecrire:info_texte');
	$l14 = _T('public|spip|ecrire:info_notes');$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'

<div class="groupe_mots-quoi">
' .
BOUCLE_tableshtml_b714e8147b12325672c08e33b1d69070($Cache, $Pile, $doublons, $Numrows, $SP) .
'
</div>

<div class="groupe_mots-comment">
<div class="champ contenu_unseul' .
(($t1 = strval(interdire_scripts((((($Pile[$SP]['unseul'] == 'oui')) ?'' :' ') ? 'vide':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l1 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'unseul\'>' .
(($t1 = strval(interdire_scripts(((($Pile[$SP]['unseul'] == 'oui')) ?' ' :''))))!=='' ?
		($t1 . $l1) :
		'') .
'</div>
</div>
<div class="champ contenu_obligatoire' .
(($t1 = strval(interdire_scripts((((($Pile[$SP]['obligatoire'] == 'oui')) ?'' :' ') ? 'vide':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l3 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'obligatoire\'>' .
(($t1 = strval(interdire_scripts(((($Pile[$SP]['obligatoire'] == 'oui')) ?' ' :''))))!=='' ?
		($t1 . $l3) :
		'') .
'</div>
</div>
</div>

<div class="groupe_mots-qui">
<div class="champ contenu_minirezo' .
(($t1 = strval(interdire_scripts((((($Pile[$SP]['minirezo'] == 'oui')) ?'' :' ') ? 'vide':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l5 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'minirezo\'>' .
(($t1 = strval(interdire_scripts(((($Pile[$SP]['minirezo'] == 'oui')) ?' ' :''))))!=='' ?
		($t1 . $l5) :
		'') .
'</div>
</div>
<div class="champ contenu_comite' .
(($t1 = strval(interdire_scripts((((($Pile[$SP]['comite'] == 'oui')) ?'' :' ') ? 'vide':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l7 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'comite\'>' .
(($t1 = strval(interdire_scripts(((($Pile[$SP]['comite'] == 'oui')) ?' ' :''))))!=='' ?
		($t1 . $l7) :
		'') .
'</div>
</div>
<div class="champ contenu_visiteur' .
(($t1 = strval(interdire_scripts(((((@$Pile[0]['visiteur'] == 'oui')) ?'' :' ') ? 'vide':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l9 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'visiteur\'>' .
(($t1 = strval(interdire_scripts((((@$Pile[0]['visiteur'] == 'oui')) ?' ' :''))))!=='' ?
		($t1 . $l9) :
		'') .
'</div>
</div>
</div>


<div class="champ contenu_titre' .
(($t1 = strval(interdire_scripts((strlen($Pile[$SP]['titre']) ? '':'vide'))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l11 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'' .
'titre\'>' .
interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
'</div>
</div>
<div class="champ contenu_descriptif' .
(($t1 = strval(interdire_scripts((strlen($Pile[$SP]['descriptif']) ? '':'vide'))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l12 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'' .
'descriptif\'>' .
interdire_scripts(filtrer('image_graver',filtrer('image_reduire',propre($Pile[$SP]['descriptif'], $connect, $Pile[0]),'500','0'))) .
'</div>
</div>
<div class="champ contenu_texte' .
(($t1 = strval(interdire_scripts((strlen($Pile[$SP]['texte']) ? '':'vide'))))!=='' ?
		(' ' . $t1) :
		'') .
'">
<div class=\'label\'>' .
$l13 .
'</div>
<div dir=\'' .
lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
'\' class=\'' .
'texte\'>' .
interdire_scripts(filtrer('image_graver',filtrer('image_reduire',propre($Pile[$SP]['texte'], $connect, $Pile[0]),'500','0'))) .
'</div>
</div>
' .
(($t1 = strval(interdire_scripts(calculer_notes())))!=='' ?
		((	'<div class="champ contenu_notes">
<div class=\'label\'>' .
	$l14 .
	'</div>
<div dir=\'' .
	lang_dir(@$Pile[0]['lang'], 'ltr','rtl') .
	'\' class=\'' .
	'notes\'>') . $t1 . '</div>
</div>') :
		'') .
'
');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_afficher_contenu @ ../plugins-dist/mots/prive/objets/contenu/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/objets/contenu/groupe_mots.html
// Temps de compilation total: 15.136 ms
//

function html_b714e8147b12325672c08e33b1d69070($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
BOUCLE_afficher_contenuhtml_b714e8147b12325672c08e33b1d69070($Cache, $Pile, $doublons, $Numrows, $SP) .
'
');

	return analyse_resultat_skel('html_b714e8147b12325672c08e33b1d69070', $Cache, $page, '../plugins-dist/mots/prive/objets/contenu/groupe_mots.html');
}
?>