/* Link to academic paper sources that helped us form this dictionary: 
https://docs.google.com/document/d/1iIgkvA0gPGInlx9M_4flj1kyhDXqaJ0o-uFYIEd6JB4/edit?usp=sharing */

//Want to expand the dictionary, making use of https://observablehq.com/@spencermountain/compromise-api

exports.stereotypeDict =  {
   "girls" : ["bad at math"],
   "women": ["bad at math", "artificial", "caring", "emotional", "attractive","tidy"],
   "asian" : ["bad drivers", "studious", "nerdy", "socially inept", "emasculated", "unattractive", "familialism", "hardworking", "disciplined", "honorary whites"],
   "dutch" : ["tall"],
   "irish" : ["red-headed"],
   "swedes": ["blond"],
   "old" : ["florida residents"],
   "senior" : ["florida residents"],
   "black": ["servant", "crook", "rapper", "football player", "basketball player", "cook", "entertainer", "musician", "athlete", "bad neighborhoods", "doing bad things", "violence prone", "lazy",  "unintelligent"],
   "white": ["wealthy", "successful", "physically weak", "gay"],
   "hispanic": ["housekeeper", "gang members", "drug lords","mason","artist","janitor","dancer","mechanic","photographer","baker","cashier","driver",  "criminals", "violence prone", "lazy",  "unintelligent"],
   "arab": ["violence prone", "lazy", "unintelligent"],
   "german": [ "scientifically-minded", "industrious", "stolid", "intelligent", "methodical", "extremely", "nationalistic", "progressive", "efficient", "jovial", "musical", "persistent", "practical"],
   "italian": ["artistic", "impulsive", "passionate", "quick-tempered", "musical", "imaginative", "very religious", "talkative", "revengeful", "physically dirty", "lazy", "unreliable"],
   "irish": ["drunkards", "drinking too much", "pugnacious", "quick-tempered", "witty", "honest", "very religious", "industrious", "extremely nationalistic", "superstitious", "quarrelsome", "imaginative", "aggressive", "stubborn"],
   "english": ["snooty", "sportsmanlike", "intelligent", "conventional", "tradition-loving", "conservative", "reserved", "sophisticated", "courteous", "honest", "industrious", "extremely nationalistic", "humorless"],
   "jew": ["stingy", "greedy", "cheap", "wealthy", "scholarly", "shrewd", "mercenary", "industrious", "grasping", "intelligent", "ambitious", "sly", "loyal to family ties", "persistent", "talkative", "aggressive", "very religious"],
   "japanese": ["intelligent", "industrious", "progressive", "shrewd", "sly", "quiet", "imitative", "alert", "suave", "neat", "treacherous", "aggressive"],
   "american": ["industrious", "intelligent", "materialistic", "ambitious", "progressive", "pleasure-loving", "alert", "efficient", "aggressive", "straightforward", "practical", "sportsmanlike"],
   "turk": ["cruel", "very religious", "treacherous", "sensual", "ignorant", "physically dirty", "deceitful", "sly", "quarrelsome", "revengeful", "conservative", "superstitious"],
   "chinese": ["good at math", "smart", "quiet", "obedient", "model minorities", "intelligent", "superstitious", "sly", "conservative", "tradition-loving", "loyal to family ties", "industrious","meditative", "reserved", "very religious", "ignorant", "deceitful", "quiet"]
}

/* Threads analyzed:
1. https://www.reddit.com/r/AskReddit/comments/4n0mvq/serious_women_on_reddit_what_are_some_of_the/
2. https://www.reddit.com/r/AskReddit/comments/918i6o/men_of_reddit_what_male_stereotype_do_you_dislike/
*/
exports.redditStereotypes = { //nouns and adjectives extracted from male and female stereotypes reddit thread
    "woman":['idea','period','father','child','home','guy','teenager','lot','comment','woman','reason','makeup','day','job','attention','body','instance','clothing','way','world','perspective','they','someone','ex','car','driving','it','guilty','good','female','young','wish','dramatic','you','angry','last','long','vocal','strong','independent','much','feminist','attractive','crazy','bad'],
    "man":['shit','big','hard','hot','full','top','much','good','tell','crazy','late','fun','resemble','overweight','bad','competitive','due','female','high','cute','general','first','many','male','little','labor','sun','time','part','work','job','family','cooking','house','garbage','person','boyfriend','way','gt','assumption','wife','something','day','tv','guy','make','anything','beer','trope','lot','male','reason','girl','school','woman','face','truck','https','world','ex','help','life','football','country']
};

