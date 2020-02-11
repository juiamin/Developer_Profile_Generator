const generateMarkdown = profileData => {
  return `
# GitHub UserName
UserName: ${profileData.username}

![GitHub image](https://avatars0.githubusercontent.com/u/55986712?v=4)

## Info
Email: [${profileData.email}](mailto:${profileData.email})

# ${profileData.title}

## Description
${profileData.description}

## Installation
${profileData.installation}

## Usage
${profileData.usag}

## Licence
${profileData.tech}

## Badge
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

`;
};

module.exports = generateMarkdown;
