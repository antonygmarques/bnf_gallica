<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:40 GMT
 * Boucles :   _cpt_mot, _groupemots
 */ 

function BOUCLE_cpt_mothtml_aabc16824edf5e99582bd317ab5e8886(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'mots';
		$command['id'] = '_cpt_mot';
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
			array('=', 'mots.id_groupe', sql_quote($Pile[$SP]['id_groupe'], '', '')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html','html_aabc16824edf5e99582bd317ab5e8886','_cpt_mot',16,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$Numrows['_cpt_mot']['total'] = @intval($iter->count());
	$SP++;
	// RESULTATS
	
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_cpt_mot @ ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_groupemotshtml_aabc16824edf5e99582bd317ab5e8886(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($si_init)) { $command['si'] = array(); $si_init = true; }
	$command['si'][] = interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'exec', null),true) == 'groupe_mots'));

	if (!isset($command['table'])) {
		$command['table'] = 'groupes_mots';
		$command['id'] = '_groupemots';
		$command['from'] = array('groupes_mots' => 'spip_groupes_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("groupes_mots.id_groupe",
		"groupes_mots.titre",
		"groupes_mots.titre AS titre_rang");
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
		array('../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html','html_aabc16824edf5e99582bd317ab5e8886','_groupemots',2,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'
' .
boite_ouvrir((($t2 = strval(interdire_scripts(((($a = typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) OR (is_string($a) AND strlen($a))) ? $a : _T('public|spip|ecrire:info_sans_titre')))))!=='' ?
			((	'
	' .
		(($t3 = strval(invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('modifier', 'groupemots', invalideur_session($Cache, $Pile[$SP]['id_groupe']))?" ":""))))!=='' ?
				($t3 . (	'
	' .
			filtre_icone_verticale_dist(generer_url_ecrire('groupe_mots_edit',(	'id_groupe=' .
				$Pile[$SP]['id_groupe'])),_T('mots:icone_modif_groupe_mots'),'groupe_mots-24.png','edit','right ajax preload') .
			'
	')) :
				'') .
		'
	<h1>' .
		(($t3 = strval(recuperer_numero($Pile[$SP]['titre_rang'])))!=='' ?
				($t3 . '. ') :
				'')) . $t2 . (	interdire_scripts(filtre_balise_img_dist(chemin_image('groupe_mots-24.png'),'groupe_mots','cadre-icone')) .
		'</h1>
')) :
			''), 'simple fiche_objet') .
'

<div id="wysiwyg">
' .

'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/objets/contenu/groupe_mots') . ', array(\'id\' => ' . argumenter_squelette($Pile[$SP]['id_groupe']) . ',
	\'id_groupe\' => ' . argumenter_squelette($Pile[$SP]['id_groupe']) . ',
	\'wysiwyg\' => ' . argumenter_squelette('1') . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . '), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html\',\'html_aabc16824edf5e99582bd317ab5e8886\',\'\',6,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>
</div>

' .
boite_fermer() .
'

' .
BOUCLE_cpt_mothtml_aabc16824edf5e99582bd317ab5e8886($Cache, $Pile, $doublons, $Numrows, $SP)
. ((($Numrows['_cpt_mot']['total'] > '10'))  ?
			(' ' . (	'
<p class="tri">' .
		_T('public|spip|ecrire:info_afficher_par_nb') .
		' ' .
		lien_ou_expose(parametre_url(self(),'nb','10'),'10',interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'nb', null),true) == '10')),'ajax') .
		'
	' .
		(($t3 = strval(lien_ou_expose(parametre_url(self(),'nb','50'),'50',interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'nb', null),true) == '50')),'ajax')))!=='' ?
				(' | ' . $t3) :
				'') .
		'
	' .
		((($Numrows['_cpt_mot']['total'] > '50'))  ?
				(' | ' . ' ' . (	' ' .
			lien_ou_expose(parametre_url(self(),'nb','200'),'200',interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'nb', null),true) == '200')),'ajax'))) :
				'') .
		'
	' .
		((($Numrows['_cpt_mot']['total'] > '200'))  ?
				(' | ' . ' ' . (	' ' .
			lien_ou_expose(parametre_url(self(),'nb','1000'),'1000',interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'nb', null),true) == '1000')),'ajax'))) :
				'') .
		'
</p>
')) :
			'') .
'
' .

'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/objets/liste/mots-admin') . ', array_merge('.var_export($Pile[0],1).',array(\'id_groupe\' => ' . argumenter_squelette($Pile[$SP]['id_groupe']) . ',
	\'par\' => ' . argumenter_squelette('multi titre') . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html\',\'html_aabc16824edf5e99582bd317ab5e8886\',\'\',23,$GLOBALS[\'spip_lang\']),\'ajax\' => ($v=( ' . argumenter_squelette(@$Pile[0]['ajax']) . '))?$v:true), _request("connect"));
?'.'>
' .
(($t1 = strval(invalideur_session($Cache, ((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creer', 'mot', '', '', invalideur_session($Cache, array('id_groupe' => invalideur_session($Cache, $Pile[$SP]['id_groupe']))))?" ":""))))!=='' ?
		($t1 . (	'
	' .
	filtre_icone_verticale_dist(parametre_url(generer_url_ecrire('mot_edit',(	'new=oui&id_groupe=' .
		$Pile[$SP]['id_groupe'])),'redirect',self()),_T('mots:icone_creation_mots_cles'),'mot-24.png','new','right') .
	'
')) :
		'') .
'

' .
pipeline( 'afficher_complement_objet' , array('args' => array('type' => 'groupemots', 'id' => $Pile[$SP]['id_groupe']), 'data' => '<div class="nettoyeur"></div>') ) .
(($t1 = strval(interdire_scripts(((eval('return '.'_AJAX'.';')) ?' ' :''))))!=='' ?
		($t1 . (	'
	<script type="text/javascript">/*<![CDATA[*/reloadExecPage(\'' .
	interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'exec', null),true)) .
	'\',\'#navigation,#chemin\');/*]]>*/</script>
')) :
		'') .
'
');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_groupemots @ ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html
// Temps de compilation total: 14.341 ms
//

function html_aabc16824edf5e99582bd317ab5e8886($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
invalideur_session($Cache, sinon_interdire_acces(((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('voir', 'groupemots', invalideur_session($Cache, @$Pile[0]['id_groupe']))?" ":""))) .
'
' .
(($t1 = BOUCLE_groupemotshtml_aabc16824edf5e99582bd317ab5e8886($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		$t1 :
		((	'
' .
	((table_valeur(@$Pile[0], (string)'exec', null) == 'groupe_mots_edit') ? recuperer_fond( 'prive/squelettes/contenu/groupe_mots_edit' , array_merge($Pile[0],array('redirect' => '' ,
	'retourajax' => 'oui' )), array('compil'=>array('../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html','html_aabc16824edf5e99582bd317ab5e8886','',0,$GLOBALS['spip_lang'])), _request('connect')):sinon_interdire_acces('')) .
	'
'))) .
'
');

	return analyse_resultat_skel('html_aabc16824edf5e99582bd317ab5e8886', $Cache, $page, '../plugins-dist/mots/prive/squelettes/contenu/groupe_mots.html');
}
?>