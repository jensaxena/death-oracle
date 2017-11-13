// namespace declaration
const death = {};

// wordlists
death.verbs = [
  'annihilated',
  'asphyxiated',
  'assassinated',
  'axed',
  'buried',
  'butchered',
  'compressed',
  'consumed',
  'crucified',
  'crushed',
  'cut',
  'decimated',
  'defenestrated',
  'dessicated',
  'diced',
  'dismembered',
  'drowned',
  'electrocuted',
  'expired',
  'executed',
  'exterminated',
  'extinguished',
  'guillotined',
  'hacked',
  'hit',
  'immolated',
  'impaled',
  'incinerated',
  'liquified',
  'maimed',
  'martyred',
  'massacred',
  'murdered',
  'nuked',
  'obliterated',
  'poisoned',
  'ruined',
  'sacrificed',
  'shattered',
  'slain',
  'slaughtered',
  'sliced',
  'smashed',
  'smothered',
  'splattered',
  'squashed',
  'squeezed',
  'stretched',
  'strangled',
  'suffocated',
  'torpedoed',
  'wasted',
  'wrecked',
  'vaporized',
  'zapped',
  'zombified',
];
death.adjs = [
  'abruptly',
  'amicably',
  'angrily',
  'anxiously',
  'belligerently',
  'boldly',
  'bloodlessly',
  'bloodthirstily',
  'brutally',
  'callously',
  'comfortably',
  'crazily',
  'delicately',
  'demonically',
  'easily',
  'fiercely',
  'firmly',
  'fleshily',
  'fluidly',
  'forcefully',
  'forcibly',
  'frantically',
  'furiously',
  'gently',
  'homicidally',
  'horribly',
  'limply',
  'magnificently',
  'maniacally',
  'mightily',
  'monsterously',
  'mushily',
  'peacefully',
  'placidly',
  'powerfully',
  'quickly',
  'quietly',
  'riotously',
  'roughly',
  'savagely',
  'sedately',
  'serenely',
  'severely',
  'slowly',
  'smoothly',
  'steadily',
  'stiffly',
  'tempestuously',
  'thickly',
  'toothily',
  'tranquilly',
  'uncontrollably',
  'unexpectedly',
  'unspeakably',
  'venomously',
  'viciously',
  'wildly',
  'willingly',
];
death.nouns = [
  'at a fireworks factory',
  'at the age of ninety-seven',
  'at the beach',
  'at the movies',
  'at the peak of a volcano',
  'at the public library',
  'by a bear',
  'by a city bus',
  'by a dingo',
  'by a swarm of gnats',
  'by a tiger',
  'by a tornado',
  'by a vampire',
  'by an avalanche',
  'by bees',
  'by Chuck Norris',
  'by kittens',
  'by lightning',
  'by Mr. T',
  'by prehistoric lizards',
  'by Shia laBeouf',
  'by sharks',
  'by snakes',
  'by wild horses',
  'by the Loch Ness Monster',
  'in a blender',
  'in a truck',
  'in bed',
  'in outer space',
  'in the basement',
  'in the bathroom',
  'in the closet',
  'in the eye',
  'in the kitchen',
  'in the knee',
  'in the lake',
  'in the sea',
  'in the shower',
  'on a boat',
  'on a farm',
  'on a plane',
  'on a skyscraper',
  'on an alien craft',
  'on the head',
  'on the surface of the moon',
  'with a banana',
  'with a brick',
  'with a candlestick',
  'with a chainsaw',
  'with a fork',
  'with a large stick',
  'with a rubber mallet',
  'with a sock full of pennies',
  'with shoes',
  'with spoons',
];

death.generator = function() {

  // listen for submit event
  $('form').on('submit', function(e) {

    // prevent page reload
    e.preventDefault();

    // validate, save & display name input
    death.dearlyDeparted = $('input').val();

    if (death.dearlyDeparted === '') {

      // demand satisfaction
      $('input').toggleClass('insist');
      } else {

        // change header text
        $('h1').text('Rest in Peace');

        // display username
        $('#name').text(`${death.dearlyDeparted}`);

        // hide input
        $('input').hide();

        // random word selection
        death.getVerb = Math.floor(Math.random()*death.verbs.length);

        death.getAdj = Math.floor(Math.random()*death.adjs.length);

        death.getNoun = Math.floor(Math.random()*death.nouns.length);

        // pass judgement
        death.sentence = `${death.verbs[death.getVerb]} ${death.adjs[death.getAdj]} ${death.nouns[death.getNoun]}`;

        // write sentence
        $('#causeOfDeath').text(death.sentence);

        // change choose button
        $('#choose').text('( Pick Again )');

        // show reset button
        $('#reset').removeClass('visually-hidden').on('click', function(){
          location.reload(true);
        });

        // show tweet button, autopopulate
        $('.tweet').removeClass('visually-hidden').attr('href', `https://twitter.com/intent/tweet?text=I%20will%20be%20${death.sentence}!%20Consult%20the%20Death Oracle%20to%20discover%20your%20fate:%20https://jensaxena.github.io/death-oracle`);

      // end else
      };

  // end event listener
  });

// end death generator
};

// fire at will
death.init = function() {
  death.generator();
};

// document ready
$(death.init);
