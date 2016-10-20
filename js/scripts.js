jQuery(document).ready(function($) {

// Première page - Gestion de boutons

	$('#premiere-page button').on('click', function (event) {
		event.preventDefault();
		$(this).removeClass('btn-default').addClass('btn-success').siblings().removeClass('btn-success choix').addClass('btn-default');

		var nombBtnSuccess = $('.lesBoutons').find('.btn-success').length;

		if (nombBtnSuccess == 2) {
			$('.lesBoutons').find('button[disabled]').removeAttr('disabled');
		};
	});

	var choseOctave = '';
	var choseKey = '';
	var boutonJouer = '0';

	$('#button-jouer').on('click', function (event) {
		event.preventDefault();
		$('#deuxieme-page').css('display','block');
		boutonJouer++;
		$('.notes-resultat h4').text('0 / 0');
		$('.note-previous').text('-');

		$('#premiere-page').removeClass('premiere-page-bouge-right').addClass('premiere-page-bouge-left');
		choseOctave = $('#les-octaves').find('.btn-success').data('chose');
		choseKey = $('#les-cles').find('.btn-success').data('chose');

		if (choseOctave == 'oneoctave' && choseKey == 'keyfa') {
			$('.key').removeClass('key-sol').addClass('key-fa');
			cleFa1octave();
		}
		else if (choseOctave == 'oneoctave' && choseKey == 'keysol') {
			$('.key').removeClass('key-fa').addClass('key-sol');
			cleSol1octave();
		}
		else if (choseOctave == 'twooctaves' && choseKey == 'keyfa') {
			$('.key').removeClass('key-sol').addClass('key-fa');
			cleFa2octaves();
		}
		else {
			$('.key').removeClass('key-fa').addClass('key-sol');
			cleSol2octaves();
		}
	});

//Deuxième page - Présentation des portées

	$('.button-return').on('click', function (event) {
		event.preventDefault();
		$('#premiere-page').removeClass('premiere-page-bouge-left').addClass('premiere-page-bouge-right');
	});

	var cleOctave = '';

	$('.notes-resultat h4').text('0 / 0');

	//Clé de Sol, 1 octave
	function cleSol1octave() {

		cleOctave = 'Sol1Octave';

		$('.unenote').remove();

		var noteMini = 1;
		var noteMax = 7;
		var loop = 1;
		var classNote = '';
		var note = '';
		var laNote = '';
		var Inverse = '11';
		var queueNote = '';

		while (loop < 12) {

			note = Math.floor(Math.random() * noteMax + noteMini);

			switch (note) {
				case 1:
					classNote = ' k-sol-octave1-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 2:
					classNote = ' k-sol-octave1-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 3:
					classNote = ' k-sol-octave1-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 4:
					classNote = ' k-sol-octave1-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 5:
					classNote = ' k-sol-octave1-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 6:
					classNote = ' k-sol-octave1-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				case 7:
					classNote = ' k-sol-octave1-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
				break;
				default:

			};

			var laBarre = '';

			if (classNote == ' k-sol-octave1-do' ) {
				laBarre = '<div class="bar"></div>';
			}

			if (queueNote == 'UP') {
				laQueue = '<div class="queue-up"></div>';
			}
			else {
				laQueue = '<div class="queue-down"></div>';
			}

			$('.key').after(
				'<div class="col-xs-1 unenote">' +
					'<div class="one-note' + classNote + noteChiffre + '" data-sanote="' + laNote + '">' + laBarre + laQueue + '</div>' +
				'</div>'
			);

			loop++;
			Inverse--;

		};

	};
	// / Clé de Sol, 1 octave

	//Clé de Sol, 2 octaves
	function cleSol2octaves() {

		cleOctave = 'Sol2Octaves';

		$('.unenote').remove();

		var noteMini = 1;
		var noteMax = 14;
		var loop = 1;
		var classNote = '';
		var note = '';
		var laNote = '';
		var Inverse = '11';
		var queueNote = '';

		while (loop < 12) {

			note = Math.floor(Math.random() * noteMax + noteMini);

			switch (note) {
				case 1:
					classNote = ' k-sol-octave1-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 2:
					classNote = ' k-sol-octave1-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 3:
					classNote = ' k-sol-octave1-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 4:
					classNote = ' k-sol-octave1-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 5:
					classNote = ' k-sol-octave1-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 6:
					classNote = ' k-sol-octave1-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 7:
					classNote = ' k-sol-octave1-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 8:
					classNote = ' k-sol-octave2-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 9:
					classNote = ' k-sol-octave2-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 10:
					classNote = ' k-sol-octave2-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 11:
					classNote = ' k-sol-octave2-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 12:
					classNote = ' k-sol-octave2-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 13:
					classNote = ' k-sol-octave2-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 14:
					classNote = ' k-sol-octave2-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				default:

			};

			var laBarre = '';

			if (classNote == ' k-sol-octave1-do' || classNote == ' k-sol-octave2-la' ) {
				laBarre = '<div class="bar"></div>';
			};
			if (classNote == ' k-sol-octave2-si') {
				laBarre = '<div class="bar-down"></div>';
			};

			if (queueNote == 'UP') {
				laQueue = '<div class="queue-up"></div>';
			}
			else {
				laQueue = '<div class="queue-down"></div>';
			}

			$('.key').after(
				'<div class="col-xs-1 unenote">' +
				'<div class="one-note' + classNote + noteChiffre + '" data-sanote="' + laNote + '">' + laBarre + laQueue + '</div>' +
				'</div>'
			);

			loop++;
			Inverse--;

		};

	};
	// / Clé de Sol, 2 octaves

	//Clé de Fa, 1 octave
	function cleFa1octave() {

		cleOctave = 'Fa1Octave';

		$('.unenote').remove();

		var noteMini = 1;
		var noteMax = 7;
		var loop = 1;
		var classNote = '';
		var note = '';
		var laNote = '';
		var Inverse = '11';
		var queueNote = '';

		while (loop < 12) {

			note = Math.floor(Math.random() * noteMax + noteMini);

			switch (note) {
				case 1:
					classNote = ' k-fa-octave1-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 2:
					classNote = ' k-fa-octave1-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 3:
					classNote = ' k-fa-octave1-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 4:
					classNote = ' k-fa-octave1-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 5:
					classNote = ' k-fa-octave1-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 6:
					classNote = ' k-fa-octave1-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 7:
					classNote = ' k-fa-octave1-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				default:

			};

			if (queueNote == 'UP') {
				laQueue = '<div class="queue-up"></div>';
			}
			else {
				laQueue = '<div class="queue-down"></div>';
			}

			$('.key').after(
				'<div class="col-xs-1 unenote">' +
				'<div class="one-note' + classNote + noteChiffre + '" data-sanote="' + laNote + '">' + laQueue + '</div>' +
				'</div>'
			);

			loop++;
			Inverse--;

		};

	};
	// / Clé de Fa, 1 octave

	//Clé de Fa, 2 octaves
	function cleFa2octaves() {

		cleOctave = 'Fa2Octaves';

		$('.unenote').remove();

		var noteMini = 1;
		var noteMax = 14;
		var loop = 1;
		var classNote = '';
		var note = '';
		var laNote = '';
		var Inverse = '11';
		var queueNote = '';

		while (loop < 12) {

			note = Math.floor(Math.random() * noteMax + noteMini);

			switch (note) {
				case 1:
					classNote = ' k-fa-octave1-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 2:
					classNote = ' k-fa-octave1-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 3:
					classNote = ' k-fa-octave1-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 4:
					classNote = ' k-fa-octave1-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 5:
					classNote = ' k-fa-octave1-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 6:
					classNote = ' k-fa-octave1-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 7:
					classNote = ' k-fa-octave1-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'DOWN';
					break;
				case 8:
					classNote = ' k-fa-octave2-do';
					laNote = 'do';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 9:
					classNote = ' k-fa-octave2-re';
					laNote = 're';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 10:
					classNote = ' k-fa-octave2-mi';
					laNote = 'mi';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 11:
					classNote = ' k-fa-octave2-fa';
					laNote = 'fa';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 12:
					classNote = ' k-fa-octave2-sol';
					laNote = 'sol';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 13:
					classNote = ' k-fa-octave2-la';
					laNote = 'la';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				case 14:
					classNote = ' k-fa-octave2-si';
					laNote = 'si';
					noteChiffre = ' note-' + Inverse;
					saNote = noteChiffre + '-' + laNote;
					queueNote = 'UP';
					break;
				default:

			};

			var laBarre = '';

			if (classNote == ' k-fa-octave2-mi') {
				laBarre = '<div class="bar"></div>';
			};
			if (classNote == ' k-fa-octave2-re') {
				laBarre = '<div class="bar-up"></div>';
			};
			if (classNote == ' k-fa-octave2-do') {
				laBarre = '<div class="bar-double"></div>';
			};

			if (queueNote == 'UP') {
				laQueue = '<div class="queue-up"></div>';
			}
			else {
				laQueue = '<div class="queue-down"></div>';
			}

			$('.key').after(
				'<div class="col-xs-1 unenote">' +
				'<div class="one-note' + classNote + noteChiffre + '" data-sanote="' + laNote + '">' + laBarre + laQueue + '</div>' +
				'</div>'
			);

			loop++;
			Inverse--;

		};

	};
	// / Clé de Fa, 2 octaves

		var choixNote = '';
		var loopChoix = '1';
		var notePortee = '';
		var bonneNote = '0';
		var notesResultat = '0';

		$('.choixnote').on('click', function (event) {
			event.preventDefault();

			if (boutonJouer > '1') {
				bonneNote = '0';
				notesResultat = '0';
				loopChoix = '1';
				boutonJouer = '1';
			}

			//Calcul de la note

			choixNote = $(this).data('noteclic');
			notePortee = $('.note-' + loopChoix).data('sanote');

			if (notePortee == choixNote) {
				$('.note-' + loopChoix).addClass('bonnenote');
				bonneNote++;
				notesResultat++;
				$('.notes-resultat h4').text(bonneNote + ' / ' + notesResultat);
			}
			else {
				$('.note-' + loopChoix).addClass('mauvaisenote');
				notesResultat++;
				$('.notes-resultat h4').text(bonneNote + ' / ' + notesResultat);
			};

			$('.note-previous').text(notePortee);

			loopChoix++;

			//Relance un aléatoire des notes quand le joueur à fini la portée

			if (loopChoix == 12) {
				loopChoix = 1;
				if (cleOctave == 'Sol1Octave') {
					cleSol1octave();
				}
				else if (cleOctave == 'Sol2Octaves' ) {
					cleSol2octaves();
				}
				else if (cleOctave == 'Fa1Octave') {
					cleFa1octave();
				}
				else if (cleOctave == 'Fa2Octaves') {
					cleFa2octaves();
				}
			};
		});

});