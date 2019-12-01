
const puppeteer = require('puppeteer');
const stDict = require("./stereotypeDictionary.js");
const stereotypeDictionary = stDict.stereotypeDict;
const { personDescriptors } = stDict;
const fs = require('fs');
let report = '';
let pdReport = '';
let targetWebsite = process.env.WEBSITE_TO_CHECK ? (process.env.WEBSITE_TO_CHECK).toLowerCase() : "google";

(async () => {
  let websiteProperties = {
    google : {
      searchLink: 'https://www.google.com/search?tbm=isch&q=',
      elementClass: 'Mw2I7'
    },
    bing : {
      searchLink: 'https://www.bing.com/images/search?q=',
      elementClass: 'suggestion-title'
    },
    baidu : {
      searchLink: 'https://image.baidu.com/search/index?tn=baiduimage&word=',
      elementClass: 'pull-rs'
    }
  }
  let { searchLink, elementClass } = websiteProperties[targetWebsite] || {};
  if (!searchLink || !elementClass) {
    console.log("invalid website");
    return;
  }
  try {
    const browser = await puppeteer.launch({});
    let checkedTerm = new Set();
    let subjectArray = Object.keys(stereotypeDictionary);
    let finResults = subjectArray.map(async (i, idx) => {
      for (let j in stereotypeDictionary[i]) {
        if (checkedTerm.has(stereotypeDictionary[i][j])) {
          continue;
        }
        await searchTerm(i, stereotypeDictionary[i][j], (results, key, term) => {
        console.log(results, key, term);
        for (let k of results) {
          if (results && results.includes(key)){
            if (k.indexOf(key) > -1) {
              console.log('spotted result, stereotype for race: ' + key + ' is ' + term);
              report += 'Stereotypical result found for person: ' + key;
              report += k != key ? ' - ' + k : '';
              report += ', for search term: ' + term + '\n';
            }
          }
          checkInPersonDescriptorList(k, term);
        }
        return results;
      });
        console.log(i, stereotypeDictionary[i][j]);
        checkedTerm.add(stereotypeDictionary[i][j]);
      }
    });

    Promise.all(finResults).then(() => {
      browser.close();
      fs.writeFile('results-' + targetWebsite + '.txt', report, (err) => {           
        if (err) throw err; 
      }) 

      fs.writeFile('pdResults-' + targetWebsite + '.txt', pdReport, (err) => {           
        if (err) throw err; 
      }) 
      return false;
    });

    function checkInPersonDescriptorList(suggestion, term) {
      suggestion = suggestion.toLowerCase();
      for (var j of personDescriptors) {
        var regex = '\\b';
        regex += escapeRegExp(j);
        regex += '\\b';
        if (new RegExp(regex, "i").test(suggestion)) {
          pdReport += 'Person descriptor result spotted for person: ' + j + ' - ' + suggestion + ', for search term: ' + term + '\n';
        }
      }
    }

    function escapeRegExp(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    async function searchTerm(key, term, callback) {
      try {
            const page = await browser.newPage();
            await page.goto(searchLink + encodeURI(term), { waitUntil: 'networkidle2', timeout: 30000 });
            let texts = await page.evaluate(({elementClass}) => {
              let data = [];
              let elements = document.getElementsByClassName(elementClass);
              for (let element of elements) {
                var newline = /\n/;
                data.push((element.innerText).replace(newline, ' '));
              }
              return data;
          }, {elementClass});
            if (texts.length > 0) {
              await callback(texts, key, term);
            }
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


