<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/navigation/mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:14 GMT
 * Boucles :   _nav
 */ 

function BOUCLE_navhtml_dca12fd7c6b1729f528156ef0d15887d(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_nav';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['orderby'] = array('num', 'multi');
		$command['where'] = 
			array();
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['select'] = array("0+groupes_mots.titre AS num",
		"".sql_multi('groupes_mots.titre', $GLOBALS['spip_lang'])."",
		"groupes_mots.id_groupe",
		"groupes_mots.titre AS titre_rang",
		"groupes_mots.titre");
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/squelettes/navigation/mots.html','html_dca12fd7c6b1729f528156ef0d15887d','_nav',2,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('voir', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
		<li class="item"><a href=\'#groupe_mots-' .
	$Pile[$SP]['id_groupe'] .
	'\'
					 onclick=\'$(".groupe_mots").hide().filter("#groupe_mots-' .
	$Pile[$SP]['id_groupe'] .
	'").show();$(this).parent().addClass("on").siblings().removeClass("on").parent().siblings("a.tous").show();return false;\'
				>' .
	(($t2 = strval(recuperer_numero($Pile[$SP]['titre_rang'])))!=='' ?
			($t2 . '. ') :
			'') .
	interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
	'</a></li>
		')) :
		'');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_nav @ ../plugins-dist/mots/prive/squelettes/navigation/mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/navigation/mots.html
// Temps de compilation total: 9.829 ms
//

function html_dca12fd7c6b1729f528156ef0d15887d($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
boite_ouvrir(_T('mots:titre_page_mots_tous'), 'info') .
'
' .
(($t1 = BOUCLE_navhtml_dca12fd7c6b1729f528156ef0d15887d($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		((	'
	<div class="liste">
		<h4>' .
		_T('mots:titre_groupes_mots') .
		'</h4>
		<ul class=\'liste-items\'>
		') . $t1 . (	'
		</ul>
		<a class=\'tous none\' href=\'#\' onclick=\'$(".groupe_mots").show();$(this).siblings("ul").find(">li").removeClass("on");$(this).hide();return false;\'>' .
		_T('mots:icone_voir_tous_mots_cles') .
		'</a>
	</div>
')) :
		'') .
'
' .
boite_fermer() .
'
' .
(($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creer', 'groupemots')?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
' .
	boite_ouvrir('', 'raccourcis') .
	filtre_icone_horizontale_dist(generer_url_ecrire('groupe_mots_edit','new=oui'),_T('mots:icone_creation_groupe_mots'),'groupe_mots','new') .
	'
' .
	boite_fermer() .
	'
')) :
		'') .
'
');

	return analyse_resultat_skel('html_dca12fd7c6b1729f528156ef0d15887d', $Cache, $page, '../plugins-dist/mots/prive/squelettes/navigation/mots.html');
}
?>