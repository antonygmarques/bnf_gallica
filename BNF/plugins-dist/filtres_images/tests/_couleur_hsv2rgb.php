<?php
/**
 * Test unitaire de la fonction _couleur_hsv2rgb
 * du fichier filtres/images_lib.php
 *
 * genere automatiquement par TestBuilder
 * le
 */


$test = '_couleur_hsv2rgb';
$remonte = "../";
while (!is_dir($remonte . "ecrire")) {
	$remonte = "../$remonte";
}
require $remonte . 'tests/test.inc';
find_in_path("filtres/images_lib.php", '', true);

//
// hop ! on y va
//
$err = tester_fun('_couleur_hsv2rgb', essais__couleur_hsv2rgb());

// si le tableau $err est pas vide ca va pas
if ($err) {
	die ('<dl>' . join('', $err) . '</dl>');
}

echo "OK";


function essais__couleur_hsv2rgb() {
	$essais = array(
		0 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 0,
				3 => 0,
			),
		1 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 63,
						'b' => 63,
					),
				1 => 0,
				2 => 0,
				3 => 0.25,
			),
		2 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 127,
						'b' => 127,
					),
				1 => 0,
				2 => 0,
				3 => 0.5,
			),
		3 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 191,
						'b' => 191,
					),
				1 => 0,
				2 => 0,
				3 => 0.75,
			),
		4 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 255,
						'b' => 255,
					),
				1 => 0,
				2 => 0,
				3 => 1,
			),
		5 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 0.25,
				3 => 0,
			),
		6 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 47,
						'b' => 47,
					),
				1 => 0,
				2 => 0.25,
				3 => 0.25,
			),
		7 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 95,
						'b' => 95,
					),
				1 => 0,
				2 => 0.25,
				3 => 0.5,
			),
		8 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 143,
						'b' => 143,
					),
				1 => 0,
				2 => 0.25,
				3 => 0.75,
			),
		9 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 191,
						'b' => 191,
					),
				1 => 0,
				2 => 0.25,
				3 => 1,
			),
		10 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 0.5,
				3 => 0,
			),
		11 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 31,
						'b' => 31,
					),
				1 => 0,
				2 => 0.5,
				3 => 0.25,
			),
		12 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 63,
						'b' => 63,
					),
				1 => 0,
				2 => 0.5,
				3 => 0.5,
			),
		13 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 95,
						'b' => 95,
					),
				1 => 0,
				2 => 0.5,
				3 => 0.75,
			),
		14 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 127,
						'b' => 127,
					),
				1 => 0,
				2 => 0.5,
				3 => 1,
			),
		15 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 0.75,
				3 => 0,
			),
		16 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 15,
						'b' => 15,
					),
				1 => 0,
				2 => 0.75,
				3 => 0.25,
			),
		17 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 31,
						'b' => 31,
					),
				1 => 0,
				2 => 0.75,
				3 => 0.5,
			),
		18 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 47,
						'b' => 47,
					),
				1 => 0,
				2 => 0.75,
				3 => 0.75,
			),
		19 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 63,
						'b' => 63,
					),
				1 => 0,
				2 => 0.75,
				3 => 1,
			),
		20 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 1,
				3 => 0,
			),
		21 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 1,
				3 => 0.25,
			),
		22 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 1,
				3 => 0.5,
			),
		23 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 1,
				3 => 0.75,
			),
		24 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 0,
						'b' => 0,
					),
				1 => 0,
				2 => 1,
				3 => 1,
			),
		25 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.25,
				2 => 0,
				3 => 0,
			),
		26 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.25,
				2 => 0,
				3 => 0.25,
			),
		27 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.25,
				2 => 0,
				3 => 0.5,
			),
		28 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.25,
				2 => 0,
				3 => 0.75,
			),
		29 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.25,
				2 => 0,
				3 => 1,
			),
		30 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.25,
				2 => 0.25,
				3 => 0,
			),
		31 =>
			array(
				0 =>
					array(
						'r' => 55,
						'g' => 63,
						'b' => 47,
					),
				1 => 0.25,
				2 => 0.25,
				3 => 0.25,
			),
		32 =>
			array(
				0 =>
					array(
						'r' => 111,
						'g' => 127,
						'b' => 95,
					),
				1 => 0.25,
				2 => 0.25,
				3 => 0.5,
			),
		33 =>
			array(
				0 =>
					array(
						'r' => 167,
						'g' => 191,
						'b' => 143,
					),
				1 => 0.25,
				2 => 0.25,
				3 => 0.75,
			),
		34 =>
			array(
				0 =>
					array(
						'r' => 223,
						'g' => 255,
						'b' => 191,
					),
				1 => 0.25,
				2 => 0.25,
				3 => 1,
			),
		35 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.25,
				2 => 0.5,
				3 => 0,
			),
		36 =>
			array(
				0 =>
					array(
						'r' => 47,
						'g' => 63,
						'b' => 31,
					),
				1 => 0.25,
				2 => 0.5,
				3 => 0.25,
			),
		37 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 127,
						'b' => 63,
					),
				1 => 0.25,
				2 => 0.5,
				3 => 0.5,
			),
		38 =>
			array(
				0 =>
					array(
						'r' => 143,
						'g' => 191,
						'b' => 95,
					),
				1 => 0.25,
				2 => 0.5,
				3 => 0.75,
			),
		39 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 255,
						'b' => 127,
					),
				1 => 0.25,
				2 => 0.5,
				3 => 1,
			),
		40 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.25,
				2 => 0.75,
				3 => 0,
			),
		41 =>
			array(
				0 =>
					array(
						'r' => 39,
						'g' => 63,
						'b' => 15,
					),
				1 => 0.25,
				2 => 0.75,
				3 => 0.25,
			),
		42 =>
			array(
				0 =>
					array(
						'r' => 79,
						'g' => 127,
						'b' => 31,
					),
				1 => 0.25,
				2 => 0.75,
				3 => 0.5,
			),
		43 =>
			array(
				0 =>
					array(
						'r' => 119,
						'g' => 191,
						'b' => 47,
					),
				1 => 0.25,
				2 => 0.75,
				3 => 0.75,
			),
		44 =>
			array(
				0 =>
					array(
						'r' => 159,
						'g' => 255,
						'b' => 63,
					),
				1 => 0.25,
				2 => 0.75,
				3 => 1,
			),
		45 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.25,
				2 => 1,
				3 => 0,
			),
		46 =>
			array(
				0 =>
					array(
						'r' => 31,
						'g' => 63,
						'b' => 0,
					),
				1 => 0.25,
				2 => 1,
				3 => 0.25,
			),
		47 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 127,
						'b' => 0,
					),
				1 => 0.25,
				2 => 1,
				3 => 0.5,
			),
		48 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 191,
						'b' => 0,
					),
				1 => 0.25,
				2 => 1,
				3 => 0.75,
			),
		49 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 255,
						'b' => 0,
					),
				1 => 0.25,
				2 => 1,
				3 => 1,
			),
		50 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.5,
				2 => 0,
				3 => 0,
			),
		51 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.5,
				2 => 0,
				3 => 0.25,
			),
		52 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.5,
				2 => 0,
				3 => 0.5,
			),
		53 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.5,
				2 => 0,
				3 => 0.75,
			),
		54 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.5,
				2 => 0,
				3 => 1,
			),
		55 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.5,
				2 => 0.25,
				3 => 0,
			),
		56 =>
			array(
				0 =>
					array(
						'r' => 47,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.5,
				2 => 0.25,
				3 => 0.25,
			),
		57 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.5,
				2 => 0.25,
				3 => 0.5,
			),
		58 =>
			array(
				0 =>
					array(
						'r' => 143,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.5,
				2 => 0.25,
				3 => 0.75,
			),
		59 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.5,
				2 => 0.25,
				3 => 1,
			),
		60 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.5,
				2 => 0.5,
				3 => 0,
			),
		61 =>
			array(
				0 =>
					array(
						'r' => 31,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.5,
				2 => 0.5,
				3 => 0.25,
			),
		62 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.5,
				2 => 0.5,
				3 => 0.5,
			),
		63 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.5,
				2 => 0.5,
				3 => 0.75,
			),
		64 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.5,
				2 => 0.5,
				3 => 1,
			),
		65 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.5,
				2 => 0.75,
				3 => 0,
			),
		66 =>
			array(
				0 =>
					array(
						'r' => 15,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.5,
				2 => 0.75,
				3 => 0.25,
			),
		67 =>
			array(
				0 =>
					array(
						'r' => 31,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.5,
				2 => 0.75,
				3 => 0.5,
			),
		68 =>
			array(
				0 =>
					array(
						'r' => 47,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.5,
				2 => 0.75,
				3 => 0.75,
			),
		69 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.5,
				2 => 0.75,
				3 => 1,
			),
		70 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.5,
				2 => 1,
				3 => 0,
			),
		71 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.5,
				2 => 1,
				3 => 0.25,
			),
		72 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.5,
				2 => 1,
				3 => 0.5,
			),
		73 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.5,
				2 => 1,
				3 => 0.75,
			),
		74 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.5,
				2 => 1,
				3 => 1,
			),
		75 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.75,
				2 => 0,
				3 => 0,
			),
		76 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 63,
						'b' => 63,
					),
				1 => 0.75,
				2 => 0,
				3 => 0.25,
			),
		77 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 127,
						'b' => 127,
					),
				1 => 0.75,
				2 => 0,
				3 => 0.5,
			),
		78 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 191,
						'b' => 191,
					),
				1 => 0.75,
				2 => 0,
				3 => 0.75,
			),
		79 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 255,
						'b' => 255,
					),
				1 => 0.75,
				2 => 0,
				3 => 1,
			),
		80 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.75,
				2 => 0.25,
				3 => 0,
			),
		81 =>
			array(
				0 =>
					array(
						'r' => 55,
						'g' => 47,
						'b' => 63,
					),
				1 => 0.75,
				2 => 0.25,
				3 => 0.25,
			),
		82 =>
			array(
				0 =>
					array(
						'r' => 111,
						'g' => 95,
						'b' => 127,
					),
				1 => 0.75,
				2 => 0.25,
				3 => 0.5,
			),
		83 =>
			array(
				0 =>
					array(
						'r' => 167,
						'g' => 143,
						'b' => 191,
					),
				1 => 0.75,
				2 => 0.25,
				3 => 0.75,
			),
		84 =>
			array(
				0 =>
					array(
						'r' => 223,
						'g' => 191,
						'b' => 255,
					),
				1 => 0.75,
				2 => 0.25,
				3 => 1,
			),
		85 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.75,
				2 => 0.5,
				3 => 0,
			),
		86 =>
			array(
				0 =>
					array(
						'r' => 47,
						'g' => 31,
						'b' => 63,
					),
				1 => 0.75,
				2 => 0.5,
				3 => 0.25,
			),
		87 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 63,
						'b' => 127,
					),
				1 => 0.75,
				2 => 0.5,
				3 => 0.5,
			),
		88 =>
			array(
				0 =>
					array(
						'r' => 143,
						'g' => 95,
						'b' => 191,
					),
				1 => 0.75,
				2 => 0.5,
				3 => 0.75,
			),
		89 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 127,
						'b' => 255,
					),
				1 => 0.75,
				2 => 0.5,
				3 => 1,
			),
		90 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.75,
				2 => 0.75,
				3 => 0,
			),
		91 =>
			array(
				0 =>
					array(
						'r' => 39,
						'g' => 15,
						'b' => 63,
					),
				1 => 0.75,
				2 => 0.75,
				3 => 0.25,
			),
		92 =>
			array(
				0 =>
					array(
						'r' => 79,
						'g' => 31,
						'b' => 127,
					),
				1 => 0.75,
				2 => 0.75,
				3 => 0.5,
			),
		93 =>
			array(
				0 =>
					array(
						'r' => 119,
						'g' => 47,
						'b' => 191,
					),
				1 => 0.75,
				2 => 0.75,
				3 => 0.75,
			),
		94 =>
			array(
				0 =>
					array(
						'r' => 159,
						'g' => 63,
						'b' => 255,
					),
				1 => 0.75,
				2 => 0.75,
				3 => 1,
			),
		95 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 0.75,
				2 => 1,
				3 => 0,
			),
		96 =>
			array(
				0 =>
					array(
						'r' => 31,
						'g' => 0,
						'b' => 63,
					),
				1 => 0.75,
				2 => 1,
				3 => 0.25,
			),
		97 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 0,
						'b' => 127,
					),
				1 => 0.75,
				2 => 1,
				3 => 0.5,
			),
		98 =>
			array(
				0 =>
					array(
						'r' => 95,
						'g' => 0,
						'b' => 191,
					),
				1 => 0.75,
				2 => 1,
				3 => 0.75,
			),
		99 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 0,
						'b' => 255,
					),
				1 => 0.75,
				2 => 1,
				3 => 1,
			),
		100 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 0,
				3 => 0,
			),
		101 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 63,
						'b' => 63,
					),
				1 => 1,
				2 => 0,
				3 => 0.25,
			),
		102 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 127,
						'b' => 127,
					),
				1 => 1,
				2 => 0,
				3 => 0.5,
			),
		103 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 191,
						'b' => 191,
					),
				1 => 1,
				2 => 0,
				3 => 0.75,
			),
		104 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 255,
						'b' => 255,
					),
				1 => 1,
				2 => 0,
				3 => 1,
			),
		105 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 0.25,
				3 => 0,
			),
		106 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 47,
						'b' => 47,
					),
				1 => 1,
				2 => 0.25,
				3 => 0.25,
			),
		107 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 95,
						'b' => 95,
					),
				1 => 1,
				2 => 0.25,
				3 => 0.5,
			),
		108 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 143,
						'b' => 143,
					),
				1 => 1,
				2 => 0.25,
				3 => 0.75,
			),
		109 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 191,
						'b' => 191,
					),
				1 => 1,
				2 => 0.25,
				3 => 1,
			),
		110 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 0.5,
				3 => 0,
			),
		111 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 31,
						'b' => 31,
					),
				1 => 1,
				2 => 0.5,
				3 => 0.25,
			),
		112 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 63,
						'b' => 63,
					),
				1 => 1,
				2 => 0.5,
				3 => 0.5,
			),
		113 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 95,
						'b' => 95,
					),
				1 => 1,
				2 => 0.5,
				3 => 0.75,
			),
		114 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 127,
						'b' => 127,
					),
				1 => 1,
				2 => 0.5,
				3 => 1,
			),
		115 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 0.75,
				3 => 0,
			),
		116 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 15,
						'b' => 15,
					),
				1 => 1,
				2 => 0.75,
				3 => 0.25,
			),
		117 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 31,
						'b' => 31,
					),
				1 => 1,
				2 => 0.75,
				3 => 0.5,
			),
		118 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 47,
						'b' => 47,
					),
				1 => 1,
				2 => 0.75,
				3 => 0.75,
			),
		119 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 63,
						'b' => 63,
					),
				1 => 1,
				2 => 0.75,
				3 => 1,
			),
		120 =>
			array(
				0 =>
					array(
						'r' => 0,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 1,
				3 => 0,
			),
		121 =>
			array(
				0 =>
					array(
						'r' => 63,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 1,
				3 => 0.25,
			),
		122 =>
			array(
				0 =>
					array(
						'r' => 127,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 1,
				3 => 0.5,
			),
		123 =>
			array(
				0 =>
					array(
						'r' => 191,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 1,
				3 => 0.75,
			),
		124 =>
			array(
				0 =>
					array(
						'r' => 255,
						'g' => 0,
						'b' => 0,
					),
				1 => 1,
				2 => 1,
				3 => 1,
			),
	);

	return $essais;
}


?>