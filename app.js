let modal = document.querySelector("#modal")
let modalQuestion = document.querySelector("#modalQuestion")
let answerMsg = document.querySelector("#check")
let modalAnswer = document.querySelector("#modalAnswer")
let playerLevel = 1
let playerScore = 0000
let xpChart = [
  300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
]
let triviaWell = []
let triviaDeck = [
  /* {
    question: "",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "",
    answers: {
      a: "",
      b: "",
      c: "",
    },
    correctAnswer: "",
    correctExplain:
      "",
  }, */
  {
    question: "How many mouths does a Gibbering Mouther have?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "none, and they must scream",
      b: "infinite",
      c: "as many as victims",
    },
    correctAnswer: "c",
    correctExplain:
      "Of all the terrors created by foul sorcery, gibbering mouthers are among the worst. This creature is the composite eyes, mouths, and liquefied matter of it's former victims.",
  },
  {
    question: "According to \"The Ordning\", what kind of Giant is most important?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "faerun",
    answers: {
      a: "Hill Giants",
      b: "Cloud Giants",
      c: "Storm Giants",
    },
    correctAnswer: "c",
    correctExplain:
      "Giants of Faerun belong to a rigid caste system, of which Storm Giants are the highest.",
  },
  {
    question: "Ghosts are the undead souls of a once living creature, that wander between the material plane and another. Which plane is this?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "The Etheral Plane",
      b: "The Shadow Plane",
      c: "The Air Plane",
    },
    correctAnswer: "a",
    correctExplain:
      "Ghosts are tied to both the material plane and the Ethereal Plance, and wander easily between the two.",
  },
  {
    question: "Of the four kinds of Genies in Dungeons and Dragons, one has no mythological origin, and was made for D&D. Is it the...",
    difficulty: {
      level: "very hard",
      reward: 1000,
    },
    category: "monster",
    answers: {
      a: "Marid",
      b: "Efreeti",
      c: "Dao",
    },
    correctAnswer: "c",
    correctExplain:
      "While Djinn, Marid, and Efreeti are all inspired from Arabic and Middle Eastern mythology, Dao were made up to fit the elemental theme.",
  },
  {
    question: "Monsterous Gargoyles often guard dark towers and manors, inert and menacing until they attack.",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "Construct",
      b: "Elemental",
      c: "Fiend",
    },
    correctAnswer: "b",
    correctExplain:
      "Gargoyles are born, not made, as Elemental Monsters. They originate from Ogremoch, a powerful evil earth elemental.",
  },
  {
    question: "How many heads does an Ettin have?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "Two",
      b: "Three",
      c: "Twelve",
    },
    correctAnswer: "a",
    correctExplain:
      "An Ettin is a foul, two-headed giant with the characteristics of an orc. The twin heads of an Ettin each have their own personality.",
  },  
  {
    question: "What is the element of a Bronze Dragon's breath weapon attack",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Lightning",
      b: "Fire",
      c: "Necrotic"
    },
    correctAnswer: "a",
    correctExplain:
      "Bronze Dragons can breathe a poisonous cloud as an attack.",
  },
  {
    question: "What is the element of a Green Dragon's breath weapon attack",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Cold",
      b: "Fire",
      c: "Poison"
    },
    correctAnswer: "c",
    correctExplain:
      "Green Dragons can breathe a poisonous cloud as an attack.",
  },
  {
    question: "What does a displacer beast displace?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "weapons that strike it",
      b: "it's own image",
      c: "your party members",
    },
    correctAnswer: "b",
    correctExplain:
      "Displacer Beasts can project a magical illusion that makes it appear to be standing near it's actual location, but not quite. The difference is enough to make fighting them difficult.",
  },
  {
    question: "How do you kill a Lich?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "kill it with fire",
      b: "cut off it's head",
      c: "destroy it's phylactery",
    },
    correctAnswer: "c",
    correctExplain:
      "A phylcatery is a magical token that holds a Lich's soul. As long as it exists, you cannot fully kill a Lich.",
  },
  {
    question: "Who is the most famous Death Knight?",
    difficulty: {
      level: "medium",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "Lord Soth",
      b: "Count Strahd Von Zarovich",
      c: "Zagig Yragerne",
    },
    correctAnswer: "a",
    correctExplain:
      "Lord Soth was a human knight who fell to evil ways. His infamy is such that if you look up Death Knight in the Monster Manual, the picture is him.",
  },
  {
    question: "In 5e, a cockatrice has bitten your comrade, and turned them to stone! What is the easiest way to turn them back?",
    difficulty: {
      level: "hard",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "hire a wizard for great expense",
      b: "quest for a magical scroll",
      c: "go drinking, and kill some time",
    },
    correctAnswer: "c",
    correctExplain:
      "The bite of a cockatrice only petrifies it's foes for 24 hours, so the easiest way to turn them back is simply to wait it out.",
  },
  {
    question: "What is the best way to avoid being caught by a Carrion Crawler?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Move in the Dark",
      b: "Bathe Regularly",
      c: "Climb on the ceiling",
    },
    correctAnswer: "b",
    correctExplain:
      "Carrion Crawlers are enormous wormlike monstrosities that live in caves. They can see in the dark and climb on ceilings, and they have an incredible sense of smell for tracking down prey.",
  },
  {
    question: "In Arthurian folklore, the Wizard Merlin is the child of a demon and a human. What would he be in 5th edition?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "A Cambion",
      b: "A Tiefling",
      c: "A Tanar'ri",
    },
    correctAnswer: "a",
    correctExplain:
      "Cambions are known as half-fiends, the child of a human and fiend parent. Tieflings have distance fiend ancestry, and Tanar'ri are full blooded demons.",
  },
  {
    question: "What are Bullywugs?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "frog-people",
      b: "fish-people",
      c: "shark-people",
    },
    correctAnswer: "a",
    correctExplain:
      "Bullywugs were a primitive race of frog-like humanoids found throughout the bogs and marshes of Toril, the self-proclaimed lords of the swamp.",
  },
  {
    question: "What edition of D&D did Bugbears first appear in?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "monster",
    answers: {
      a: "1st Edition",
      b: "3rd Edition",
      c: "5th Edition",
    },
    correctAnswer: "a",
    correctExplain:
      "Bugbears are giant, hairy, feral goblins known for brute strength. They first appeared in the First Edition of Dungeons and Dragons.",
  },
  {
    question: "Hags are witchlike, evil monsters that delight in cruelty. What type of monster are they?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Fey",
      b: "Undead",
      c: "Aberration",
    },
    correctAnswer: "a",
    correctExplain:
      "Hags are witches of ancient origin tied to the feywild. They are a kind of Fey, or Fairy.",
  },
  {
    question: "An Androsphynx lies before you, blocking the way into a dungeon. It poses a riddle to you, which you'd rather not guess at, and if you get it wrong it attacks. Which of these options has the BEST chance of success?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "use a magic spell to read the Sphynx's thoughts, and get the answer",
      b: "use a spyglass to read the Sphynx's book of riddles, which is hopefully nearby",
      c: "use a psionic ability to read the Sphynx's emotions, and see if you're close to the answer",
    },
    correctAnswer: "b",
    correctExplain:
      "Androsphinxes are Inscrutable, which means their thoughts and emotions cannot be read by any effect, magical or otherwise.",
  },
  {
    question: "This popular Assassin is condsidered the archrival of Drizz't Do'Urden in the R.A. Salvatore book series.",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "faerun",
    answers: {
      a: "Mordenkainen",
      b: "Jarlaxle",
      c: "Artemis Entreri",
    },
    correctAnswer: "c",
    correctExplain:
      "Artemis Entreri was a ruthless assassin and the former arch-nemesis of Drizzt Do'Urden. A cunning and tactical assassin, Entreri lived an empty life. He was credited with being one of the most feared and effective assassins in Faerûn.",
  },
  {
    question: "Minsc is a powerful ranger from Rashemaar in the Baldur's Gate series. His tiny companion is believed to be what?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "faerun",
    answers: {
      a: "A miniature giant space hamster",
      b: "A small dragon",
      c: "A goblin-dog",
    },
    correctAnswer: "a",
    correctExplain:
      "Minsc was famously known for his habit of talking to a hamster called Boo, whom he believed was a miniature giant space hamster, despite no one else ever witnessing any evidence of this.",
  },
  {
    question: "What is the largest City on the Sword Coast in Faerun?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "faerun",
    answers: {
      a: "Waterdeep",
      b: "Sharn",
      c: "Baldur's Gate",
    },
    correctAnswer: "c",
    correctExplain:
      "Baldur's Gate, also called simply the Gate, was the largest metropolis and city-state on the Sword Coast, within the greater Western Heartlands.",
  },
  {
    question: "What is the famous crime lord Xanathar's race?",
    difficulty: {
      level: "medium",
      reward: 25,
    },
    category: "faerun",
    answers: {
      a: "Vampire",
      b: "Beholder",
      c: "Goblin",
    },
    correctAnswer: "b",
    correctExplain:
      "The Xanathar (pronounced: /ˈzɑːnɑːθɑːr/ ZAN-ah-thar[3]), originally named Kirkesai and previously known as the Eye, was one of the most infamous beholders of the Realms and the crime lord of the Xanathar Thieves' Guild in Skullport.",
  },
  {
    question: "According to the creator of the Forgotten Realms setting, What is the interdimensional meeting place for the three most powerful Wizards in all the settings?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "faerun",
    answers: {
      a: "Sigil City, the hub of the Great Wheel",
      b: "Refuge, the last planet waystation",
      c: "Ed Greenwood's apartment in Ontario",
    },
    correctAnswer: "c",
    correctExplain:
      "Acccording to Ed Greenwood, creator of the Forgotten Realms; Mordenkainen the Mage was a good friend of Elminster Aumar; the two met on numerous occasions at Ed Greenwood's house on Earth to exchange news from each other's worlds, as well as spells and lore.On occasion, the two were also joined by Dalamar of Krynn.",
  },
  {
    question: "What is a the name of the magic hammer made by Bruenor Battlehammer for his adopted son, Wulfgar?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "faerun",
    answers: {
      a: "Aegis-Fang",
      b: "Mjolnir",
      c: "Ukonvasara",
    },
    correctAnswer: "a",
    correctExplain:
      "Aegis-fang was the weapon of Wulfgar, son of Beornegar. After Wulfgar's servitude to Bruenor Battlehammer was complete, the dwarf-king forged Aegis-fang for his adopted son as a special gift",
  },
  {
    question: "What is a the name of the magic hammer made by Bruenor Battlehammer for his adopted son, Wulfgar?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "faerun",
    answers: {
      a: "Aegis-Fang",
      b: "Mjolnir",
      c: "Driz'zit D'Urden",
    },
    correctAnswer: "a",
    correctExplain:
      "Aegis-fang was the weapon of Wulfgar, son of Beornegar. After Wulfgar's servitude to Bruenor Battlehammer was complete, the dwarf-king forged Aegis-fang for his adopted son as a special gift",
  },
  {
    question: "What is a the name of the heroic Drow Ranger popularizad by R.A. Salvatore?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "faerun",
    answers: {
      a: "Drist DoUrden",
      b: "Drizzt Do'Urden",
      c: "Driz'zit D'Urden",
    },
    correctAnswer: "b",
    correctExplain:
      "Drizzt Do'Urden (pronounced: /drɪst doʊˈʌrdɛn/ drist doh-URR-den or: /ˈdrɪzɪt doʊˈʌrdʌn/ DRIHZ-it doh-URR-dun), also called Drizzt Daermon N'a'shezbaernon, was a male drow ranger. He was an atypical drow who had forsaken both the evil ways of his people and their home in the Underdark, to become the legendary hero of the North.",
  },
  {
    question: "What is a Bulette often called?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Tunnel Snake",
      b: "Land Shark",
      c: "Burrow Beast",
    },
    correctAnswer: "b",
    correctExplain:
      "The bulette, also known as a landshark, was a fearsome magical beast whose origins were unknown but had become a dangerous predator.Feared and hated by most living creatures, bulettes were extremely dangerous, burrowing unseen beneath the soil before erupting up at an unexpected moment to seize their prey. Dwarves called the bulette a ghohlbrorn.",
  },
  {
    question:
      "In the land of Halruaa, which of these monsters are bred as pets?",
    difficulty: {
      level: "very hard",
      reward: 1000,
    },
    category: "faerun",
    answers: {
      a: "Minature Dragon",
      b: "Minature Giant Space Hamster",
      c: "Miniature Behir",
    },
    correctAnswer: "c",
    correctExplain:
      "Halruaan behirs were a miniature species native to Halruaa, where they were bred as pets or guardians.",
  },
  {
    question:
      "You walk into a long dark hall, filled with incredibly realistic stone statues of terrified adventurers. What of these three monsters do you prepared to fight?",
    difficulty: {
      level: "very hard",
      reward: 1000,
    },
    category: "monster",
    answers: {
      a: "Basilisk",
      b: "Tarasque",
      c: "Frost Troll",
    },
    correctAnswer: "a",
    correctExplain:
      "Basilisks are the only monster of the three with the ability to Petrify it's opponents, turning it's foes to stone.",
  },
  {
    question: "How are Beholders said to be born?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "Born out of Dreams",
      b: "Born from Illithid experiments",
      c: "Born from strange gods",
    },
    correctAnswer: "a",
    correctExplain:
      "Beholders don’t truly sleep when they rest. Instead, a beholder’s mind remains semiconscious even as it dreams. As a result, on rare occasions when a beholder dreams of another beholder, the dream-reality becomes warped and takes on physical form, becoming another actual beholder. To call this process reproduction would be inaccurate, because in most cases the old and new beholders fight to the death—a fact for which the rest of the world is thankful.",
  },
  {
    question:
      "Banshee are Irish folk monsters whose wail foretells death. What does their name mean?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "Evil Woman",
      b: "Fairy woman",
      c: "Dark Fairy",
    },
    correctAnswer: "b",
    correctExplain:
      'A banshee (/ˈbænʃiː/ BAN-shee; Modern Irish bean sí, from Old Irish: ben síde [bʲen ˈʃiːðʲe], "woman of the fairy mound" or "fairy woman") is a female spirit in Irish folklore who heralds the death of a family member.',
  },
  {
    question:
      "In Dungeons and Dragons 3.5, Angels are have this particular alignment restriciton.",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "monster",
    answers: {
      a: "Always Lawful, often Good",
      b: "Always Good, often Lawful",
      c: "Always Chaotic, often Good",
    },
    correctAnswer: "b",
    correctExplain:
      "Angels in D&D are always Good aligned creatures, but are not always Lawful aligned.",
  },
  {
    question: "What is an Aboleth?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "A shapeshifting treasure chest",
      b: "A magic cave giant",
      c: "A psychic water horror",
    },
    correctAnswer: "c",
    correctExplain:
      "Aboleths (pronounced: /ˈæboʊlɛθ/ ÆB-o-leth  were a race of malevolent, eel-like aberrations with potent psionic abilities.",
  },
  {
    question: "What is an Aarakocra?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "A bird person",
      b: "A snake person",
      c: "A tiger person",
    },
    correctAnswer: "a",
    correctExplain:
      "Aarakocra (pronounced: /ærɑːˈkoʊkrɑː/ æ-ra-KO-kra  or: /ɑːrɑːˈkoʊkrɑː/ a-rah-KO-krah; also called bird-men,were a race of avian humanoids.",
  },
  {
    question: "What is a Spelljammer?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "system",
    answers: {
      a: "A counterspell item",
      b: "An anti magic field",
      c: "A sailing spaceship",
    },
    correctAnswer: "c",
    correctExplain:
      'A spelljammer was a type of magically powered vessel that could travel great distances, even into space. Each ship had a magical helm or "captains-chair" that allowed a suitably powerful mage to pilot the ship. Some spelljammers were also capable of traveling to other planes of existence.',
  },
  {
    question:
      'What character mechanic was first introduced in the "Birthright" Campaign Setting?',
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "system",
    answers: {
      a: "Feats",
      b: "Experience Points",
      c: "Leveling Up",
    },
    correctAnswer: "a",
    correctExplain:
      "D&D 3rd Edition was the first to implement feats as they are named, taken from a mechanic called Bloodlines.",
  },
  {
    question:
      "According to it's lore, how was the setting wolrd of Eberron created?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "eberron",
    answers: {
      a: "Ancient Gods made it",
      b: "Two moons colided",
      c: "It was born from Three Dragons",
    },
    correctAnswer: "c",
    correctExplain:
      "The legend of the origin of the world of Eberron states that  three great dragons created the planar system and created (or discovered) the Draconic Prophecy. The Progenitors are often described as being siblings, and the world itself is made from their remains.",
  },
  {
    question: "Which plane of existence is only canon in Eberron?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "eberron",
    answers: {
      a: "The Plane of Dreams",
      b: "The demiplane of Dread",
      c: "The Planar Orrery",
    },
    correctAnswer: "a",
    correctExplain:
      "Dal Quor, the Region of Dreams, is a plane that mortals visit when they dream. The plane is the home of the Quori, psychic symbionts with intentions to conquer Eberron.",
  },
  {
    question: "What is the name of the largest City in Eberron?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "eberron",
    answers: {
      a: "Solamnia",
      b: "Sharn, City of Towers",
      c: "Waterdeep, City of Splendors",
    },
    correctAnswer: "b",
    correctExplain:
      "Sharn is the most populous city in all of Eberron. The city literally towers atop a cliff above the mouth of the Dagger River in southern Breland. Sharn is known as the City of Towers, but has also been called many other names, including the City of Knives, the City of Lost Souls, the City of a Thousand Eyes, the Gateway to Xen'drik, and the Gateway to Perdition.",
  },
  {
    question: "What three player races appeard first in Eberron?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "eberron",
    answers: {
      a: "Gnomes, Warforged, and Tieflings",
      b: "Warforged, Shifters, and Kalashtar",
      c: "Weresharks, Kozakuran, and Merfolk",
    },
    correctAnswer: "b",
    correctExplain:
      "Warforged are robotic soldiers built for Eberron's last Great War. Shifters are humanoid's with Lycanthrope ancestry. Kalashtar are a race of monks whose souls have joined with otherplanar creatures. All three made their Dungeons and Dragons debut in Eberron's first Campaign setting book.",
  },
  {
    question: "In Eberron, what is a Dragonmark?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "eberron",
    answers: {
      a: "A magical birthmark",
      b: "The brand of a dragon",
      c: "A secret hand signal",
    },
    correctAnswer: "a",
    correctExplain:
      "In the Setting of Eberron, Dragonmarks are physical manifestations of a Draconic Prophecy. They have appeared on seven of Khorvaire's common races, and manifest typically around puberty.",
  },
  {
    question:
      "What is the prefferred mounts of halflings in the Eberron setting?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "eberron",
    answers: {
      a: "Ponies",
      b: "Large Dogs",
      c: "Dinosaurs",
    },
    correctAnswer: "c",
    correctExplain:
      "In the Setting of Eberron, The halflings of the Talenta Plains have formed spiritual bonds with the small dinosaurs thatroam the area, and use them as mounts.",
  },
  {
    question: "What are Lycanthropes (Werewolves and the like) vulnerable to?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Moonlight",
      b: "Sunlight Spells",
      c: "Silver weapons",
    },
    correctAnswer: "c",
    correctExplain:
      "Lycanthropes of all kinds are vulnerable to Silvered weapons, stemming back to a medieval belief that silver was a pure substance. This folklore is a recent addition to Werewolf lore, and only dates back to the early 20th century",
  },
  {
    question: "Why do Vampires have no reflection in a Mirror?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "A weakness to Silver",
      b: "Vampires are undead creatures, and have no soul",
      c: "Vampires don't block light",
    },
    correctAnswer: "a",
    correctExplain:
      "Mythologically Silver has been considered a pure and holy substance. Mirrors made from sheets of thin silver have been made as early as 500ce, and became common knowledge. However, after the Renaissance most European mirrors were backed by refelctive Tin instead of Silver.",
  },
  {
    question: "What are the five standard colors of Chromatic Dragons?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Red, Blue, Yellow, Black, and White",
      b: "Gold, Silver, Copper, Bronze, and Brass",
      c: "Red, Blue, Green, Black, and White",
    },
    correctAnswer: "c",
    correctExplain:
      "Red, Blue, Green, Black, and White are the standard colors for Chromatic Dragons, which are typically evil creatures. Gold, Silver, Copper, Bronze, and Brass dragons are their metallic counterparts, and are typically benign or even helpful.",
  },
  {
    question:
      "What is the most Challenging monster of these three in 5th edition?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "monster",
    answers: {
      a: "Lamia",
      b: "Gorgon",
      c: "Chimera",
    },
    correctAnswer: "c",
    correctExplain:
      "Chimera are three headed Greek inspired monstrosities with a Challenge Rating of 6, higher that the 5 of a Gorgon and the 4 of a Lamia.",
  },
  {
    question: "How was the Eberron campaign setting created?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "eberron",
    answers: {
      a: "Write in Competition",
      b: "Popular Book Series Adaptation",
      c: "Original Work by Gary Gygax",
    },
    correctAnswer: "a",
    correctExplain:
      'In 2002, Wizards of the Coast set a write in competition called "Fantasy Setting Search", a fan submission from designer Keith Baker won in 2004, and the concept eventually became Eberron.',
  },
  {
    question:
      "What is the famously complicated name of the Dark Elf city in Faerun?",
    difficulty: {
      level: "hard",
      reward: 500,
    },
    category: "faerun",
    answers: {
      a: "Menzoberranzan",
      b: "It cannot be spoken in common tongues.",
      c: "Dol'gur'landan",
    },
    correctAnswer: "a",
    correctExplain:
      "Menzoberranzan (pronounced: /ˈmɛnzoʊbəˈrɑːnzɑːn/ MEN-zoh-buh-RAN-zan), is a city in the Forgotten Realms, made popular by bestselling books by R.A. Salvatore.",
  },
  {
    question: "What is the current Edition of D&D?",
    difficulty: {
      level: "easy",
      reward: 25,
    },
    category: "system",
    answers: {
      a: "D&D Next",
      b: "5th Edition",
      c: "Advanced Dungoens and Dragons",
    },
    correctAnswer: "b",
    correctExplain:
      "In August of 2014, Wizards of the Coast, the company responsible for Dungeons and Dragons, released Dungeons and Dragons, 5th Edition, after two years of testing. Advanced Dungeons and Dragons released in 1977, and D&d Next was the working title for 5e while it was in production.",
  },
  {
    question: "Who created Dungeons and Dragons?",
    difficulty: {
      level: "medium",
      reward: 100,
    },
    category: "system",
    answers: {
      a: "Tracy Hickman",
      b: "Gary Gygax",
      c: "Wizards of the Coast",
    },
    correctAnswer: "b",
    correctExplain:
      'In 1974, avid wargamer Gary Gygax and firends created and played the first game of Dungeons and Dragons, an expansion on his previous "Chainmail" wargame. Three volumes of rules were published that year, with only 1,000 copies originally printed.',
  },
]
let eberronDeck = triviaDeck.filter(cat => cat.category == 'eberron')
let faerunDeck = triviaDeck.filter(cat => cat.category == 'faerun')
let monsterDeck = triviaDeck.filter(cat => cat.category == 'monster')
let systemDeck = triviaDeck.filter(cat => cat.category == 'system')

