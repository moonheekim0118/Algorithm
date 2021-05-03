/**
 * @param {number[]} arr
 * @return {number}
 */

var lenLongestFibSubseq = function (arr) {
  const map = new Map();
  let max = 0;
  for (let a of arr) {
    map.set(a, true);
  }
  const size = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      let left = arr[i];
      let right = arr[j];
      let subLength = 0;
      while (map.has(left + right)) {
        subLength++;
        let sum = left + right;
        left = right;
        right = sum;
      }
      if (subLength > 0) {
        max = Math.max(max, subLength + 2);
      }
    }
  }
  return max;
};

var lenLongestFibSubseq = function (arr) {
  const found = {};
  const size = arr.length;
  const combinationList = [];
  const limit = Math.max(...arr);
  let Max = 0;
  function getCombination(n, tmp, start) {
    if (n === 2) {
      if (tmp[0] + tmp[1] > limit) return;
      combinationList.push([...tmp]);
      return;
    }
    for (let i = start; i < size; i++) {
      tmp.push(arr[i]);
      getCombination(n + 1, tmp, i + 1);
      tmp.pop();
    }
  }

  getCombination(0, [], 0);
  for (let comb of combinationList) {
    const sub = [...comb];
    let targetIdx = -1;
    let idx = 0;
    do {
      const key = `${sub[idx]}+${sub[idx + 1]}`;
      if (found[key]) break;
      found[key] = true;
      const target = sub[idx] + sub[idx + 1];
      if (target > limit) break;
      targetIdx = arr.indexOf(target);
      if (targetIdx !== -1) sub.push(target);
      idx++;
    } while (targetIdx !== -1 && idx < size - 1);
    console.log(sub);
    if (sub.length > 2) {
      Max = Math.max(sub.length, Max);
    }
    if (Max === size) break;
  }
  return Max;
};

