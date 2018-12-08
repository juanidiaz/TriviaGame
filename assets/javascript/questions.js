// Creating a "Character" object using constructor notation
function triviaElement(question, answer, answer2, answer3) {
    this.question = question;
    this.answerArray = [this.answer = answer, this.answer2 = answer2, this.answer3 = answer3];
}

var questionAvailable = 29;

// Creating an object for every character
var question0 = new triviaElement("Bees create what sweet substance?", "Honey", "Wax", "Water");
var question1 = new triviaElement("From what tree do acorns come?", "Oak", "Pine", "Cedar");
var question2 = new triviaElement("How many colours are in a rainbow?", "7", "2", "14");
var question3 = new triviaElement("How many days are there in a fortnight?", "14", "4", "7");
var question4 = new triviaElement("How many days are there in June?", "30", "28", "31");
var question5 = new triviaElement("How many sides does a triangle have?", "3", "4", "5");
var question6 = new triviaElement("How many wives did Henry VIII have?", "6", "1", "21");
var question7 = new triviaElement("How many years are there in a millennium?", "1000", "100", "10000");
var question8 = new triviaElement("In Jungle Book what kind of animal is Baloo?", "Bear", "Tiger", "Human");
var question9 = new triviaElement("In the nursery rhyme, who sat on a wall before having a great fall?", "Humpty Dumpty", "Bugs Bunny", "Goofy");
var question10 = new triviaElement("In which year did the Titanic sink?", "1912", "1810", "2005");
var question11 = new triviaElement("Name Batman’s crime fighting partner?", "Robin", "Clark", "Gordon");
var question12 = new triviaElement("Name the school that Harry Potter attended?", "Hogwarts", "McMaster", "Harvard");
var question13 = new triviaElement("On a farm a kid is a baby what?", "Goat", "Human", "Sheep");
var question14 = new triviaElement("Pharaoh is the title given to the rulers of which ancient county?", "Egypt", "Greece", "Rome");
var question15 = new triviaElement("Saint Patrick is the Patron Saint of which country?", "Ireland", "Mexico", "Finland");
var question16 = new triviaElement("The Beatles music band featured how many members?", "4", "5", "2");
var question17 = new triviaElement("What % of an egg’s weight is the shell?", "0.12", "0.5", "0.25");
var question18 = new triviaElement("What colour are Smurfs?", "Blue", "Purple", "Yellow");
var question19 = new triviaElement("What does Fred Flintstone wear around his neck?", "A tie", "A necklace", "Nothing");
var question20 = new triviaElement("What food do Giant Pandas normally eat?", "Bamboo", "Giant cake", "Peanuts");
var question21 = new triviaElement("What form of aerial transport does a witch favour?", "Broomstick", "Air Canada", "Submarine");
var question22 = new triviaElement("What galaxy is Earth located in?", "The Milky Way", "Andromeda", "Centaurus A");
var question23 = new triviaElement("What is the antonym of the word ‘synonym’?", "Of course, it is ‘antonym’ itself!", "It doesnt have!", "The number THREE");
var question24 = new triviaElement("What is the capital of England?", "London", "Edinburgh", "Toronto");
var question25 = new triviaElement("What is the capital of Hawaii?", "Honolulu", "Motunui", "Maui");
var question26 = new triviaElement("What is the common name for calcium carbonate?", "Chalk", "Homogenized milk", "Coal");
var question27 = new triviaElement("What is the distance around a circle called?", "Circumference", "Diameter", "Radius");
var question28 = new triviaElement("What is the first element on the periodic table of elements?", "Hydrogen", "Oxygen", "Lead");
var question29 = new triviaElement("What is the name of Harry Potter’s pet owl?", "Hedwig", "", "");
var question30 = new triviaElement("What is the name of Peppa Pig’s brother?", "George", "", "");
var question31 = new triviaElement("What is the name of the actor who plays the character of Harry Potter in the movie series?", "Daniel Radcliffe", "", "");
var question32 = new triviaElement("What is the name of the Australian stick or toy that is designed to come back to you when thrown?", "Boomerang", "", "");
var question33 = new triviaElement("What is the name of the bear in The Jungle Book?", "Baloo", "", "");
var question34 = new triviaElement("What is the name of the boy that visits the chocolate factory owned by Willy Wonka?", "Charlie Bucket", "", "");
var question35 = new triviaElement("What is the name of the fairy in Peter Pan?", "Tinkerbell", "", "");
var question36 = new triviaElement("What is the name of the Greek God of music?", "Apollo", "", "");
var question37 = new triviaElement("What is the name of the Lion in The Lion, The Witch and the Wardrobe?", "Aslan", "", "");
var question38 = new triviaElement("What is the name of the policeman in the pre-school children’ television series Balamory?", "PC Plum", "", "");
var question39 = new triviaElement("What is the name of the toy cowboy in Toy Story?", "Woody", "", "");
var question40 = new triviaElement("What is the nickname for the bell of the clock at the Palace of Westminster in London?", "Big Ben", "", "");
var question41 = new triviaElement("What is the top colour in a rainbow?", "Red", "", "");
var question42 = new triviaElement("What sweet food made by bees using nectar from flowers?", "Honey", "", "");
var question43 = new triviaElement("What type of animal is Bullseye in the Toy Story films?", "Horse", "", "");
var question44 = new triviaElement("What was Mickey Mouse’s original name?", "Mortimer Mouse", "", "");
var question45 = new triviaElement("What was the name of the monk in the Robin Hood legend?", "Friar Tuck", "", "");
var question46 = new triviaElement("When was the first atomic bomb dropped?", "It was dropped on August 6, 1945.", "", "");
var question47 = new triviaElement("Where in Scotland is there supposedly a lake monster called Nessie?", "Ans Loch Ness", "", "");
var question48 = new triviaElement("Which big country is closest to New Zealand?", "Australia", "", "");
var question49 = new triviaElement("Which city is the Palace of Versailles nearest to?", "Paris", "", "");
var question50 = new triviaElement("Which country can you see when directly looking over the sea from The White Cliffs of Dover?", "France", "", "");
var question51 = new triviaElement("Which country is home to the kangaroo?", "Australia", "", "");
var question52 = new triviaElement("Which country sent an Armada to attack Britain in 1588?", "Spain", "", "");
var question53 = new triviaElement("Which English king had six wives?", "Henry 8th", "", "");
var question54 = new triviaElement("Which fictional detective lived at 221b Baker Street?", "Sherlock Holmes", "", "");
var question55 = new triviaElement("Which is the largest city in Wales?", "Cardiff", "", "");
var question56 = new triviaElement("Which Italian city is famous for its leaning tower?", "Pisa", "", "");
var question57 = new triviaElement("Which planet in our Solar System is known for having a ring?", "Saturn", "", "");
var question58 = new triviaElement("Which river flows through London?", "The Thames", "", "");
var question59 = new triviaElement("Who composed the Minute Waltz?", "Frederic Chopin", "", "");
var question60 = new triviaElement("Who created the children’s book character Tracy Beaker?", "Jacqueline Wilson", "", "");
var question61 = new triviaElement("Who discovered rubber?", "Charles Macintosh", "", "");
var question62 = new triviaElement("Who does (the animated character) Princess Fiona marry?", "Shrek", "", "");
var question63 = new triviaElement("Who founded the first public library in the U.S.?", "Benjamin Franklin", "", "");
var question64 = new triviaElement("Who invented the telephone?", "Alexander Graham Bell", "", "");
var question65 = new triviaElement("Who is known as the Father of the Modern Olympics?", "Pierre de Coubertin", "", "");
var question66 = new triviaElement("Who is the patron saint of Ireland?", "St. Patrick", "", "");
var question67 = new triviaElement("Who painted the Mona Lisa?", "Leonardo da Vinci", "", "");
var question68 = new triviaElement("Who was created by Gepetto the woodcarver?", "Pinocchio", "", "");
var question69 = new triviaElement("Who was the first gymnast to be awarded a perfect score of 10 at the Olympics?", "Nadia Comaneci", "", "");
var question70 = new triviaElement("True or false? Harry Potter’s middle name is James", "TRUE", "", "");
var question71 = new triviaElement("True or false? Mickey Mouse’s middle name is Fauntleroy", "False (it is Donald Duck’s)", "", "");
var question72 = new triviaElement("True or false? Scarlet is a bright red color", "TRUE", "", "");
var question73 = new triviaElement("True or false? The horse is the fastest land animal", "FALSE", "", "");