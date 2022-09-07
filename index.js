let words = [
   "ab",
   "Abend",
   "als",
   "bald",
   "bevor",
   "damals",
   "dann",
   "endlich",
   "erst",
   "früh",
   "gestern",
   "gewöhnlich",
   "heute",
   "immer",
   "manchmal",
   "Mittag",
   "Mitte",
   "Mitternacht",
   "Monat",
   "morgen",
   "Morgen",
   "nachdem",
   "nachher",
   "Nachmittag",
   "nächst",
   "neulich",
   "nicht",
   "nie",
   "noch",
   "noch",
   "plötzlich",
   "schon",
   "sobald",
   "sofort",
   "täglich",
   "übermorgen",
   "vorgestern",
   "vorher",
   "Vormittag",
   "zuerst",
];
async function get_ipa(word) {
   let res = await fetch(`https://de.wiktionary.org/wiki/${word}`);
   let data = await res.text();
   let arr = data.split("\n");
   let found = arr.find((element) => element.includes("ipa"));
   console.log(word, found.match(/<span.*>(.*)<\/span>/)[1]);
}

words.forEach((word) => get_ipa(word));