exports.personDescriptors = ["afghan","albanian","algerian","american","andorran", "angolan","antiguans","argentinean","armenian","australian","austrian",
    "azerbaijani","bahamian","bahraini","bangladeshi","barbadian","barbudans", "batswana","belarusian","belgian","belizean","beninese","bhutanese","bolivian",
    "bosnian","brazilian","british","bruneian","bulgarian","burkinabe","burmese","burundian","cambodian","cameroonian","canadian","cape verdean","central african",
    "chadian","chilean","chinese","colombian","comoran","congolese","costa rican", "croatian","cuban","cypriot","czech","danish","djibouti","dominican","dutch", "east timorese","ecuadorean","egyptian","emirian","equatorial guinean",
    "eritrean","estonian","ethiopian","fijian","filipino","finnish","french","gabonese", "gambian","georgian","german","ghanaian","greek","grenadian","guatemalan",
    "guinea-bissauan","guinean","guyanese","haitian","herzegovinian","honduran","hungarian", "i-kiribati","icelander","indian","indonesian","iranian","iraqi","irish","israeli","italian","ivorian","jamaican","japanese","jordanian","kazakhstani","kenyan","kittian and nevisian","kuwaiti",
    "kyrgyz","laotian","latvian","lebanese","liberian","libyan","liechtensteiner","lithuanian","luxembourger","macedonian","malagasy","malawian","malaysian","maldivan","malian","maltese","marshallese","mauritanian",
    "mauritian","mexican","micronesian","moldovan","monacan","mongolian","moroccan","mosotho","motswana","mozambican", "namibian","nauruan","nepalese","new zealander","nicaraguan","nigerian","nigerien",
    "north korean","northern irish","norwegian","omani","pakistani","palauan", "panamanian","papua new guinean","paraguayan","peruvian","polish","portuguese",
    "qatari","romanian","russian","rwandan","saint lucian","salvadoran","samoan",
    "san marinese","sao tomean","saudi","scottish","senegalese","serbian",
    "seychellois","sierra leonean","singaporean","slovakian","slovenian",
    "solomon islander","somali","south african","south korean","spanish","sri lankan",
    "sudanese","surinamer","swazi","swedish","swiss","syrian","taiwanese","tajik",
    "tanzanian","thai","togolese","tongan","trinidadian or tobagonian","tunisian",
    "turkish","tuvaluan","ugandan","ukrainian","uruguayan","uzbekistani",
    "venezuelan","vietnamese","welsh","yemenite","zambian","zimbabwean", 
    "white","caucasian","anglo-saxon","african","african-american","black","latino",
    "hispanic","latina","alaska native","alaskan","american indian","native american",
    "pacific islander","asian american","hawaiian","jewish","female","woman","females", "males",
    "men", "women", "male","man","girl","boy","boys", "girls","young","old","middle-aged", "senior",
    "afghanistan","åland islands","albania","algeria","american samoa","andorra","angola","anguilla","antarctica","antigua and barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bosnia and herzegovina","botswana","bouvet island","brazil","british indian ocean territory","brunei darussalam","bulgaria","burkina faso","burundi","cambodia","cameroon","canada","cape verde","cayman islands","central african republic","chad","chile","china","christmas island","cocos (keeling) islands","colombia","comoros","congo","congo, the democratic republic of the","cook islands","costa rica","cote d'ivoire","croatia","cuba","cyprus","czech republic","denmark","djibouti","dominica","dominican republic","ecuador","egypt","el salvador","equatorial guinea","eritrea","estonia","ethiopia","falkland islands (malvinas)","faroe islands","fiji","finland","france","french guiana","french polynesia","french southern territories","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea-bissau","guyana","haiti","heard island and mcdonald islands","holy see (vatican city state)","honduras","hong kong","hungary","iceland","india","indonesia","iran, islamic republic of","iraq","ireland","isle of man","israel","italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kiribati","korea, democratic people's republic of","korea, republic of","kuwait","kyrgyzstan","lao people's democratic republic","latvia","lebanon","lesotho","liberia","libyan arab jamahiriya","liechtenstein","lithuania","luxembourg","macao","macedonia, the former yugoslav republic of","madagascar","malawi","malaysia","maldives","mali","malta","marshall islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia, federated states of","moldova, republic of","monaco","mongolia","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","netherlands antilles","new caledonia","new zealand","nicaragua","niger","nigeria","niue","norfolk island","northern mariana islands","norway","oman","pakistan","palau","palestinian territory, occupied","panama","papua new guinea","paraguay","peru","philippines","pitcairn","poland","portugal","puerto rico","qatar","reunion","romania","russian federation","rwanda","saint helena","saint kitts and nevis","saint lucia","saint pierre and miquelon","saint vincent and the grenadines","samoa","san marino","sao tome and principe","saudi arabia","senegal","serbia and montenegro","seychelles","sierra leone","singapore","slovakia","slovenia","solomon islands","somalia","south africa","south georgia and the south sandwich islands","spain","sri lanka","sudan","suriname","svalbard and jan mayen","swaziland","sweden","switzerland","syrian arab republic","taiwan, province of china","tajikistan","tanzania, united republic of","thailand","timor-leste","togo","tokelau","tonga","trinidad and tobago","tunisia","turkey","turkmenistan","turks and caicos islands","tuvalu","uganda","ukraine","united arab emirates","united kingdom","united states","united states minor outlying islands","uruguay","uzbekistan","vanuatu","venezuela","viet nam","virgin islands, british","virgin islands, u.s.","wallis and futuna","western sahara","yemen","zambia","zimbabwe"
];
