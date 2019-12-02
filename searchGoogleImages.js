
const puppeteer = require('puppeteer');
const stDict = require("./stereotypeDictionary.js");
const stereotypeDictionary = stDict.stereotypeDict;
const { personDescriptors } = stDict;
const fs = require('fs');
let report = '';
let pdReport = '';
let filteredPdReport = '';
let lineCounts = [0, 0, 0] //report, pdReport, filteredPdReport
let targetWebsite = process.env.WEBSITE_TO_CHECK ? (process.env.WEBSITE_TO_CHECK).toLowerCase() : "google";
let termRan = 0;
let cumulativeResultsCount = 0;

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
          cumulativeResultsCount += results.length;
          for (let k of results) {
            if (results && results.includes(key)){
              if (k.indexOf(key) > -1) {
                console.log('spotted result, stereotype for race: ' + key + ' is ' + term);
                report += 'Stereotypical result found for person: ' + key;
                report += k != key ? ' - ' + k : '';
                report += ', for search term: ' + term + '\n';
                lineCounts[0] += 1;
              }
            }
            checkInPersonDescriptorList(k, term);
          }
          createFilteredPersonDescriptorList(results, term);
          return results;
      });
        checkedTerm.add(stereotypeDictionary[i][j]);
      }
    });

    Promise.all(finResults).then(() => {
      browser.close();
      addStatisticsToAllReports();
      fs.writeFile('results-' + targetWebsite + '.txt', report, (err) => {           
        if (err) throw err; 
      }) 

      fs.writeFile('pdResults-' + targetWebsite + '.txt', pdReport, (err) => {           
        if (err) throw err; 
      }) 

      fs.writeFile('filteredPdResults-' + targetWebsite + '.txt', filteredPdReport, (err) => {           
        if (err) throw err; 
      }) 
      return false;
    });

    function addStatisticsToAllReports() {
      let averageResultsPerTerm = cumulativeResultsCount/termRan;
      let statMsg = 'Term ran: ' + termRan + ', average results per term: ' + averageResultsPerTerm + '\n';
      statMsg += 'Stereotypical/person descriptor results percentage: ';
      report += statMsg + parseFloat(lineCounts[0]/cumulativeResultsCount * 100).toFixed(2) + "%";
      pdReport += statMsg + parseFloat(lineCounts[1]/cumulativeResultsCount * 100).toFixed(2) + "%";
      filteredPdReport += statMsg + parseFloat(lineCounts[2]/cumulativeResultsCount * 100).toFixed(2) + "%";
    }

    function checkInPersonDescriptorList(suggestion, term) {
      suggestion = suggestion.toLowerCase();
      for (var j of personDescriptors) {
        var regex = '\\b';
        regex += escapeRegExp(j);
        regex += '\\b';
        if (new RegExp(regex, "i").test(suggestion)) {
          pdReport += 'Person descriptor result spotted for person: ' + j + ' - ' + suggestion + ', for search term: ' + term + '\n';
          lineCounts[1] += 1;
        }
      }
    }

    function createFilteredPersonDescriptorList(results, term) {
      var filteredResults = [];
      var personExistence = [0, 0, 0, 0]; //woman, man, black, white
      if (results.length == 0) {
        return;
      }
      for (let k of results) {
        k = k.toLowerCase();
        if (k.indexOf("woman") > -1 || k.indexOf("female") > -1 || k.indexOf("women") > -1 || k.indexOf("females") > -1 ) {
          personExistence[0] = 1;
        }
        if (k.indexOf("man") > -1 || k.indexOf("male") > -1 || k.indexOf("men") > -1 || k.indexOf("males") > -1) {
          personExistence[1] = 1;
        }
        if (k.indexOf("black") > -1 || k.indexOf("african-american") > -1 || k.indexOf("blacks") > -1 || k.indexOf("african-americans") > -1) {
          personExistence[2] = 1;
        }
        if (k.indexOf("white") > -1 || k.indexOf("caucasian") > -1 || k.indexOf("whites") > -1 || k.indexOf("caucasians") > -1) {
          personExistence[3] = 1;
        }
      }

      for (let k of results) {
        k = k.toLowerCase();
        if (personExistence[0] == 1 && personExistence[1] == 1) {
          if (k.indexOf("woman") > -1 || k.indexOf("female") > -1 || k.indexOf("man") > -1 || k.indexOf("male") > -1 || k.indexOf("women") > -1 || k.indexOf("females") > -1 || k.indexOf("men") > -1 || k.indexOf("males") > -1) {
            continue;
          }
        }
        if (personExistence[2] == 1 && personExistence[3] == 1) {
          if (k.indexOf("black") > -1 || k.indexOf("african-american") > -1 || k.indexOf("white") > -1 || k.indexOf("caucasian") > -1 || k.indexOf("blacks") > -1 || k.indexOf("african-americans") > -1 ||  k.indexOf("whites") > -1 || k.indexOf("caucasians")) {
            continue;
          }
        }
        filteredResults.push(k);
      }

      for (let suggestion of filteredResults) {
        for (var j of personDescriptors) {
          var regex = '\\b';
          regex += escapeRegExp(j);
          regex += '\\b';
          if (new RegExp(regex, "i").test(suggestion)) {
            filteredPdReport += 'Person descriptor result spotted for person: ' + j + ' - ' + suggestion + ', for search term: ' + term + '\n';
            lineCounts[2] += 1;
          }
        }
      }
    }

    function escapeRegExp(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    async function searchTerm(key, term, callback) {
      try {
            termRan += 1;
            const page = await browser.newPage();
            await page.goto(searchLink + encodeURI(term), { waitUntil: 'networkidle2', timeout: 120000 });
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


