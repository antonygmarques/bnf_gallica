<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/contenu/mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:14 GMT
 * Boucles :   _groupes
 */ 

function BOUCLE_groupeshtml_6744d56a3b72e0cb568b0118e5b2dbfe(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_groupes';
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
		"groupes_mots.titre",
		"groupes_mots.titre AS titre_rang");
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/squelettes/contenu/mots.html','html_6744d56a3b72e0cb568b0118e5b2dbfe','_groupes',5,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('voir', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
	<div class="groupe_mots" id="groupe_mots-' .
	$Pile[$SP]['id_groupe'] .
	'">
		' .
	boite_ouvrir((($t3 = strval(interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0]))))!=='' ?
				((($t4 = strval(recuperer_numero($Pile[$SP]['titre_rang'])))!=='' ?
					($t4 . '. ') :
					'') . $t3 . interdire_scripts(filtre_balise_img_dist(chemin_image('groupe_mots-24.png'),'','cadre-icone'))) :
				''), 'simple', 'titrem') .
	'
			' .
	(($t2 = strval(invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('modifier', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":""))))!=='' ?
			($t2 . (	'
				' .
		filtre_icone_verticale_dist(generer_url_ecrire('groupe_mots_edit',(	'id_groupe=' .
			$Pile[$SP]['id_groupe'])),_T('mots:icone_modif_groupe_mots'),'groupe_mots-24.png','edit','right') .
		'
			')) :
			'') .
	'
			<div id="wysiwyg">
			' .
	pipeline( 'afficher_contenu_objet' , array('args' => array('type' => 'groupe_mots', 'id' => $Pile[$SP]['id_groupe'], 'id_objet' => $Pile[$SP]['id_groupe']), 'data' => recuperer_fond( 'prive/objets/contenu/groupe_mots' , array('id' => $Pile[$SP]['id_groupe'] ,
	'id_groupe' => $Pile[$SP]['id_groupe'] ), array('compil'=>array('../plugins-dist/mots/prive/squelettes/contenu/mots.html','html_6744d56a3b72e0cb568b0118e5b2dbfe','_groupes',0,$GLOBALS['spip_lang'])), _request('connect'))) ) .
	'
			</div>
			<div class="nettoyeur"></div>
			' .
	
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/objets/liste/mots-admin') . ', array_merge('.var_export($Pile[0],1).',array(\'id_groupe\' => ' . argumenter_squelette($Pile[$SP]['id_groupe']) . ',
	\'par\' => ' . argumenter_squelette('multi titre') . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/contenu/mots.html\',\'html_6744d56a3b72e0cb568b0118e5b2dbfe\',\'\',13,$GLOBALS[\'spip_lang\']),\'ajax\' => ($v=( ' . argumenter_squelette(@$Pile[0]['ajax']) . '))?$v:true), _request("connect"));
?'.'>
			' .
	(($t2 = strval(invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('voir', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":""))))!=='' ?
			($t2 . (	'
				' .
		filtre_icone_verticale_dist(generer_url_ecrire('groupe_mots',(	'id_groupe=' .
			$Pile[$SP]['id_groupe'])),_T('mots:icone_voir_groupe_mots'),'groupe_mots-24.png','','left') .
		'
			')) :
			'') .
	'
			' .
	(($t2 = strval(invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creer', 'mot', '', '', invalideur_session($Cache, array('id_groupe' => invalideur_session($Cache, $Pile[$SP]['id_groupe']))))?" ":""))))!=='' ?
			($t2 . (	'
				' .
		filtre_icone_verticale_dist(parametre_url(generer_url_ecrire('mot_edit',(	'new=oui&id_groupe=' .
			$Pile[$SP]['id_groupe'])),'redirect',self()),_T('mots:icone_creation_mots_cles'),'mot-24.png','new','right') .
		'
			')) :
			'') .
	'
		' .
	boite_fermer() .
	'
	</div>
')) :
		'');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_groupes @ ../plugins-dist/mots/prive/squelettes/contenu/mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/contenu/mots.html
// Temps de compilation total: 8.436 ms
//

function html_6744d56a3b72e0cb568b0118e5b2dbfe($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<h1 class="grostitre">' .
_T('mots:titre_mots_tous') .
'</h1>
' .
(($t1 = strval(invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creer', 'groupemots')?" ":"")) ?' ' :''))))!=='' ?
		($t1 . (	'
<p>' .
	typo(_T('mots:info_creation_mots_cles')) .
	' ' .
	interdire_scripts((($aider=charger_fonction('aider','inc'))?$aider('mots','../plugins-dist/mots/prive/squelettes/contenu/mots.html', $Pile[0]):'')) .
	'</p>
')) :
		'') .
'
' .
BOUCLE_groupeshtml_6744d56a3b72e0cb568b0118e5b2dbfe($Cache, $Pile, $doublons, $Numrows, $SP) .
'
');

	return analyse_resultat_skel('html_6744d56a3b72e0cb568b0118e5b2dbfe', $Cache, $page, '../plugins-dist/mots/prive/squelettes/contenu/mots.html');
}
?>