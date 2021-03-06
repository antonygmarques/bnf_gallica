<?php

/*
 * Squelette : ../prive/objets/liste/auteurs.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 13 Jan 2017 12:28:46 GMT
 * Boucles :   _lettre, _liste_aut
 */ 

function BOUCLE_lettrehtml_f0b6d1d9e46089b46cc88aefee56febc(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (@$Pile[0]['id_auteur']))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	$in1 = array();
	if (!(is_array($a = (@$Pile[0]['statut']))))
		$in1[]= $a;
	else $in1 = array_merge($in1, $a);
	// RECHERCHE
	if (!strlen((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")))){
		list($rech_select, $rech_where) = array("0 as points","");
	} else
	{
		$prepare_recherche = charger_fonction('prepare_recherche', 'inc');
		list($rech_select, $rech_where) = $prepare_recherche((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")), "auteurs", "?","",array (
  'tout' => true,
  'criteres' => 
  array (
    'id_auteur' => true,
    'statut' => true,
  ),
),"id_auteur");
	}
	
	if (!isset($command['table'])) {
		$command['table'] = 'auteurs';
		$command['id'] = '_lettre';
		$command['from'] = array('auteurs' => 'spip_auteurs','resultats' => 'spip_resultats');
		$command['type'] = array();
		$command['groupby'] = array();
		$command['orderby'] = array('multi');
		$command['join'] = array('resultats' => array('auteurs','id','id_auteur'));
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['select'] = array("auteurs.id_auteur",
		"$rech_select",
		"".sql_multi('auteurs.nom', $GLOBALS['spip_lang'])."",
		"auteurs.nom");
	$command['where'] = 
			array((!(is_array(@$Pile[0]['id_auteur'])?count(@$Pile[0]['id_auteur']):strlen(@$Pile[0]['id_auteur'])) ? '' : ((is_array(@$Pile[0]['id_auteur'])) ? sql_in('auteurs.id_auteur',sql_quote($in)) : 
			array('=', 'auteurs.id_auteur', sql_quote(@$Pile[0]['id_auteur'], '', '')))), ((@$Pile[0]["where"]) ? (@$Pile[0]["where"]) : ''), (!(is_array(@$Pile[0]['statut'])?count(@$Pile[0]['statut']):strlen(@$Pile[0]['statut'])) ? '' : ((is_array(@$Pile[0]['statut'])) ? sql_in('auteurs.statut',sql_quote($in1)) : 
			array('=', 'auteurs.statut', sql_quote(@$Pile[0]['statut'], '', '')))), $rech_where?$rech_where:'', 
			array('REGEXP', 'auteurs.id_auteur', sql_quote((table_valeur($Pile["vars"], (string)'afficher_lettres', null) ? '.*':'A'), '', 'char')));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../prive/objets/liste/auteurs.html','html_f0b6d1d9e46089b46cc88aefee56febc','_lettre',19,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	
	// COMPTEUR
	$Numrows['_lettre']['compteur_boucle'] = 0;
	$Numrows['_lettre']['total'] = @intval($iter->count());
	$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$Numrows['_lettre']['compteur_boucle']++;
		$t0 .= (
((unique(filtre_initiale($Pile[$SP]['nom'])))  ?
		('
		' . ' ' . (	'
		' .
	vide($Pile['vars'][$_zzz=(string)'p'] = concat(table_valeur($Pile["vars"], (string)'p', null),afficher_initiale(ancre_url(parametre_url(self(),'debutaut',(	'@' .
				$Pile[$SP]['id_auteur'])),'paginationaut'),filtre_initiale($Pile[$SP]['nom']),$Numrows['_lettre']['compteur_boucle'],table_valeur($Pile["vars"], (string)'debut', null),interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true))))) .
	'
		')) :
		'') .
vide($Numrows['_lettre']['compteur_boucle']=$iter->skip(interdire_scripts(moins(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true),(($Numrows['_lettre']['compteur_boucle'] == '1') ? '2':'1'))),$Numrows['_lettre']['total'])));
	}
	$iter->free();
	}
	if (defined("_BOUCLE_PROFILER")
	AND 1000*($timer = (time()+microtime())-$timer) > _BOUCLE_PROFILER)
		spip_log(intval(1000*$timer)."ms BOUCLE_lettre @ ../prive/objets/liste/auteurs.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}


function BOUCLE_liste_authtml_f0b6d1d9e46089b46cc88aefee56febc(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $command = array();
	static $connect;
	$command['connect'] = $connect = '';
	$in = array();
	if (!(is_array($a = (@$Pile[0]['id_auteur']))))
		$in[]= $a;
	else $in = array_merge($in, $a);
	$in1 = array();
	if (!(is_array($a = (@$Pile[0]['id_mot']))))
		$in1[]= $a;
	else $in1 = array_merge($in1, $a);
	$in2 = array();
	if (!(is_array($a = (@$Pile[0]['statut']))))
		$in2[]= $a;
	else $in2 = array_merge($in2, $a);
	// RECHERCHE
	if (!strlen((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")))){
		list($rech_select, $rech_where) = array("0 as points","");
	} else
	{
		$prepare_recherche = charger_fonction('prepare_recherche', 'inc');
		list($rech_select, $rech_where) = $prepare_recherche((isset($Pile[0]["recherche"])?$Pile[0]["recherche"]:(isset($GLOBALS["recherche"])?$GLOBALS["recherche"]:"")), "auteurs", "?","",array (
  'tout' => true,
  'criteres' => 
  array (
    'id_auteur' => true,
    'statut' => true,
  ),
  'lien' => true,
),"id_auteur");
	}
	
	$senstri = '';
	$tri = (($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'');
	if ($tri){
		$senstri = ((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1);
		$senstri = ($senstri<0)?' DESC':'';
	};
	
	$command['pagination'] = array((isset($Pile[0]['debutaut']) ? $Pile[0]['debutaut'] : null), (($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10));
	if (!isset($command['table'])) {
		$command['table'] = 'auteurs';
		$command['id'] = '_liste_aut';
		$command['from'] = array('auteurs' => 'spip_auteurs','L1' => 'spip_mots_liens','resultats' => 'spip_resultats','LAA' => 'spip_auteurs_liens','articles' => 'spip_articles');
		$command['type'] = array('LAA' => 'left','articles' => 'left');
		$command['groupby'] = array("auteurs.id_auteur",
		"auteurs.id_auteur");
		$command['limit'] = '';
		$command['having'] = 
			array();
	}
	$command['select'] = array("auteurs.id_auteur",
		"$rech_select",
		"".tri_champ_select($tri)."",
		"COUNT(articles.id_article) AS compteur_articles",
		"auteurs.lang",
		"auteurs.nom",
		"auteurs.statut",
		"auteurs.en_ligne",
		"auteurs.imessage",
		"auteurs.bio",
		"auteurs.nom AS titre_rang",
		"auteurs.webmestre",
		"auteurs.email");
	$command['orderby'] = array(tri_champ_order($tri,$command['from']).$senstri);
	$command['where'] = 
			array((!(is_array(@$Pile[0]['id_auteur'])?count(@$Pile[0]['id_auteur']):strlen(@$Pile[0]['id_auteur'])) ? '' : ((is_array(@$Pile[0]['id_auteur'])) ? sql_in('auteurs.id_auteur',sql_quote($in)) : 
			array('=', 'auteurs.id_auteur', sql_quote(@$Pile[0]['id_auteur'], '', '')))), (!(is_array(@$Pile[0]['id_mot'])?count(@$Pile[0]['id_mot']):strlen(@$Pile[0]['id_mot'])) ? '' : ((is_array(@$Pile[0]['id_mot'])) ? sql_in('L1.id_mot',sql_quote($in1)) : 
			array('=', 'L1.id_mot', sql_quote(@$Pile[0]['id_mot'], '', '')))), ((@$Pile[0]["where"]) ? (@$Pile[0]["where"]) : ''), (!(is_array(@$Pile[0]['statut'])?count(@$Pile[0]['statut']):strlen(@$Pile[0]['statut'])) ? '' : ((is_array(@$Pile[0]['statut'])) ? sql_in('auteurs.statut',sql_quote($in2)) : 
			array('=', 'auteurs.statut', sql_quote(@$Pile[0]['statut'], '', '')))), $rech_where?$rech_where:'');
	$command['join'] = array('L1' => array('auteurs','id_objet','id_auteur','L1.objet='.sql_quote('auteur')), 'resultats' => array('auteurs','id','id_auteur'), 'LAA' => array('auteurs','id_auteur','id_auteur','LAA.objet=\'article\''), 'articles' => array('LAA','id_article','id_objet','(articles.statut IS NULL OR '.sql_in('articles.statut',_q(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'filtre_statut_articles', null), 'poubelle'),true))), 'NOT').')'));
	if (defined("_BOUCLE_PROFILER")) $timer = time()+microtime();
	$t0 = "";
	// REQUETE
	$iter = IterFactory::create(
		"SQL",
		$command,
		array('../prive/objets/liste/auteurs.html','html_f0b6d1d9e46089b46cc88aefee56febc','_liste_aut',9,$GLOBALS['spip_lang'])
	);
	if (!$iter->err()) {
	
	// COMPTEUR
	$Numrows['_liste_aut']['compteur_boucle'] = 0;
	$Numrows['_liste_aut']['total'] = @intval($iter->count());
	$debut_boucle = isset($Pile[0]['debutaut']) ? $Pile[0]['debutaut'] : _request('debutaut');
	if(substr($debut_boucle,0,1)=='@'){
		$debut_boucle = $Pile[0]['debutaut'] = quete_debut_pagination('id_auteur',$Pile[0]['@id_auteur'] = substr($debut_boucle,1),(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10),$iter);
		$iter->seek(0);
	}
	$debut_boucle = intval($debut_boucle);
	$debut_boucle = (($tout=($debut_boucle == -1))?0:($debut_boucle));
	$debut_boucle = max(0,min($debut_boucle,floor(($Numrows['_liste_aut']['total']-1)/((($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10)))*((($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10))));
	$debut_boucle = intval($debut_boucle);
	$fin_boucle = min(($tout ? $Numrows['_liste_aut']['total'] : $debut_boucle+(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10) - 1), $Numrows['_liste_aut']['total'] - 1);
	$Numrows['_liste_aut']['grand_total'] = $Numrows['_liste_aut']['total'];
	$Numrows['_liste_aut']["total"] = max(0,$fin_boucle - $debut_boucle + 1);
	if ($debut_boucle>0 AND $debut_boucle < $Numrows['_liste_aut']['grand_total'] AND $iter->seek($debut_boucle,'continue'))
		$Numrows['_liste_aut']['compteur_boucle'] = $debut_boucle;
	
	
	$l1 = _T('public|spip|ecrire:info_envoyer_message_prive');
	$l2 = _T('public|spip|ecrire:info_numero_abbreviation');
	$l3 = _T('public|spip|ecrire:statut_webmestre');
	$l4 = _T('public|spip|ecrire:statut_admin_restreint');$SP++;
	// RESULTATS
	while ($Pile[$SP]=$iter->fetch()) {

		$Numrows['_liste_aut']['compteur_boucle']++;
		if ($Numrows['_liste_aut']['compteur_boucle'] <= $debut_boucle) continue;
		if ($Numrows['_liste_aut']['compteur_boucle']-1 > $fin_boucle) break;
		$t0 .= (
'
		' .
changer_typo(spip_htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang'])) .
'
		<tr class="' .
alterner($Numrows['_liste_aut']['compteur_boucle'],'row_odd','row_even') .
(($t1 = strval(unique((calcul_exposer($Pile[$SP]['id_auteur'], 'id_auteur', $Pile[0], '', 'id_auteur', '') ? 'on' : ''))))!=='' ?
		(' ' . $t1) :
		'') .
(($t1 = strval(unique((((((filtre_initiale($Pile[$SP]['nom']) == interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'i', null),true)))) AND (interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'i', null),true)))) ?' ' :'') ? 'on':''))))!=='' ?
		(' ' . $t1) :
		'') .
'">
			<td class=\'statut\'>' .
interdire_scripts(filtre_puce_statut_dist($Pile[$SP]['statut'],'auteur')) .
'</td>
			<td class="messagerie">' .
(($t1 = strval(auteur_lien_messagerie($Pile[$SP]['id_auteur'],interdire_scripts($Pile[$SP]['en_ligne']),interdire_scripts($Pile[$SP]['statut']),interdire_scripts($Pile[$SP]['imessage']))))!=='' ?
		('<a href="' . $t1 . (	'">' .
	filtre_balise_img_dist(find_in_path('images/m_envoi.gif'),$l1) .
	'</a>')) :
		'') .
'</td>
			<td class=\'nom' .
(($t1 = strval(interdire_scripts(((typo(supprimer_numero($Pile[$SP]['nom']), "TYPO", $connect, $Pile[0])) ?'' :' '))))!=='' ?
		(' ' . $t1 . 'vide') :
		'') .
'\'' .
(($t1 = strval(((
((!is_array($l = quete_logo('id_auteur', 'ON', $Pile[$SP]['id_auteur'],'', 0))) ? '':
 ("<img class=\"spip_logo spip_logos\" alt=\"\" src=\"$l[0]\"" . $l[2] .  ($l[1] ? " onmouseover=\"this.src='$l[1]'\" onmouseout=\"this.src='$l[0]'\"" : "") . ' />'))) ?'' :' ')))!=='' ?
		($t1 . 'colspan=\'2\'') :
		'') .
'><a href="' .
generer_url_entite($Pile[$SP]['id_auteur'],'auteur') .
'"' .
(($t1 = strval(interdire_scripts(attribut_html(couper($Pile[$SP]['bio'],'200')))))!=='' ?
		(' title="' . $t1 . '"') :
		'') .
'>' .
(($t1 = strval(recuperer_numero($Pile[$SP]['titre_rang'])))!=='' ?
		($t1 . '. ') :
		'') .
interdire_scripts(((($a = ((($a = trim(typo(supprimer_numero($Pile[$SP]['nom']), "TYPO", $connect, $Pile[0]))) OR (is_string($a) AND strlen($a))) ? $a : interdire_scripts(trim(couper($Pile[$SP]['bio'],'80'))))) OR (is_string($a) AND strlen($a))) ? $a : (	$l2 .
	$Pile[$SP]['id_auteur']))) .
'</a>' .
(($t1 = strval(interdire_scripts(((((($Pile[$SP]['statut'] == '0minirezo')) AND (interdire_scripts(($Pile[$SP]['webmestre'] == 'oui')))) ?' ' :'') ? $l3:''))))!=='' ?
		(' <small>(' . $t1 . ')</small>') :
		'') .
(($t1 = strval(interdire_scripts(((((($Pile[$SP]['statut'] == '0minirezo')) AND (invalideur_session($Cache, ((((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('', '', '', invalideur_session($Cache, $Pile[$SP]['id_auteur']))?" ":"")) ?'' :' ')))) ?' ' :'') ? $l4:''))))!=='' ?
		(' <small>(' . $t1 . ')</small>') :
		'') .
'</td>
			' .
(($t1 = strval(extraire_attribut(filtrer('image_graver', filtrer('image_passe_partout',
((!is_array($l = quete_logo('id_auteur', 'ON', $Pile[$SP]['id_auteur'],'', 0))) ? '':
 ("<img class=\"spip_logo spip_logos\" alt=\"\" src=\"$l[0]\"" . $l[2] .  ($l[1] ? " onmouseover=\"this.src='$l[1]'\" onmouseout=\"this.src='$l[0]'\"" : "") . ' />')),'40','40')),'src')))!=='' ?
		((	'<td class=\'logo\'><a href="' .
	generer_url_entite($Pile[$SP]['id_auteur'],'auteur') .
	'" style="background-image:url(') . $t1 . ')"></a></td>') :
		'') .
'
			<td class=\'email\'>' .
(($t1 = strval(interdire_scripts($Pile[$SP]['email'])))!=='' ?
		('<a href=\'mailto:' . $t1 . (	'\'>' .
	interdire_scripts(couper($Pile[$SP]['email'],'30')) .
	'</a>')) :
		'') .
'</td>
			<td class=\'nombre\'>' .
singulier_ou_pluriel($Pile[$SP]['compteur_articles'],'info_1_article','info_nb_articles') .
(($t1 = strval(filtre_implode_dist(pipeline( 'compter_contributions_auteur' , array('args' => array('id_auteur' => $Pile[$SP]['id_auteur']), 'data' => array()) ),'<br />')))!=='' ?
		('<br /><span>' . $t1 . '</span>') :
		'') .
'</td>
			<td class=\'id\'>' .
invalideur_session($Cache, (((function_exists("autoriser")||include_spip("inc/autoriser"))&&autoriser('modifier', 'auteur', invalideur_session($Cache, $Pile[$SP]['id_auteur']))?" ":"") ? (	'<a href="' .
	invalideur_session($Cache, generer_url_ecrire('auteur_edit',(	'id_auteur=' .
		invalideur_session($Cache, $Pile[$SP]['id_auteur'])))) .
	'">' .
	invalideur_session($Cache, $Pile[$SP]['id_auteur']) .
	'</a>'):(	invalideur_session($Cache, $Pile[$SP]['id_auteur']) .
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
		spip_log(intval(1000*$timer)."ms BOUCLE_liste_aut @ ../prive/objets/liste/auteurs.html","profiler"._LOG_AVERTISSEMENT);
	return $t0;
}

//
// Fonction principale du squelette ../prive/objets/liste/auteurs.html
// Temps de compilation total: 32.078 ms
//

function html_f0b6d1d9e46089b46cc88aefee56febc($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
(($t1 = strval(vide($Pile['vars'][$_zzz=(string)'defaut_tri'] = array('statut' => '1', 'multi nom' => '1', 'id_auteur' => '1', 'site' => '1', 'compteur_articles' => '-1', 'points' => '-1
'))))!=='' ?
		($t1 . '
') :
		'') .
(($t1 = BOUCLE_liste_authtml_f0b6d1d9e46089b46cc88aefee56febc($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		((	'
' .
		vide($Pile['vars'][$_zzz=(string)'afficher_lettres'] = interdire_scripts(((((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'') == 'multi nom')) ?' ' :''))) .
		vide($Pile['vars'][$_zzz=(string)'debut'] = interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'debutaut', null), interdire_scripts(eval('return '.'_request("debutaut");'.';'))),true))) .
		filtre_pagination_dist($Numrows["_liste_aut"]["grand_total"],
 		'aut',
		isset($Pile[0]['debutaut'])?$Pile[0]['debutaut']:intval(_request('debutaut')),
		(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10), false, '', '', array()) .
		'
<div class="liste-objets auteurs">
<table class=\'spip liste\'>
' .
		(($t3 = strval(interdire_scripts(sinon(table_valeur(@$Pile[0], (string)'titre', null), singulier_ou_pluriel((isset($Numrows['_liste_aut']['grand_total'])
			? $Numrows['_liste_aut']['grand_total'] : $Numrows['_liste_aut']['total']),'info_1_auteur','info_nb_auteurs')))))!=='' ?
				('<caption><strong class="caption">' . $t3 . '</strong></caption>') :
				'') .
		'
	<thead>

		' .
		vide($Pile['vars'][$_zzz=(string)'p'] = '') .
		(($t3 = BOUCLE_lettrehtml_f0b6d1d9e46089b46cc88aefee56febc($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
				($t3 . (($t5 = strval(vide($Pile['vars'][$_zzz=(string)'p'] = concat(table_valeur($Pile["vars"], (string)'p', null),afficher_initiale('','',$Numrows['_lettre']['total'],table_valeur($Pile["vars"], (string)'debut', null),interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))))))!=='' ?
						('
		' . $t5) :
						'')) :
				'') .
		'
		' .
		(($t3 = strval(table_valeur($Pile["vars"], (string)'p', null)))!=='' ?
				('<tr><td colspan="6"><p class=\'pagination\'>' . $t3 . '</p></td></tr>') :
				'') .
		'

		' .
		(($t3 = strval(filtre_pagination_dist($Numrows["_liste_aut"]["grand_total"],
 		'aut',
		isset($Pile[0]['debutaut'])?$Pile[0]['debutaut']:intval(_request('debutaut')),
		(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10), true, 'prive', '', array())))!=='' ?
				('<tr><td colspan="6"><p class=\'pagination\'>' . $t3 . '</p></td></tr>') :
				'') .
		'
		<tr class=\'first_row\'>
			<th class=\'statut\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('statut',array('>','<')))?'sens':'tri').'_liste_aut',$s?(strpos('< >','statut')-1):'statut'),'var_memotri',strncmp('_liste_aut','session',7)==0?(($s=in_array('statut',array('>','<')))?'sens':'tri').'_liste_aut':''),interdire_scripts(filtre_balise_img_dist(chemin_image('auteur-16.png'),attribut_html(_T('public|spip|ecrire:lien_trier_statut')))),$s?(((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','statut')-1)):((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')=='statut'),'ajax') .
		'</th>
			<th class=\'messagerie\' scope=\'col\'></th>
			<th class=\'nom\' scope=\'col\' colspan=\'2\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('multi nom',array('>','<')))?'sens':'tri').'_liste_aut',$s?(strpos('< >','multi nom')-1):'multi nom'),'var_memotri',strncmp('_liste_aut','session',7)==0?(($s=in_array('multi nom',array('>','<')))?'sens':'tri').'_liste_aut':''),_T('public|spip|ecrire:info_nom'),$s?(((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','multi nom')-1)):((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')=='multi nom'),'ajax') .
		'</th>
			<th class=\'email\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('email',array('>','<')))?'sens':'tri').'_liste_aut',$s?(strpos('< >','email')-1):'email'),'var_memotri',strncmp('_liste_aut','session',7)==0?(($s=in_array('email',array('>','<')))?'sens':'tri').'_liste_aut':''),_T('public|spip|ecrire:email'),$s?(((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','email')-1)):((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')=='email'),'ajax') .
		'</th>
			<th class=\'nombre\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('compteur_articles',array('>','<')))?'sens':'tri').'_liste_aut',$s?(strpos('< >','compteur_articles')-1):'compteur_articles'),'var_memotri',strncmp('_liste_aut','session',7)==0?(($s=in_array('compteur_articles',array('>','<')))?'sens':'tri').'_liste_aut':''),_T('public|spip|ecrire:info_articles'),$s?(((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','compteur_articles')-1)):((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')=='compteur_articles'),'ajax') .
		'</th>
			<th class=\'id\' scope=\'col\'>' .
		lien_ou_expose(parametre_url(parametre_url(self(),(($s=in_array('id_auteur',array('>','<')))?'sens':'tri').'_liste_aut',$s?(strpos('< >','id_auteur')-1):'id_auteur'),'var_memotri',strncmp('_liste_aut','session',7)==0?(($s=in_array('id_auteur',array('>','<')))?'sens':'tri').'_liste_aut':''),_T('public|spip|ecrire:info_numero_abbreviation'),$s?(((intval($t=(isset($Pile[0]['sens'.'_liste_aut']))?$Pile[0]['sens'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('sens'.'_liste_aut'))?session_get('sens'.'_liste_aut'):(is_array($s=table_valeur($Pile["vars"], (string)'defaut_tri', null))?(isset($s[$st=(($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')])?$s[$st]:reset($s)):$s)))==-1 OR $t=='inverse')?-1:1)==(strpos('< >','id_auteur')-1)):((($t=(isset($Pile[0]['tri'.'_liste_aut']))?$Pile[0]['tri'.'_liste_aut']:((strncmp('_liste_aut','session',7)==0 AND session_get('tri'.'_liste_aut'))?session_get('tri'.'_liste_aut'):interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'par', null), 'multi nom'),true))))?tri_protege_champ($t):'')=='id_auteur'),'ajax') .
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
		(($t3 = strval(filtre_pagination_dist($Numrows["_liste_aut"]["grand_total"],
 		'aut',
		isset($Pile[0]['debutaut'])?$Pile[0]['debutaut']:intval(_request('debutaut')),
		(($a = intval(interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'nb', null), '10'),true)))) ? $a : 10), true, 'prive', '', array())))!=='' ?
				('<p class=\'pagination\'>' . $t3 . '</p>') :
				'') .
		'
</div>
')) :
		((($t2 = strval(interdire_scripts(sinon(table_valeur(@$Pile[0], (string)'sinon', null), ''))))!=='' ?
			('
<div class="liste-objets auteurs caption-wrap"><strong class="caption">' . $t2 . '</strong></div>
') :
			''))) .
'
');

	return analyse_resultat_skel('html_f0b6d1d9e46089b46cc88aefee56febc', $Cache, $page, '../prive/objets/liste/auteurs.html');
}
?>