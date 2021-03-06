<?php

/*
 * Squelette : ../prive/objets/liste/articles.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 06 Jan 2017 13:25:00 GMT
 * Boucles :   _auteurs, _liste_art
 */ 

function BOUCLE_auteurshtml_2bf5e9bdbee88407a4818840e625dd9d(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	if (!isset($command['table'])) {
		$command['table'] = 'auteurs';
		$command['id'] = '_auteurs';
		$command['from'] = array('auteurs' => 'spip_auteurs','L1' => 'spip_auteurs_liens');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['select'] = array("auteurs.id_auteur",
		"auteurs.nom");
		$command['orderby'] = array();
		$command['join'] = array('L1' => array('auteurs','id_auteur'));
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['where'] = 
			array(
quete_condition_statut('auteurs.statut','!5poubelle','!5poubelle',''), 
			array('=', 'L1.id_objet', sql_quote($Pile[$SP]['id_article'], '', '')), 
			array('=', 'L1.objet', sql_quote('article')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../prive/objets/liste/articles.html','html_2bf5e9bdbee88407a4818840e625dd9d','_auteurs',31,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$t1 = (
'<a href="' .
generer_url_entite($Pile[$SP]['id_auteur'],'auteur') .
'">' .
interdire_scripts(typo(supprimer_numero($Pile[$SP]['nom']), "TYPO", $connect, $Pile[0])) .
'</a>');
		$t0 .= ((strlen($t1) && strlen($t0)) ? ', ' : '') . $t1;
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_auteurs @ ../prive/objets/liste/articles.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_liste_arthtml_2bf5e9bdbee88407a4818840e625dd9d(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (@$Pile[0]['id_article']))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	$in1 = array();
	if (!(is_array($a = (@$Pile[0]['id_rubrique']))))
		$in1[]= $a;
	else $in1 = array_merge($in1, $a);
	$in2 = array();
	if (!(is_array($a = (@$Pile[0]['id_mot']))))
		$in2[]= $a;
	else $in2 = array_merge($in2, $a);
	$in3 = array();
	if (!(is_array($a = (@$Pile[0]['id_auteur']))))
		$in3[]= $a;
	else $in3 = array_merge($in3, $a);
	$in4 = array();
	if (!(is_array($a = (@$Pile[0]['statut']))))
		$in4[]= $a;
	else $in4 = array_merge($in4, $a);
	// RECHERCHE
	if (!strlen((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")))){
		list($rech_select, $rech_where) = array("0 as points","");
	} else
	{
		$prepare_recherche = charger_fonction('prepare_recherche', 'inc');
		list($rech_select, $rech_where) = $prepare_recherche((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")), "articles", "?","",array (
  'criteres' => 
  array (
    'id_article' => true,
    'id_rubrique' => true,
    'statut' => true,
  ),
  'lien' => true,
),"id_article");
	}
	
	$senstri = '';
	$tri = (($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'');
	if ($tri){
		$senstri = ((intval($t=(isset($Pile[0]['sens'.'session_liste_art']))?$Pile[0]['sens'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('sens'.'session_liste_art'))?session_get('sens'.'session_liste_art'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1);
		$senstri = ($senstri<0)?' DESC':'';
	};
	
	$command['pagination'] = array((isset($Pile[0]['debut_liste_art']) ? $Pile[0]['debut_liste_art'] : null), (($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10));
	if (!isset($command['table'])) {
		$command['table'] = 'articles';
		$command['id'] = '_liste_art';
		$command['from'] = array('articles' => 'spip_articles','L1' => 'spip_mots_liens','L2' => 'spip_auteurs_liens','resultats' => 'spip_resultats');
		$command['type'] = array();
		$command['groupby'] = array("articles.id_article");
		$command['join'] = array('L1' => array('articles','id_objet','id_article','L1.objet='.sql_quote('article')), 'L2' => array('articles','id_objet','id_article','L2.objet='.sql_quote('article')), 'resultats' => array('articles','id','id_article'));
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['select'] = array("articles.id_article",
		"$rech_select",
		"".tri_champ_select($tri)."",
		"articles.titre",
		"articles.lang",
		"articles.statut",
		"articles.id_rubrique",
		"articles.surtitre",
		"articles.titre AS titre_rang",
		"articles.soustitre",
		"articles.date");
	$command['orderby'] = array(tri_champ_order($tri,$command['from']).$senstri, 'articles.titre');
	$command['where'] = 
			array((!(is_array(@$Pile[0]['id_article'])?count(@$Pile[0]['id_article']):strlen(@$Pile[0]['id_article'])) ? '' : ((is_array(@$Pile[0]['id_article'])) ? sql_in('articles.id_article',sql_quote($in)) : 
			array('=', 'articles.id_article', sql_quote(@$Pile[0]['id_article'], '', '')))), (!(is_array(@$Pile[0]['id_rubrique'])?count(@$Pile[0]['id_rubrique']):strlen(@$Pile[0]['id_rubrique'])) ? '' : ((is_array(@$Pile[0]['id_rubrique'])) ? sql_in('articles.id_rubrique',sql_quote($in1)) : 
			array('=', 'articles.id_rubrique', sql_quote(@$Pile[0]['id_rubrique'], '', '')))), (!(is_array(@$Pile[0]['id_mot'])?count(@$Pile[0]['id_mot']):strlen(@$Pile[0]['id_mot'])) ? '' : ((is_array(@$Pile[0]['id_mot'])) ? sql_in('L1.id_mot',sql_quote($in2)) : 
			array('=', 'L1.id_mot', sql_quote(@$Pile[0]['id_mot'], '', '')))), (!(is_array(@$Pile[0]['id_auteur'])?count(@$Pile[0]['id_auteur']):strlen(@$Pile[0]['id_auteur'])) ? '' : ((is_array(@$Pile[0]['id_auteur'])) ? sql_in('L2.id_auteur',sql_quote($in3)) : 
			array('=', 'L2.id_auteur', sql_quote(@$Pile[0]['id_auteur'], '', '')))), ((@$Pile[0]["where"]) ? (@$Pile[0]["where"]) : ''), (!(is_array(@$Pile[0]['statut'])?count(@$Pile[0]['statut']):strlen(@$Pile[0]['statut'])) ? '' : ((is_array(@$Pile[0]['statut'])) ? sql_in('articles.statut',sql_quote($in4)) : 
			array('=', 'articles.statut', sql_quote(@$Pile[0]['statut'], '', '')))), $rech_where?$rech_where:'');
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../prive/objets/liste/articles.html','html_2bf5e9bdbee88407a4818840e625dd9d','_liste_art',7,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	
	// COMPTEUR
	$Numrows['_liste_art']['compteur_boucle'] = 0;
	$Numrows['_liste_art']['total'] = @intval($iter->count());
	$debut_boucle = isset($Pile[0]['debut_liste_art']) ? $Pile[0]['debut_liste_art'] : _request('debut_liste_art');
	if(substr($debut_boucle,0,1)=='@'){
		$debut_boucle = $Pile[0]['debut_liste_art'] = quete_debut_pagination('id_article',$Pile[0]['@id_article'] = substr($debut_boucle,1),(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10),$iter);
		$iter->seek(0);
	}
	$debut_boucle = intval($debut_boucle);
	$debut_boucle = (($tout=($debut_boucle == -1))?0:($debut_boucle));
	$debut_boucle = max(0,min($debut_boucle,floor(($Numrows['_liste_art']['total']-1)/((($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10)))*((($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10))));
	$debut_boucle = intval($debut_boucle);
	$fin_boucle = min(($tout ? $Numrows['_liste_art']['total'] : $debut_boucle+(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10) - 1), $Numrows['_liste_art']['total'] - 1);
	$Numrows['_liste_art']['grand_total'] = $Numrows['_liste_art']['total'];
	$Numrows['_liste_art']["total"] = max(0,$fin_boucle - $debut_boucle + 1);
	if ($debut_boucle>0 AND $debut_boucle < $Numrows['_liste_art']['grand_total'] AND $iter->seek($debut_boucle,'continue'))
		$Numrows['_liste_art']['compteur_boucle'] = $debut_boucle;
	
	
	$l1 = _T('public|spip|ecrire:info_numero_abbreviation');$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$Numrows['_liste_art']['compteur_boucle']++;
		if ($Numrows['_liste_art']['compteur_boucle'] <= $debut_boucle) continue;
		if ($Numrows['_liste_art']['compteur_boucle']-1 > $fin_boucle) break;
		$t0 .= (
'
		' .
changer_typo(spip_htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang'])) .
'
		<tr class="' .
alterner($Numrows['_liste_art']['compteur_boucle'],'row_odd','row_even') .
'">
			<td class=\'statut\'>' .
interdire_scripts(filtre_puce_statut_dist($Pile[$SP]['statut'],'article',$Pile[$SP]['id_article'],$Pile[$SP]['id_rubrique'])) .
'</td>
			<td class=\'titre principale\'' .
(($t1 = strval(((
((!is_array($l = quete_logo('id_article', 'on', $Pile[$SP]['id_article'],'', 0))) ? '':
 ("<img class=\"spip_logo spip_logos\" alt=\"\" src=\"$l[0]\"" . $l[2] .  ($l[1] ? " onmouseover=\"this.src='$l[1]'\" onmouseout=\"this.src='$l[0]'\"" : "") . ' />'))) ?'' :' ')))!=='' ?
		($t1 . 'colspan=\'2\'') :
		'') .
'><a href="' .
generer_url_entite($Pile[$SP]['id_article'],'article') .
'"
						' .
(($t1 = strval(interdire_scripts(((((entites_html(table_valeur(@$Pile[0], (string)'lang', null),true) == spip_htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang']))) ?'' :' ') ? spip_htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang']):''))))!=='' ?
		('hreflang="' . $t1 . '"') :
		'') .
'
						title="' .
attribut_html($l1) .
' ' .
$Pile[$SP]['id_article'] .
'">' .
(($t1 = strval(interdire_scripts(filtrer('image_graver',filtrer('image_reduire',typo($Pile[$SP]['surtitre'], "TYPO", $connect, $Pile[0]),'150','70')))))!=='' ?
		('<span
						class="surtitre">' . $t1 . '</span>') :
		'') .
(($t1 = strval(recuperer_numero($Pile[$SP]['titre_rang'])))!=='' ?
		($t1 . '. ') :
		'') .
'<strong>' .
interdire_scripts(typo(supprimer_numero($Pile[$SP]['titre']), "TYPO", $connect, $Pile[0])) .
'</strong>' .
(($t1 = strval(interdire_scripts(typo($Pile[$SP]['soustitre'], "TYPO", $connect, $Pile[0]))))!=='' ?
		('<span class="soustitre">' . $t1 . '</span>') :
		'') .
'</a></td>
			' .
(($t1 = strval(filtrer('image_graver',filtrer('image_reduire',
((!is_array($l = quete_logo('id_article', 'on', $Pile[$SP]['id_article'],'', 0))) ? '':
 ("<img class=\"spip_logo spip_logos\" alt=\"\" src=\"$l[0]\"" . $l[2] .  ($l[1] ? " onmouseover=\"this.src='$l[1]'\" onmouseout=\"this.src='$l[0]'\"" : "") . ' />')),'90','70'))))!=='' ?
		('<td class=\'logo\'>' . $t1 . '</td>') :
		'') .
'
			<td class=\'auteur\'><div class="inner">' .
BOUCLE_auteurshtml_2bf5e9bdbee88407a4818840e625dd9d($Cache, $Pile, $doublons, $Numrows, $SP) .
'</div></td>
			<td class=\'date secondaire\'>' .
(($t1 = strval(interdire_scripts(affdate_jourcourt(normaliser_date($Pile[$SP]['date'])))))!=='' ?
		((	'<span title="' .
	interdire_scripts(heures_minutes(normaliser_date($Pile[$SP]['date']))) .
	'">') . $t1 . '</span>') :
		'') .
'</td>
			<td class=\'id\'>' .
invalideur_session($Cache, (((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('modifier', 'article', invalideur_session($Cache, $Pile[$SP]['id_article']))?" ":"") ? (	'<a href="' .
	invalideur_session($Cache, generer_url_ecrire('article_edit',(	'id_article=' .
		invalideur_session($Cache, $Pile[$SP]['id_article'])))) .
	'">' .
	invalideur_session($Cache, $Pile[$SP]['id_article']) .
	'</a>'):(	invalideur_session($Cache, $Pile[$SP]['id_article']) .
	'
			'))) .
'</td>
		</tr>
	');
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_liste_art @ ../prive/objets/liste/articles.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../prive/objets/liste/articles.html
// Temps de compilation total: 25.342 ms
//

function html_2bf5e9bdbee88407a4818840e625dd9d($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
(($t1 = strval(vide($Pile['vars'][$_zzz=(string)'defaut_tri'] = defaut_tri_defined(array('date' => interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'date_sens', null), '-1'),true)), 'num titre' => '1', 'id_article' => '1', 'points' => '-1
')))))!=='' ?
		($t1 . '
') :
		'') .
(($t1 = BOUCLE_liste_arthtml_2bf5e9bdbee88407a4818840e625dd9d($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		((	'
' .
		filtre_pagination_dist($Numrows["_liste_art"]["grand_total"],
 		'_liste_art',
		isset($Pile[0]['debut_liste_art'])?$Pile[0]['debut_liste_art']:intval(_request('debut_liste_art')),
		(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10), false, '', '', array()) .
		'
<div class="liste-objets articles">
<table class=\'spip liste\'>
' .
		(($t3 = strval(interdire_scripts(sinon(table_valeur(@$Pile[0], (string)'titre', null), singulier_ou_pluriel((isset($Numrows['_liste_art']['grand_total'])
			? $Numrows['_liste_art']['grand_total'] : $Numrows['_liste_art']['total']),'info_1_article','info_nb_articles')))))!=='' ?
				('<caption><strong class="caption">' . $t3 . '</strong></caption>') :
				'') .
		'
	<thead>
		<tr class=\'first_row\'>
			<th class=\'statut\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('statut',array('>','<')))?'sens':'tri').'session_liste_art',$s?(strpos('< >','statut')-1):'statut'),'var_memotri',strncmp('session_liste_art','session',7)==0?(($s=in_array('statut',array('>','<')))?'sens':'tri').'session_liste_art':''),(	'<span title="' .
			attribut_html(_T('public|spip|ecrire:lien_trier_statut')) .
			'">#</span>'),$s?(((intval($t=(isset($Pile[0]['sens'.'session_liste_art']))?$Pile[0]['sens'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('sens'.'session_liste_art'))?session_get('sens'.'session_liste_art'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','statut')-1)):((($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')=='statut'),'ajax') .
		'</th>
			<th class=\'titre principale\' scope=\'col\' colspan=\'2\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('num titre',array('>','<')))?'sens':'tri').'session_liste_art',$s?(strpos('< >','num titre')-1):'num titre'),'var_memotri',strncmp('session_liste_art','session',7)==0?(($s=in_array('num titre',array('>','<')))?'sens':'tri').'session_liste_art':''),_T('public|spip|ecrire:info_titre'),$s?(((intval($t=(isset($Pile[0]['sens'.'session_liste_art']))?$Pile[0]['sens'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('sens'.'session_liste_art'))?session_get('sens'.'session_liste_art'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','num titre')-1)):((($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')=='num titre'),'ajax') .
		'</th>
			<th class=\'auteur\' scope=\'col\'>' .
		_T('public|spip|ecrire:auteur') .
		'</th>
			<th class=\'date secondaire\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('date',array('>','<')))?'sens':'tri').'session_liste_art',$s?(strpos('< >','date')-1):'date'),'var_memotri',strncmp('session_liste_art','session',7)==0?(($s=in_array('date',array('>','<')))?'sens':'tri').'session_liste_art':''),_T('public|spip|ecrire:date'),$s?(((intval($t=(isset($Pile[0]['sens'.'session_liste_art']))?$Pile[0]['sens'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('sens'.'session_liste_art'))?session_get('sens'.'session_liste_art'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','date')-1)):((($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')=='date'),'ajax') .
		'</th>
			<th class=\'id\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('id_article',array('>','<')))?'sens':'tri').'session_liste_art',$s?(strpos('< >','id_article')-1):'id_article'),'var_memotri',strncmp('session_liste_art','session',7)==0?(($s=in_array('id_article',array('>','<')))?'sens':'tri').'session_liste_art':''),_T('public|spip|ecrire:info_numero_abbreviation'),$s?(((intval($t=(isset($Pile[0]['sens'.'session_liste_art']))?$Pile[0]['sens'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('sens'.'session_liste_art'))?session_get('sens'.'session_liste_art'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','id_article')-1)):((($t=(isset($Pile[0]['tri'.'session_liste_art']))?$Pile[0]['tri'.'session_liste_art']:((strncmp('session_liste_art','session',7)==0 AND session_get('tri'.'session_liste_art'))?session_get('tri'.'session_liste_art'):interdire_scripts(defaut_tri_par(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'date'),true),table_valeur($Pile["vars"], (string)'defaut_tri', null)))))?tri_protege_champ($t):'')=='id_article'),'ajax') .
		'</th>
		</tr>
	</thead>
	<tbody>
	') . $t1 . (	'
	' .
		changer_typo('') .
		'
	</tbody>
</table>
' .
		(($t3 = strval(filtre_pagination_dist($Numrows["_liste_art"]["grand_total"],
 		'_liste_art',
		isset($Pile[0]['debut_liste_art'])?$Pile[0]['debut_liste_art']:intval(_request('debut_liste_art')),
		(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10), true, interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'pagination', null), 'prive'),true)), '', array())))!=='' ?
				('<p class=\'pagination\'>' . $t3 . '</p>') :
				'') .
		'
</div>
')) :
		((($t2 = strval(interdire_scripts(sinon(table_valeur(@$Pile[0], (string)'sinon', null), ''))))!=='' ?
			('
<div class="liste-objets articles caption-wrap"><strong class="caption">' . $t2 . '</strong></div>
') :
			''))) .
'
');

	return analyse_resultat_skel('html_2bf5e9bdbee88407a4818840e625dd9d', $Cache, $page, '../prive/objets/liste/articles.html');
}
?>