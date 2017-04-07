<?php

/*
 * Squelette : ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots_edit.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/prive/squelettes/contenu/groupe_mots_edit.html
// Temps de compilation total: 12.291 ms
//

function html_376230e069dd6e8803f1a14cd2c54bed($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
((@$Pile[0]['id_groupe'])  ?
		(' ' . (	'
	' .
	invalideur_session($Cache, sinon_interdire_acces(((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('modifier', 'groupemots', invalideur_session($Cache, @$Pile[0]['id_groupe']))?" ":""))))) :
		'') .
'
' .
(!(@$Pile[0]['id_groupe'])  ?
		(' ' . (	'
	' .
	invalideur_session($Cache, sinon_interdire_acces(((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('creer', 'groupemots', invalideur_session($Cache, @$Pile[0]['id_groupe']))?" ":""))))) :
		'') .
'

' .
vide($Pile['vars'][$_zzz=(string)'redirect'] = interdire_scripts(((($a = entites_html(table_valeur(@$Pile[0], (string)'redirect', null),true)) OR (is_string($a) AND strlen($a))) ? $a : interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'id_groupe', null),true) ? generer_url_ecrire('groupe_mots',(	'id_groupe=' .
				@$Pile[0]['id_groupe'])):generer_url_ecrire('mots')))))) .
'<div class=\'cadre-formulaire-editer\'>
<div class="entete-formulaire">
	' .
filtre_icone_verticale_dist(table_valeur($Pile["vars"], (string)'redirect', null),_T('public|spip|ecrire:icone_retour'),'groupe_mots-24.png','',(	'left retour' .
	(($t2 = strval(interdire_scripts(((entites_html(sinon(table_valeur(@$Pile[0], (string)'retourajax', null), ''),true)) ?' ' :''))))!=='' ?
			($t2 . 'ajax preload') :
			''))) .
'
	' .
(($t1 = strval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'titre', null), interdire_scripts(((($a = generer_info_entite(@$Pile[0]['id_groupe'], 'groupe_mots', 'titre')) OR (is_string($a) AND strlen($a))) ? $a : _T('mots:titre_nouveau_groupe')))),true))))!=='' ?
		((	_T('public|spip|ecrire:titre_groupe_mots') .
	'
	<h1>') . $t1 . '</h1>') :
		'') .
'
</div>
' .
vide($Pile['vars'][$_zzz=(string)'redirect'] = interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'redirect', null), generer_url_entite(@$Pile[0]['id_groupe'],'groupe_mots')),true))) .
(($t1 = strval(interdire_scripts(((entites_html(sinon(table_valeur(@$Pile[0], (string)'retourajax', null), ''),true)) ?' ' :''))))!=='' ?
		($t1 . (	'
	' .
	vide($Pile['vars'][$_zzz=(string)'redirect'] = 'javascript:if (window.jQuery) jQuery(".entete-formulaire .retour a").followLink();') .
	'<div class="ajax">
')) :
		'') .
'
		' .
executer_balise_dynamique('FORMULAIRE_EDITER_GROUPE_MOT',
	array(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'id_groupe', null), 'oui'),true)),table_valeur($Pile["vars"], (string)'redirect', null)),
	array('../plugins-dist/mots/prive/squelettes/contenu/groupe_mots_edit.html','html_376230e069dd6e8803f1a14cd2c54bed','',12,$GLOBALS['spip_lang'])) .
(($t1 = strval(interdire_scripts(((entites_html(sinon(table_valeur(@$Pile[0], (string)'retourajax', null), ''),true)) ?' ' :''))))!=='' ?
		($t1 . (	'
	</div>
	<script type="text/javascript">/*<![CDATA[*/if (window.jQuery) jQuery(\'#navigation>div,#extra>div\').ajaxReload({args:{exec:\'' .
	interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'exec', null),true)) .
	'\'}});/*]]>*/</script>
')) :
		'') .
'

</div>');

	return analyse_resultat_skel('html_376230e069dd6e8803f1a14cd2c54bed', $Cache, $page, '../plugins-dist/mots/prive/squelettes/contenu/groupe_mots_edit.html');
}
?>