
const puppeteer = require('puppeteer');
const stDict = require("./stereotypeDictionary.js");
const stereotypeDictionary = stDict.stereotypeDict;

var count = 0;
for (var i in stereotypeDictionary) {
    count = 0;
    for (var j in stereotypeDictionary[i]) {
      var results = [];
      (async function(){
         results = await searchTerm(i, stereotypeDictionary[i][j], (results, key, term)=> {
           console.log(results, key, term);
          if (results && results.includes(key)){
            console.log('spotted result, stereotype for race: ' + key + ' is ' + term);
          }
         });
      })()
      console.log(i, stereotypeDictionary[i][j]);
      count ++;
        if (count > 3) {
          break;
        }
    }
  }


function searchTerm(key, term, callback) {
    try {
        (async () => {
          const browser = await puppeteer.launch({});
          const page = await browser.newPage();
          await page.goto('https://www.google.com/search?tbm=isch&q=' + encodeURI(term), { waitUntil: 'networkidle2' });
          let texts = await page.evaluate(() => {
            let data = [];
            let elements = document.getElementsByClassName('Mw2I7');
            for (var element of elements)
                data.push(element.textContent);
            return data;
        });
        try {
          await callback(texts, key, term);
        } catch (err) {}
        await browser.close();
        })()
      } catch (err) {
        console.error(err);
        browser.close();

      }
}



