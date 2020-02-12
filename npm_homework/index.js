const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const generateMarkdown = require('./lib/generate-markdown');
const questions = require('./lib/questions');


inquirer.prompt(questions).then(responseObj => {
  const queryUrl = `https://api.github.com/search/users?q=${responseObj.username}`;
  
  axios.get(queryUrl)
       .then(function(res) {
 
      const markdownData = { ...responseObj, avatar_url: res.data.items[0].avatar_url  };

      
      const finishedMarkdown = generateMarkdown(markdownData);

      
      fs.writeFile("profile.md", finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
  });
});
