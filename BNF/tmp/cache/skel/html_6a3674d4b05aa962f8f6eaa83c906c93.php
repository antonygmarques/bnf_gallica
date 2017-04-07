<?php

/*
 * Squelette : ../prive/squelettes/contenu/infos_perso.html
 * Date :      Fri, 30 Sep 2016 21:38:32 GMT
 * Compile :   Fri, 13 Jan 2017 12:25:38 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../prive/squelettes/contenu/infos_perso.html
// Temps de compilation total: 0.972 ms
//

function html_6a3674d4b05aa962f8f6eaa83c906c93($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<!-- <h1 class="grostitre">' .
_T('public|spip|ecrire:icone_mes_infos') .
'</h1> -->
' .

'<'.'?php echo recuperer_fond( ' . argumenter_squelette('prive/squelettes/contenu/auteur') . ', array_merge('.var_export($Pile[0],1).',array(\'id_auteur\' => ' . argumenter_squelette(interdire_scripts(invalideur_session($Cache, table_valeur($GLOBALS["visiteur_session"], (string)'id_auteur', null)))) . ',
	\'exec\' => ' . argumenter_squelette(interdire_scripts(replace(entites_html(table_valeur(@$Pile[0], (string)'exec', null),true),'infos_perso','auteur'))) . ',
	\'redirect\' => ' . argumenter_squelette(generer_url_ecrire('infos_perso')) . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . ')), array("compil"=>array(\'../prive/squelettes/contenu/infos_perso.html\',\'html_6a3674d4b05aa962f8f6eaa83c906c93\',\'\',2,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>');

	return analyse_resultat_skel('html_6a3674d4b05aa962f8f6eaa83c906c93', $Cache, $page, '../prive/squelettes/contenu/infos_perso.html');
}
?>