<?php

/*
 * Squelette : ../plugins-dist/mots/formulaires/editer_groupe_mot.html
 * Date :      Fri, 30 Sep 2016 21:38:56 GMT
 * Compile :   Fri, 06 Jan 2017 16:26:18 GMT
 * Boucles :   
 */ 
//
// Fonction principale du squelette ../plugins-dist/mots/formulaires/editer_groupe_mot.html
// Temps de compilation total: 9.061 ms
//

function html_e7503b51027681dbdb02b624282e46ed($Cache, $Pile, $doublons = array(), $Numrows = array(), $SP = 0) {

	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = (
'<div class=\'formulaire_spip formulaire_editer formulaire_editer_groupe_mot formulaire_editer_groupe_mot-' .
interdire_scripts(entites_html(sinon(table_valeur(@$Pile[0], (string)'id_groupe_mot', null), 'nouveau'),true)) .
'\'>
	' .
(($t1 = strval(table_valeur(@$Pile[0], (string)'message_ok', null)))!=='' ?
		('<p class=\'reponse_formulaire reponse_formulaire_ok\'>' . $t1 . '</p>') :
		'') .
'
	' .
(($t1 = strval(interdire_scripts(table_valeur(@$Pile[0], (string)'message_erreur', null))))!=='' ?
		('<p class=\'reponse_formulaire reponse_formulaire_erreur\'>' . $t1 . '</p>') :
		'') .
'
	' .
(($t1 = strval(interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'editable', null),true))))!=='' ?
		($t1 . (	'
	<form method=\'post\' action=\'' .
	interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'action', null),true)) .
	'\'><div>
		
		' .
		'<div>' .
	form_hidden(interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'action', null),true))) .
	'<input name=\'formulaire_action\' type=\'hidden\'
		value=\'' . @$Pile[0]['form'] . '\' />' .
	'<input name=\'formulaire_action_args\' type=\'hidden\'
		value=\'' . @$Pile[0]['formulaire_args']. '\' />' .
	(!empty($Pile[0]['_hidden']) ? @$Pile[0]['_hidden'] : '') .
	'</div>' .
	'<input type=\'hidden\' name=\'id_groupe\' value=\'' .
	interdire_scripts(entites_html(table_valeur(@$Pile[0], (string)'id_groupe', null),true)) .
	'\' />
	  <div class="editer-groupe">
	    <div class=\'editer editer_titre obligatoire' .
	((table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'titre'))  ?
			(' ' . ' ' . 'erreur') :
			'') .
	' editer_type_input\'>
				<label for=\'titre\'>' .
	_T('mots:info_changer_nom_groupe') .
	'<em class=\'aide\'>' .
	interdire_scripts((($aider=charger_fonction('aider','inc'))?$aider('titre','../plugins-dist/mots/formulaires/editer_groupe_mot.html', $Pile[0]):'')) .
	'</em></label>' .
	(($t2 = strval(table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'titre')))!=='' ?
			('
				<span class=\'erreur_message\'>' . $t2 . '</span>
				') :
			'') .
	'<input type=\'text\' class=\'text\' name=\'titre\' id=\'titre\' value=\'' .
	table_valeur(@$Pile[0], (string)'titre', null) .
	'\'
				placeholder=\'' .
	attribut_html(_T('mots:titre_nouveau_groupe')) .
	'\' />
	    </div>
	    <div class=\'editer editer_descriptif' .
	((table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'descriptif'))  ?
			(' ' . ' ' . 'erreur') :
			'') .
	' editer_type_textarea\'>
				<label for=\'descriptif\'>' .
	_T('public|spip|ecrire:texte_descriptif_rapide') .
	'</label>' .
	(($t2 = strval(table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'descriptif')))!=='' ?
			('
				<span class=\'erreur_message\'>' . $t2 . '</span>
				') :
			'') .
	'<textarea name=\'descriptif\' id=\'descriptif\' rows=\'4\' cols=\'40\'>' .
	table_valeur(@$Pile[0], (string)'descriptif', null) .
	'</textarea>
	    </div>
	    <div class=\'editer editer_texte' .
	((table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'texte'))  ?
			(' ' . ' ' . 'erreur') :
			'') .
	' editer_type_textarea\'>
				<label for=\'text_area\'>' .
	_T('public|spip|ecrire:info_texte_explicatif') .
	'</label>' .
	(($t2 = strval(table_valeur(table_valeur(@$Pile[0], (string)'erreurs', null),'texte')))!=='' ?
			('
				<span class=\'erreur_message\'>' . $t2 . '</span>
				') :
			'') .
	(($t2 = strval(sinon(table_valeur(@$Pile[0], (string)'_texte_trop_long', null), '')))!=='' ?
			($t2 . '
				') :
			'') .
	'<textarea name=\'texte\' id=\'text_area\' cols=\'40\' rows=\'' .
	plus(table_valeur(table_valeur(@$Pile[0], (string)'config', null),'lignes'),'2') .
	'\'>' .
	table_valeur(@$Pile[0], (string)'texte', null) .
	'</textarea>
	    </div>
	    <div class="fieldset fieldset_config">
	      <fieldset>
	      <div class="editer-groupe">
					<div class="editer editer_groupe_mots_associer">
						<label>' .
	_T('mots:info_mots_cles_association') .
	'</label>
						' .
	
'<'.'?php echo recuperer_fond( ' . argumenter_squelette('formulaires/inc-choisir-groupemots-tables-liees') . ', array(\'selected\' => ' . argumenter_squelette(interdire_scripts(table_valeur(@$Pile[0], (string)'tables_liees', null))) . ',
	\'name\' => ' . argumenter_squelette('tables_liees') . ',
	\'lang\' => ' . argumenter_squelette($GLOBALS["spip_lang"]) . '), array("compil"=>array(\'../plugins-dist/mots/formulaires/editer_groupe_mot.html\',\'html_e7503b51027681dbdb02b624282e46ed\',\'\',25,$GLOBALS[\'spip_lang\'])), _request("connect"));
?'.'>
	    		</div>
		    	' .
	(($t2 = strval(interdire_scripts((((((((((table_valeur(entites_html(table_valeur(@$Pile[0], (string)'config', null),true),'config_precise_groupes') == 'oui')) OR (interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'unseul', null),true) == 'oui')))) ?' ' :'')) OR (interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'obligatoire', null),true) == 'oui')))) ?' ' :'')) ?' ' :''))))!=='' ?
			($t2 . (	'
					<div class="editer editer_groupe_mots_reglage_avance">
						<div class=\'choix\'><input type=\'checkbox\' class=\'checkbox\' name=\'unseul\' value=\'oui\'' .
		(($t3 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'unseul', null),true) == 'oui')) ?' ' :''))))!=='' ?
				($t3 . 'checked=\'checked\'') :
				'') .
		' id=\'unseul\' /><label for=\'unseul\'>' .
		_T('mots:info_selection_un_seul_mot_cle') .
		'</label></div>
						<div class=\'choix\'><input type=\'checkbox\' class=\'checkbox\' name=\'obligatoire\' value=\'oui\'' .
		(($t3 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'obligatoire', null),true) == 'oui')) ?' ' :''))))!=='' ?
				($t3 . 'checked=\'checked\'') :
				'') .
		' id=\'obligatoire\' /><label for=\'obligatoire\'>' .
		_T('mots:avis_conseil_selection_mot_cle') .
		'</label></div>
					</div>
  	  		')) :
			'') .
	'
					<div class="editer editer_groupe_mots_editeur">
						<label>' .
	_T('mots:info_qui_attribue_mot_cle') .
	'</label>
						<div class=\'choix\'><input type=\'checkbox\' class=\'checkbox\' name=\'minirezo\' value=\'oui\'' .
	(($t2 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'minirezo', null),true) == 'oui')) ?' ' :''))))!=='' ?
			($t2 . 'checked=\'checked\'') :
			'') .
	' id=\'acces_minirezo\' /><label for=\'acces_minirezo\'>' .
	_T('mots:bouton_checkbox_qui_attribue_mot_cle_administrateurs') .
	'</label></div>
						<div class=\'choix\'><input type=\'checkbox\' class=\'checkbox\' name=\'comite\' value=\'oui\'' .
	(($t2 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'comite', null),true) == 'oui')) ?' ' :''))))!=='' ?
			($t2 . 'checked=\'checked\'') :
			'') .
	' id=\'acces_comite\' /><label for=\'acces_comite\'>' .
	_T('mots:bouton_checkbox_qui_attribue_mot_cle_redacteurs') .
	'</label></div>
						' .
	(($t2 = strval(interdire_scripts((((table_valeur(entites_html(table_valeur(@$Pile[0], (string)'config', null),true),'forums_publics') == 'non')) ?'' :' '))))!=='' ?
			($t2 . (	'
							' .
		(($t3 = strval(interdire_scripts(((((((table_valeur(entites_html(table_valeur(@$Pile[0], (string)'config', null),true),'mots_cles_forums') == 'oui')) OR (interdire_scripts((entites_html(table_valeur(@$Pile[0], (string)'forum', null),true) == 'oui')))) ?' ' :'')) ?' ' :''))))!=='' ?
				($t3 . (	'
							<div class=\'choix\'><input type=\'checkbox\' class=\'checkbox\' name=\'forum\' value=\'oui\'' .
			(($t4 = strval(interdire_scripts((((entites_html(table_valeur(@$Pile[0], (string)'forum', null),true) == 'oui')) ?' ' :''))))!=='' ?
					($t4 . 'checked=\'checked\'') :
					'') .
			' id=\'acces_forum\' /><label for=\'acces_forum\'>' .
			_T('mots:bouton_checkbox_qui_attribue_mot_cle_visiteurs') .
			'</label></div>
							')) :
				'') .
		'
						')) :
			'') .
	'
					<!--choix_acces-->
  	  		</div>
    		</div></fieldset>
	    </div>
	  </div>
	  ' .
	'
	  <!--extra-->
	  <p class=\'boutons\'><input type=\'submit\' class=\'submit\' value=\'' .
	_T('public|spip|ecrire:bouton_enregistrer') .
	'\' /></p>
	</div></form>
	')) :
		'') .
'
</div>
');

	return analyse_resultat_skel('html_e7503b51027681dbdb02b624282e46ed', $Cache, $page, '../plugins-dist/mots/formulaires/editer_groupe_mot.html');
}
?>