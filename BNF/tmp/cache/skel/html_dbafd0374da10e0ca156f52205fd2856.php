<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   _hierarchie
 */ 

function BOUCLE_hierarchiehtml_dbafd0374da10e0ca156f52205fd2856(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_hierarchie';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("groupes_mots.titre");
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
		array('../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots.html','html_dbafd0374da10e0ca156f52205fd2856','_hierarchie',3,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'
&gt; <strong class="on">' .
interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
'</strong>
');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_hierarchie @ ../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots.html
// Temps de compilation total: 4.120 ms
//

function html_dbafd0374da10e0ca156f52205fd2856($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<!-- hierarchie -->
<a href="' .
generer_url_ecrire('mots') .
'">' .
_T('mots:icone_mots_cles') .
'</a>
' .
(($t1 = BOUCLE_hierarchiehtml_dbafd0374da10e0ca156f52205fd2856($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		$t1 :
		((	'
&gt; <strong class="on">' .
	_T('mots:titre_nouveau_groupe') .
	'</strong>
'))) .
'
');

	return analyse_resultat_skel('html_dbafd0374da10e0ca156f52205fd2856', $Cache, $page, '../plugins-dist/mots/prive/squelettes/hierarchie/groupe_mots.html');
}
?>