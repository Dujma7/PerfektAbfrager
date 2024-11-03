const germanVerbs = {
    "bekommen":"hat bekommen",
    "bleiben": "ist geblieben",
    "denken": "hat gedacht",
    "essen": "hat gegessen",
    "fahren":"ist gefahren",
    "finden": "hat gefunden",
    "fliegen": "ist geflogen",
    "geben": "hat gegeben",
    "gehen": "ist gegangen",
    "gewinnen": "hat gewonnen",
    "haben":"hat gehabt",
    "helfen":"hat geholfen",
    "kommen": "ist gekommen",
    "laufen": "ist gelaufen",
    "lesen": "hat gelesen",
    "lügen": "hat gelogen",
    "passieren":"ist passiert",
    "schlafen":"hat geschlafen",
    "nehmen": "hat genommen",
    "schwimmen": "ist geschwommen",
    "sehen": "hat gesehen",
    "sein": "ist gewesen",
    "singen": "hat gesungen",
    "sitzen": "hat gesessen",
    "sprechen": "hat gesprochen",
    "stehen": "hat gestanden",
    "tragen": "hat getragen",
    "treffen": "hat getroffen",
    "trinken": "hat getrunken",
    "tun": "hat getan",
    "vergessen": "hat vergessen",
    "verstehen": "hat verstanden",
    "werden": "ist geworden",
    "zerreißen":"hat zerrissen"
};

const germanVerbsKeys = [
    "bekommen",
    "bleiben",
    "denken",
    "essen",
    "fahren",
    "finden",
    "fliegen",
    "geben",
    "gehen",
    "gewinnen",
    "haben",
    "helfen",
    "kommen",
    "laufen",
    "lesen",
    "lügen",
    "passieren",
    "schlafen",
    "nehmen",
    "schwimmen",
    "sehen",
    "sein",
    "singen",
    "sitzen",
    "sprechen",
    "stehen",
    "tragen",
    "treffen",
    "trinken",
    "tun",
    "vergessen",
    "verstehen",
    "werden",
    "zerreißen"
];

const correct = []
const incorrect = []

var random = germanVerbsKeys[Math.floor(Math.random()*germanVerbsKeys.length)];
var perfekt = germanVerbs[random];
document.getElementsByClassName("wort")[0].innerHTML = "Wort: "+random;
document.getElementById("wordsRemaining").innerHTML = "Words remaining: "+germanVerbsKeys.length.toString()


function checkWord() {
    var perfekt = germanVerbs[random];
    console.log(document.getElementById("perfekt").value.toLowerCase()) 
    console.log(perfekt.toLowerCase())
    if ((document.getElementById("perfekt").value.toLowerCase() === perfekt.toLowerCase()) === true) {
        document.getElementsByClassName("ans")[0].innerHTML = "Your answer is right!";
        correct.push(random);
    }

    else {
        document.getElementsByClassName("ans")[0].innerHTML = "Your answer is wrong! Correct answer: "+perfekt;
        incorrect.push(random);
    }

    setTimeout(function () {
        document.getElementById("perfekt").value = "";
        document.getElementsByClassName("ans")[0].innerHTML = "";



        random = germanVerbsKeys[Math.floor(Math.random() * germanVerbsKeys.length)];
        perfekt = germanVerbs[random];
        document.getElementsByClassName("wort")[0].innerHTML = "Wort: " + random;
        
        const index = germanVerbsKeys.indexOf(random);
        if (index !== -1) {
            germanVerbsKeys.splice(index, 1); 
        }
        document.getElementById("wordsRemaining").innerHTML = "Words remaining: " + germanVerbsKeys.length.toString();

        if (germanVerbsKeys.length === 0) {
            alert("Done! Your score " + correct.length.toString() + "/" + (correct.length + incorrect.length).toString());
            window.location.reload();
        }
    },3000); 
}



document.getElementById("check").addEventListener("click", checkWord)
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        {checkWord()}}})