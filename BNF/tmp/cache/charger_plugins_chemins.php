<?php

if (defined('_ECRIRE_INC_VERSION')) {
define('_DIR_PLUGIN_COMPAGNON',_DIR_PLUGINS_DIST.'compagnon/');
define('_DIR_PLUGIN_DUMP',_DIR_PLUGINS_DIST.'dump/');
define('_DIR_PLUGIN_IMAGES',_DIR_PLUGINS_DIST.'filtres_images/');
define('_DIR_PLUGIN_FORUM',_DIR_PLUGINS_DIST.'forum/');
define('_DIR_PLUGIN_JQUERYUI',_DIR_PLUGINS_DIST.'jquery_ui/');
define('_DIR_PLUGIN_MEDIABOX',_DIR_PLUGINS_DIST.'mediabox/');
define('_DIR_PLUGIN_MOTS',_DIR_PLUGINS_DIST.'mots/');
define('_DIR_PLUGIN_ORGANISEUR',_DIR_PLUGINS_DIST.'organiseur/');
define('_DIR_PLUGIN_PETITIONS',_DIR_PLUGINS_DIST.'petitions/');
define('_DIR_PLUGIN_PLAN',_DIR_PLUGINS_DIST.'plan/');
define('_DIR_PLUGIN_PORTE_PLUME',_DIR_PLUGINS_DIST.'porte_plume/');
define('_DIR_PLUGIN_REVISIONS',_DIR_PLUGINS_DIST.'revisions/');
define('_DIR_PLUGIN_SAFEHTML',_DIR_PLUGINS_DIST.'safehtml/');
define('_DIR_PLUGIN_SITES',_DIR_PLUGINS_DIST.'sites/');
define('_DIR_PLUGIN_SQUELETTES_PAR_RUBRIQUE',_DIR_PLUGINS_DIST.'squelettes_par_rubrique/');
define('_DIR_PLUGIN_STATS',_DIR_PLUGINS_DIST.'statistiques/');
define('_DIR_PLUGIN_SVP',_DIR_PLUGINS_DIST.'svp/');
define('_DIR_PLUGIN_TW',_DIR_PLUGINS_DIST.'textwheel/');
define('_DIR_PLUGIN_URLS',_DIR_PLUGINS_DIST.'urls_etendues/');
define('_DIR_PLUGIN_VERTEBRES',_DIR_PLUGINS_DIST.'vertebres/');
define('_DIR_PLUGIN_SKELEDITOR',_DIR_PLUGINS.'auto/skeleditor/v2.7.11/');
define('_DIR_PLUGIN_ITERATEURS',_DIR_RESTREINT.'procure:iterateurs/');
define('_DIR_PLUGIN_QUEUE',_DIR_RESTREINT.'procure:queue/');
define('_DIR_PLUGIN_JQUERY',_DIR_RESTREINT.'procure:jquery/');
define('_DIR_PLUGIN_PHP',_DIR_RESTREINT.'procure:php/');
define('_DIR_PLUGIN_BREVES',_DIR_PLUGINS_DIST.'breves/');
define('_DIR_PLUGIN_COMPRESSEUR',_DIR_PLUGINS_DIST.'compresseur/');
define('_DIR_PLUGIN_MEDIAS',_DIR_PLUGINS_DIST.'medias/');
if (_DIR_RESTREINT) _chemin(implode(':',array(_DIR_PLUGIN_MEDIAS,_DIR_PLUGIN_MEDIAS.'squelettes/',_DIR_PLUGIN_COMPRESSEUR,_DIR_PLUGIN_BREVES,_DIR_PLUGIN_SKELEDITOR,_DIR_PLUGIN_VERTEBRES,_DIR_PLUGIN_URLS,_DIR_PLUGIN_TW,_DIR_PLUGIN_SVP,_DIR_PLUGIN_STATS,_DIR_PLUGIN_SQUELETTES_PAR_RUBRIQUE,_DIR_PLUGIN_SITES,_DIR_PLUGIN_SAFEHTML,_DIR_PLUGIN_REVISIONS,_DIR_PLUGIN_PORTE_PLUME,_DIR_PLUGIN_PLAN,_DIR_PLUGIN_PETITIONS,_DIR_PLUGIN_ORGANISEUR,_DIR_PLUGIN_MOTS,_DIR_PLUGIN_MEDIABOX,_DIR_PLUGIN_JQUERYUI,_DIR_PLUGIN_JQUERYUI.'prive/',_DIR_PLUGIN_FORUM,_DIR_PLUGIN_IMAGES,_DIR_PLUGIN_DUMP,_DIR_PLUGIN_COMPAGNON)));
else _chemin(implode(':',array(_DIR_PLUGIN_MEDIAS,_DIR_PLUGIN_MEDIAS.'squelettes/',_DIR_PLUGIN_COMPRESSEUR,_DIR_PLUGIN_BREVES,_DIR_PLUGIN_SKELEDITOR,_DIR_PLUGIN_VERTEBRES,_DIR_PLUGIN_URLS,_DIR_PLUGIN_TW,_DIR_PLUGIN_SVP,_DIR_PLUGIN_STATS,_DIR_PLUGIN_SQUELETTES_PAR_RUBRIQUE,_DIR_PLUGIN_SITES,_DIR_PLUGIN_SAFEHTML,_DIR_PLUGIN_REVISIONS,_DIR_PLUGIN_PORTE_PLUME,_DIR_PLUGIN_PLAN,_DIR_PLUGIN_PETITIONS,_DIR_PLUGIN_ORGANISEUR,_DIR_PLUGIN_MOTS,_DIR_PLUGIN_MEDIABOX,_DIR_PLUGIN_JQUERYUI,_DIR_PLUGIN_JQUERYUI.'prive/',_DIR_PLUGIN_FORUM,_DIR_PLUGIN_IMAGES,_DIR_PLUGIN_DUMP,_DIR_PLUGIN_COMPAGNON)));
}
?>