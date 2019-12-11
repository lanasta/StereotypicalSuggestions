# StereotypicalSuggestions

To install all dependencies, use this command:
npm i 

To run the stereotypical suggestions checker, use this command:
WEBSITE_TO_CHECK=<choose from google, baidu, bing> node searchGoogleImages.js

To run the stereotypical suggestions checker one after another, use this command:
WEBSITE_TO_CHECK=google node searchGoogleImages.js && WEBSITE_TO_CHECK=google bing searchGoogleImages.js && WEBSITE_TO_CHECK=google baidu searchGoogleImages.js


You can add your very own stereotype dictionary, or modify the existing one by editing the stereotypeDictionary.js file.
To add a new website to check, simply identify the HTML class element containing the suggestion texts for that website, and add a new entry in the websiteProperties object in the searchGoogleImages.js file. 