document.querySelector(
  "#qCount"
).innerText = `There are currently ${triviaDeck.length} questions in this game.`

//Eventhandlers

function handleClickEvent() {
  modal.style.display = "block"
  document.querySelector("#submitBtn").style.display = "block"
  wellChecker()
  generateTrivia()
}

function handleCloseEvent() {
  triviaWell.shift()
  modal.style.display = "none"
  document.querySelector("#closeBtn").style.display = "none"
  answerMsg.innerText = ""
  modalAnswer.innerText = ""
  levelChecker()
  cardDeck()
}

function handleSubmitEvent() {
  answerCheck()
  modalAnswer.innerText = triviaWell[0].correctExplain
  document.querySelector("#closeBtn").style.display = "block"
  document.querySelector("#submitBtn").style.display = "none"
}

// categoryFilter() filters out items by category before the shuffle

function categoryFilter() {
    if (document.querySelector('#eberron').checked) {
        triviaWell = triviaWell.concat(eberronDeck)
        console.log(`The Ebberon deck is in play`)
    }
    if (document.querySelector('#faerun').checked) {
        triviaWell = triviaWell.concat(faerunDeck)
        console.log(`The Faerun deck is in play`)
    }
    if (document.querySelector('#monster').checked) {
        triviaWell = triviaWell.concat(monsterDeck)
        console.log(`The Monster deck is in play`)
    }
    if (document.querySelector('#system').checked) {
        triviaWell = triviaWell.concat(systemDeck)
        console.log(`The System deck is in play`);
    }
}

