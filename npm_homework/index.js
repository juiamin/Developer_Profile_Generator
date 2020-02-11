const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const generateMarkdown = require('./lib/generate-markdown');
const questions = require('./lib/questions');


inquirer.prompt(questions).then(responseObj => {
  const queryUrl = `https://api.github.com/users/${responseObj.username}/repos?per_page=100`;
  
  axios.get(queryUrl)
       .then(function(res) {
      
      const markdownData = { ...responseObj,avatar_url  };

      
      const finishedMarkdown = generateMarkdown(markdownData);

      
      fs.writeFile('./profile.md', finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
  });
});
