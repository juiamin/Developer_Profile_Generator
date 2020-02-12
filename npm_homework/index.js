const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const generateMarkdown = require('./lib/generate-markdown');
const questions = require('./lib/questions');


inquirer.prompt(questions).then(responseObj => {
  const queryUrl = `https://api.github.com/search/users?q=${responseObj.username}`;
  
  axios.get(queryUrl)
       .then(({ data })=>{
 
      const markdownData = { data, ...responseObj };

      
      const finishedMarkdown = generateMarkdown(markdownData);

      
      fs.appendFile('README.md', finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
  });
});
