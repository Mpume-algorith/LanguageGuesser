const franc = require('franc');
const langs = require('langs');
const langInput = process.argv[2];
const langCode = franc(langInput); 

if (langCode !== 'und'){
    const indexNumber = langs.codes('3').indexOf(langCode);
    console.log(langs.names()[indexNumber]);
}
else {
        console.log(`Please provide longer input`);
    }