// filter each category into its own array


// set that array as TriviaWell before the shuffle

// cardDeck() checks the % of questions remaining and changes the deck1 and deck2 images, increasing the deck1 and decreasing the deck2

function cardDeck() {
  if (triviaWell.length < 1) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards0.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards6.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  } else if (triviaWell.length <= 5) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards1.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards5.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  } else if (triviaWell.length <= 10) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards2.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards4.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  } else if (triviaWell.length <= 15) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards3.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards3.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  } else if (triviaWell.length <= 20) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards4.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards2.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  } else if (triviaWell.length <= 25) {
    document.querySelector("#deck1").innerHTML =
      "<img src='images/cards5.png' alt='first deck'  class='decks'  id='deckImg1'></img>"
    document.querySelector("#deck2").innerHTML =
      "<img src='images/cards1.png' alt='second deck'  class='decks'  id='deckImg2'></img>"
  }
}

// answerCheck() checks the form input against triviaWell[0].correctAnswer

function answerCheck() {
  if (
    triviaWell[0].correctAnswer ==
    document.querySelector('input[name="answerBtn"]:checked').value
  ) {
    answerMsg.style.color = "chartreuse"
    answerMsg.innerText = "You're Correct!"
    playerScore += Math.floor(
      triviaWell[0].difficulty.reward * (1 + playerLevel / 10)
    )
    document.querySelector("#score").innerText = `000${playerScore}`
  } else {
    answerMsg.style.color = "red"
    answerMsg.innerText = "That's not quite right."
  }
}

