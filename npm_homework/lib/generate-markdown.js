const generateMarkdown = profileData => {
  console.log(profileData);
  return `
# GitHub UserName
UserName: ${profileData.username}

![GitHub image](${profileData.avatar_url})

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