lenLongestFibSubseq([
  3,
  6,
  7,
  15,
  17,
  18,
  21,
  25,
  27,
  28,
  29,
  34,
  35,
  36,
  39,
  43,
  44,
  56,
  58,
  60,
  64,
  71,
  73,
  79,
  83,
  88,
  89,
  90,
  91,
  99,
  108,
  112,
  115,
  116,
  122,
  133,
  147,
  159,
  163,
  177,
  179,
  185,
  186,
  191,
  201,
  204,
  238,
  258,
  262,
  269,
  297,
  299,
  301,
  310,
  320,
  323,
  385,
  417,
  425,
  448,
  482,
  487,
  490,
  524,
  623,
  675,
  687,
  717,
  779,
  788,
  789,
  797,
  844,
  847,
  1008,
  1092,
  1112,
  1165,
  1261,
  1275,
  1279,
  1284,
  1368,
  1371,
  1631,
  1767,
  1799,
  1882,
  2040,
  2063,
  2068,
  2081,
  2212,
  2218,
  2639,
  2859,
  2911,
  3047,
  3301,
  3338,
  3347,
  3365,
  3580,
  3589,
  4270,
  4626,
  4710,
  4929,
  5341,
  5401,
  5415,
  5446,
  5792,
  5807,
  6909,
  7485,
  7621,
  7976,
  8642,
  8739,
  9372,
  9396,
  11179,
  12111,
  12331,
  13983,
  14140,
  15164,
  15203,
  18088,
  19596,
  19952,
  22625,
  24536,
  24599,
  29267,
  31707,
  32283,
  36608,
  39700,
  47355,
  51303,
  52235,
  59233,
  64236,
  76622,
  83010,
  84518,
  95841,
  103936,
  123977,
  134313,
  136753,
  155074,
  168172,
  200599,
  217323,
  221271,
  250915,
  272108,
  324576,
  351636,
  358024,
  405989,
  440280,
  525175,
  568959,
  579295,
  656904,
  712388,
  849751,
  879681,
  920595,
  937319,
  1062893,
  1152668,
  1374926,
  1489554,
  1516614,
  1719797,
  1865056,
  2224677,
  2410149,
  2453933,
  2782690,
  2831112,
  3017724,
  3319613,
  3599603,
  3899703,
  3970547,
  4502487,
  6309852,
  6424480,
  6514650,
  7285177,
  7875012,
  8656075,
  9242428,
  10395027,
  12643256,
  14522379,
  16819507,
  18165587,
  18264118,
  18342206,
  19665640,
  20745040,
  21055137,
  21511898,
  22896975,
  26241553,
  28808639,
  29527825,
  31212126,
  34911180,
  35404655,
  36894665,
  37306864,
  37497337,
  38868259,
  39009177,
  39728989,
  39854777,
  40852602,
  42228692,
  43388101,
  45129794,
  46500346,
  47091416,
  47394905,
  48841673,
  48844422,
  49191874,
  49218927,
  49302301,
  49514153,
  51235203,
  52035374,
  53469350,
  55192606,
  56856151,
  57192546,
  61214290,
  61293927,
  61874246,
  61878324,
  63062566,
  63211053,
  64536299,
  65737898,
  66645254,
  69885427,
  69931670,
  71057321,
  71993134,
  74925195,
  75187314,
  76770166,
  77108910,
  77549213,
  81370069,
  83115858,
  86559526,
  86625872,
  89499723,
  89589528,
  90723860,
  91745236,
  93599814,
  96918957,
  97224448,
  98163360,
  102125351,
  104209723,
  104906977,
  104953609,
  105126016,
  105814397,
  109080158,
  109370603,
  109973322,
  112191182,
  112429402,
  112758722,
  114273856,
  114846317,
  115087486,
  115922476,
  115956451,
  118929649,
  119952886,
  121410657,
  121774120,
  122409600,
  124515390,
  125821950,
  127449168,
  128271089,
  129252717,
  130718584,
  131621185,
  131817851,
  132205376,
  132750203,
  134454987,
  135640996,
  135698959,
  138873825,
  138907829,
  139571373,
  140250056,
  140326823,
  141184532,
  141500782,
  141745954,
  141991902,
  142498312,
  142821642,
  145535258,
  145930619,
  146710836,
  147045099,
  148358287,
  149821839,
  150416614,
  151462861,
  152240104,
  154674450,
  155364321,
  155650817,
  156433480,
  158244812,
  164786456,
  167416991,
  171797410,
  172702656,
  173520729,
  173534064,
  174279182,
  175035959,
  177349204,
  178246719,
  179055718,
  180061568,
  180897402,
  181663274,
  185443881,
  186276712,
  190110703,
  190636142,
  191136768,
  192828846,
  193542985,
  196364627,
  198743414,
  199368222,
  200698536,
  202172147,
  202267448,
  202896489,
  206057791,
  207485052,
  207490807,
  209458249,
  212865447,
  213059204,
  214983945,
  220022472,
  220996756,
  221450054,
  224801386,
  225124256,
  225384340,
  225698369,
  225706645,
  225722778,
  225758334,
  227445654,
  228088262,
  228715955,
  234094444,
  234148869,
  235911824,
  236045453,
  237300800,
  237341151,
  239014122,
  239030640,
  242085480,
  242935542,
  243591733,
  244673843,
  244758426,
  245057157,
  248243530,
  250881190,
  253252184,
  253575861,
  253791591,
  254757044,
  256950120,
  257124843,
  258022817,
  258420196,
  258432108,
  258663051,
  258819286,
  262811379,
  262962505,
  265709844,
  266291931,
  266301724,
  266475546,
  266597872,
  267767306,
  270760414,
  274283765,
  274641586,
  276674631,
  277776506,
  278111113,
  279645413,
  280250900,
  280260139,
  281152894,
  283453721,
  283692803,
  283945437,
  283987356,
  286004793,
  286261772,
  288811632,
  288877135,
  290105923,
  291664044,
  292394259,
  294066028,
  296375244,
  296539372,
  296550878,
  296729284,
  297022593,
  297585090,
  298229351,
  298673756,
  300117024,
  300216263,
  300312612,
  301041857,
  302985827,
  303848305,
  306010308,
  307707103,
  308714655,
  308836642,
  308860880,
  309103015,
  309925725,
  310103860,
  310212765,
  312040365,
  313239788,
  313423880,
  314381641,
  314898961,
  318281066,
  318309478,
  318577840,
  319124745,
  319973038,
  320481737,
  321189591,
  321875393,
  321986876,
  324385721,
  325358386,
  325998970,
  327105482,
  329013861,
  329830956,
  331104244,
  333400417,
  335136747,
  336328760,
  338140448,
  342468778,
  343732647,
  344245219,
  345626762,
  347182507,
  348957763,
  349549044,
  349657433,
  355855326,
  356319938,
  356563162,
  356722866,
  357499454,
  358987898,
  361953010,
  366747227,
  367285358,
  368148847,
  369075057,
  369681853,
  375091635,
  379520339,
  379564727,
  380555830,
  380824841,
  383071656,
  389382851,
  389443734,
  390446065,
  395815827,
  396611097,
  396676402,
  396953547,
  397044210,
  398865424,
  400728852,
  401037285,
  402011520,
  402023401,
  402670067,
  405085774,
  405696223,
  407172889,
  407381428,
  409058154,
  409220508,
  411333710,
  412146084,
  413508114,
  415783345,
  417699241,
  417786408,
  418506522,
  419098543,
  420292414,
  423121361,
  423720577,
  424434081,
  424882955,
  425453755,
  427288703,
  428013992,
  428670789,
  429283439,
  430197533,
  430594982,
  431626154,
  433212872,
  433348369,
  438738627,
  438954752,
  439388558,
  440466864,
  440785635,
  442163922,
  442270553,
  443354332,
  443659464,
  444870028,
  445212890,
  451942026,
  452768565,
  454249967,
  456820726,
  456990772,
  458404083,
  458755042,
  459112502,
  459605681,
  460552143,
  461252100,
  462535674,
  466166964,
  468074443,
  468683435,
  469205195,
  469487198,
  471470373,
  471493930,
  472247511,
  473145716,
  475078225,
  475206922,
  477212173,
  480052841,
  480832287,
  481288564,
  481628736,
  482008417,
  485857490,
  489671966,
  489674007,
  494712299,
  494867573,
  494986342,
  495326678,
  496670064,
  498084917,
  500174799,
  500242072,
  502708414,
  502746031,
  502984024,
  505287171,
  508567565,
  508930136,
  510618595,
  511636715,
  511663525,
  512414073,
  513296101,
  514402397,
  514846949,
  515068399,
  516245088,
  516885886,
  517167442,
  518258898,
  518469037,
  519589679,
  520102033,
  520631925,
  520778389,
  522597641,
  523386079,
  524471162,
  524712847,
  528107401,
  530655537,
  530823095,
  530983028,
  532608599,
  533159233,
  535978045,
  537316267,
  538523762,
  538762791,
  539501672,
  539512111,
  542056068,
  542622270,
  546773468,
  547019638,
  548211468,
  550704278,
  551048879,
  553800030,
  558462432,
  559249005,
  559821339,
  559988973,
  567418827,
  569029621,
  569758486,
  569998773,
  570987012,
  571055004,
  571561883,
  572695936,
  572824477,
  574503376,
  575194986,
  575287409,
  575618363,
  575651170,
  576169704,
  577030019,
  582333365,
  582580688,
  583330184,
  583354952,
  583987004,
  584192613,
  584496169,
  588977769,
  589664893,
  594598557,
  594599877,
  595043995,
  595392325,
  595669605,
  596391060,
  596819912,
  597045079,
  597398818,
  598372322,
  599768868,
  600346256,
  602591557,
  603459833,
  605582899,
  607564179,
  607717299,
  609988141,
  613746053,
  616200883,
  617917195,
  618272025,
  618485198,
  620212915,
  621649148,
  621734723,
  621762094,
  621774629,
  621845033,
  622417673,
  625367270,
  625995368,
  626799969,
  629527634,
  629853039,
  631615602,
  632853375,
  632939189,
  632944910,
  633061916,
  634783857,
  635965387,
  637057474,
  638114449,
  638292615,
  641787781,
  644945325,
  645547655,
  647882637,
  648296759,
  648325562,
  648547076,
  649804109,
  650452402,
  650587297,
  653921868,
  654078081,
  654805445,
  654904537,
  657418366,
  658688853,
  664031516,
  664483486,
  666426462,
  666794899,
  669090696,
  669344279,
  670898619,
  671554258,
  672028958,
  673139043,
  675524084,
  676333585,
  680558741,
  680641877,
  682108650,
  682831707,
  684581799,
  684704574,
  686236966,
  689972696,
  694994005,
  695162727,
  695305964,
  695947253,
  696711478,
  697391850,
  697775138,
  698311217,
  698614651,
  698779345,
  702682014,
  702819342,
  704038254,
  705827936,
  708673419,
  708741922,
  712417507,
  712751249,
  716046026,
  717179880,
  720794656,
  721607840,
  722972180,
  723218813,
  723693302,
  724924305,
  725443871,
  726556952,
  730384380,
  732784448,
  738457351,
  738548358,
  739101598,
  741542555,
  741648369,
  747777652,
  748622942,
  750406540,
  753730714,
  753924417,
  755312140,
  755533219,
  756059866,
  758784590,
  760413326,
  762653469,
  763984186,
  765191411,
  766637374,
  767325365,
  768492447,
  771748470,
  774013879,
  774183173,
  776860444,
  777137025,
  777253004,
  780626403,
  781277304,
  782535497,
  783341838,
  783841941,
  784048151,
  784835244,
  786298230,
  786511973,
  787671098,
  789429097,
  789507840,
  789969050,
  792650549,
  794239169,
  795426256,
  798466645,
  799083362,
  799227457,
  799615250,
  800914349,
  802712481,
  802812843,
  803750986,
  803916355,
  804791223,
  809336329,
  810282275,
  812710354,
  812718119,
  813217471,
  813877979,
  814868505,
  816437667,
  818237764,
  818761170,
  824560813,
  825656052,
  825954941,
  827968817,
  828192401,
  828540377,
  831205063,
  831785761,
  832044806,
  833726088,
  833791052,
  834187023,
  834726121,
  835981807,
  837705535,
  837813661,
  839713399,
  839784924,
  840021548,
  840967829,
  843536484,
  844159800,
  846688692,
  850851686,
  851119057,
  851568526,
  852226545,
  852448860,
  852873148,
  854345622,
  854359146,
  855190210,
  857319567,
  857948164,
  858605658,
  860303198,
  865245115,
  865273979,
  866399606,
  868560075,
  869381930,
  869546625,
  870556316,
  873623608,
  873721074,
  874630460,
  876056649,
  878007334,
  878513031,
  881647237,
  882444991,
  883419572,
  887522688,
  888053144,
  888424357,
  891426598,
  892293812,
  892444505,
  892682160,
  893267434,
  893996236,
  898501285,
  898826055,
  898946564,
  900307289,
  900765459,
  901228748,
  901469183,
  902280359,
  902758064,
  903008755,
  906840482,
  909742104,
  914097834,
  915350101,
  915530111,
  918835942,
  919989861,
  920041755,
  920274086,
  920403000,
  920861057,
  921269556,
  923299169,
  923447466,
  924754694,
  925409904,
  928078641,
  929920968,
  933038479,
  935344341,
  936097937,
  936366364,
  938790033,
  943441751,
  943681363,
  943979490,
  944116675,
  945042341,
  945277770,
  946957766,
  947251473,
  947447247,
  948978699,
  949737541,
  951822489,
  952586930,
  952769464,
  953847099,
  953979367,
  954173567,
  954297317,
  954829123,
  961063358,
  961623892,
  964780165,
  967270476,
  973167596,
  973460510,
  974274848,
  975996807,
  976203716,
  976659430,
  976957324,
  978175254,
  980126270,
  982309699,
  982321225,
  994719117,
  994914130,
  995495324,
  996455992,
  997240634,
  999129109,
]);

//node Longest-FibSub