function generateTrivia() {
  modalQuestion.innerText = triviaWell[0].question
  document.querySelector("#a").innerText = triviaWell[0].answers.a
  document.querySelector("#b").innerText = triviaWell[0].answers.b
  document.querySelector("#c").innerText = triviaWell[0].answers.c
}

// Shuffle Trivia take the TriviaWell and randomizes array positions

function shuffleTrivia(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function handleStartEvent() {
  document.querySelector("#openingModal").style.display = "none"
  playerLevel = 1
  document.querySelector("#level").innerText = `0${playerLevel}`
  playerScore = 0
  document.querySelector("#score").innerText = `000${playerScore}`
  categoryFilter()
  shuffleTrivia(triviaWell)
}

//levelChecker() meaasures the player score against the next level array, and increases their level if

function levelChecker() {
  if (playerScore >= xpChart[0]) {
    playerLevel += 1
    xpChart.shift()
    document.querySelector("#level").innerText = `0${playerLevel}`
  }
}

// newQuestion() brings up a modal menu popluated by the trivia well

document.querySelector("#newQBtn").addEventListener("click", handleClickEvent)

// submitAnswer() checks player submission agaisnt answer and displays correct/incorrect (logs score), and displays closeModal button

document
  .querySelector("#submitBtn")
  .addEventListener("click", handleSubmitEvent)

// closeModal() closes the modal screen so the player get get a new question

document.querySelector("#closeBtn").addEventListener("click", handleCloseEvent)

// wellChecker() checks to see if the triviaWell is empty, and if it is then it prints 'Youre out of Questions!"

function wellChecker() {
  if (triviaWell.length <= 0) {
    modalQuestion.innerText = "That's all folks, check back for more later!"
    document.querySelector("#a").innerText = ""
    document.querySelector("#b").innerText = ""
    document.querySelector("#c").innerText = ""
    document.querySelector('#qForm').style.display = 'none'
    document.querySelector('#submitBtn').style.display = 'none'
    document.querySelector('#closeBtn').style.display = 'block'
    document.querySelector('#resetBtn').style.display = 'block'
  }
}

//gameStart/gameReset

document
  .querySelector("#closeOpenerBtn")
  .addEventListener("click", handleStartEvent)

  
document.querySelector('#resetBtn').addEventListener('click', () => {
    document.querySelector('#qForm').style.display = 'block'
    document.querySelector('#resetBtn').style.display = 'none'
    document.querySelector('#modal').style.display = 'none'
    document.querySelector("#openingModal").style.display = "block"
})

// Fire animation effects. Fire should do SOMETHING when clicked, and when mouseovered
document.querySelector("#fire").addEventListener("click", () => {
  document.querySelector("#fire").style.opacity = "100%"
  document.querySelector("#ampersand").style.opacity = "100%"
})

document.querySelector("#fire").addEventListener("mouseover", () => {
  let randoNum = Math.floor(Math.random() * 100)
  document.querySelector("#fire").style.opacity = `${randoNum}%`
  document.querySelector("#ampersand").style.opacity = `${randoNum}%`
})

document.querySelector("#fire").addEventListener("mouseleave", () => {
  document.querySelector("#fire").style.opacity = "50%"
  document.querySelector("#ampersand").style.opacity = "75%"
})
