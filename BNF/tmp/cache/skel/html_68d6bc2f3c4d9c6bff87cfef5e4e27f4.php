<?php

/*
 * Squelette : ../plugins-dist/mots/prive/objets/liste/mots_associer-select.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:27:53 GMT
 * Boucles :   _mots
 */ 

function BOUCLE_motshtml_68d6bc2f3c4d9c6bff87cfef5e4e27f4(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'exclus', null),true))))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	if (!isset($command['table'])) {
		$command['table'] = 'mots';
		$command['id'] = '_mots';
		$command['from'] = array('mots' => 'spip_mots');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['orderby'] = array('num', 'multi');
		$command['join'] = array();
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['select'] = array("0+mots.titre AS num",
		"".sql_multi('mots.titre', $GLOBALS['spip_lang'])."",
		"mots.id_mot",
		"mots.id_groupe",
		"mots.titre");
	$command['where'] = 
			array(
			array('=', 'mots.id_groupe', sql_quote(@$Pile[0]['id_groupe'], '', '')), sql_in('mots.id_mot',sql_quote($in),'NOT'));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../plugins-dist/mots/prive/objets/liste/mots_associer-select.html','html_68d6bc2f3c4d9c6bff87cfef5e4e27f4','_mots',2,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t0 .= (
'
		' .
vide($Pile['vars'][$_zzz=(string)'value'] = (	'mot-' .
	$Pile[$SP]['id_mot'] .
	'-' .
	interdire_scripts(@$Pile[0]['objet']) .
	'-' .
	@$Pile[0]['id_objet'])) .
'<option value="' .
table_valeur($Pile["vars"], (string)'value', null) .
'"' .
(($t1 = strval((((table_valeur($Pile["vars"], (string)'value', null) == interdire_scripts(table_valeur(entites_html(table_valeur(@$Pile[0], (string)'ajouter_lien', null),true),(	'groupe' .
		$Pile[$SP]['id_groupe']))))) ?' ' :'')))!=='' ?
		($t1 . (	'selected="selected"' .
	vide($Pile['vars'][$_zzz=(string)'selected'] = ' '))) :
		'') .
'>' .
interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
'</option>
	');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_mots @ ../plugins-dist/mots/prive/objets/liste/mots_associer-select.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../plugins-dist/mots/prive/objets/liste/mots_associer-select.html
// Temps de compilation total: 12.078 ms
//

function html_68d6bc2f3c4d9c6bff87cfef5e4e27f4($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
vide($Pile['vars'][$_zzz=(string)'selected'] = '') .
(($t1 = BOUCLE_motshtml_68d6bc2f3c4d9c6bff87cfef5e4e27f4($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		((	'
	<select name="ajouter_lien[groupe' .
		@$Pile[0]['id_groupe'] .
		']" id="ajouter_lien-groupe' .
		@$Pile[0]['id_groupe'] .
		'"
	  onchange="jQuery(this).siblings(\'input.submit\').css(\'visibility\',\'visible\');"
	>
	<option value="x">&nbsp;</option>
	') . $t1 . (	'
	</select>
	<input type="submit" class="submit" name="groupe' .
		@$Pile[0]['id_groupe'] .
		'" value="' .
		_T('public|spip|ecrire:bouton_ajouter') .
		'"' .
		(!(table_valeur($Pile["vars"], (string)'selected', null))  ?
				(' ' . 'style="visibility:hidden;"') :
				'') .
		'/>
')) :
		''));

	return analyse_resultat_skel('html_68d6bc2f3c4d9c6bff87cfef5e4e27f4', $Cache, $page, '../plugins-dist/mots/prive/objets/liste/mots_associer-select.html');
}
?>