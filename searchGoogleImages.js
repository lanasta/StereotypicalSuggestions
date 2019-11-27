
const puppeteer = require('puppeteer');
const stDict = require("./stereotypeDictionary.js");
const stereotypeDictionary = stDict.stereotypeDict;
const { personDescriptors } = stDict;
const fs = require('fs');
let report = '';
let pdReport = '';

(async () => {
  try {
    const browser = await puppeteer.launch({});
    var count = 0;
    var subjectArray = Object.keys(stereotypeDictionary);
    var finResults = subjectArray.map(async (i, idx) => {
      count = 0;
      for (var j in stereotypeDictionary[i]) {
            await searchTerm(i, stereotypeDictionary[i][j], (results, key, term) => {
            console.log(results, key, term);
            if (results && results.includes(key)){
              for (var k of results) {
                if (k.indexOf(key) > -1) {
                  console.log('spotted result, stereotype for race: ' + key + ' is ' + term);
                  report += 'Stereotypical result found for person: ' + key;
                  report += k != key ? ' - ' + k : '';
                  report += ', for search term: ' + term + '\n';
                }
                if (personDescriptors.includes(k.toLowerCase())) {
                  pdReport += 'Person descriptor result spotted for person: ' + k + ' , for search term: ' + term + '\n';
                }
              }
            }
            return results;
          });
        console.log(i, stereotypeDictionary[i][j]);
        count ++;
      }
    });

    Promise.all(finResults).then(() => {
      browser.close();
      fs.writeFile('results.txt', report, (err) => {           
        if (err) throw err; 
      }) 

      fs.writeFile('pdResults.txt', pdReport, (err) => {           
        if (err) throw err; 
      }) 
      return false;
    });

    async function searchTerm(key, term, callback) {
        try {
              const page = await browser.newPage();
              await page.goto('https://www.google.com/search?tbm=isch&q=' + encodeURI(term), { waitUntil: 'networkidle2', timeout: 10000 });
              let texts = await page.evaluate(() => {
                let data = [];
                let elements = document.getElementsByClassName('Mw2I7');
                for (var element of elements)
                    data.push(element.textContent);
                return data;
            });
              await callback(texts, key, term);
              await page.close();
          } catch (err) {
            console.error(err);
            page.close();
          }
    }

      } catch (error) {
        console.log(error);
      }
})();


