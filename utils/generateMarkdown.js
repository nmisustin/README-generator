// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if(license==="GNU GPLv3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if(license==="Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if(license==="BSD 3"){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="MIT"){
    return "[license](https://opensource.org/licenses/MIT)";
  }
  else if(license==="GNU GPLv3"){
    return "[license](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if(license==="Apache 2.0"){
    return "[license](https://opensource.org/licenses/Apache-2.0)";
  }
  else if(license==="BSD 3"){
    return "[license](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else{
    return ""
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license=== "MIT"){
    return "Licensed under the MIT "
  }
  else if(license === "GNU GPLv3"){
    return "Licensed under the GNU GPLv3 "
  }
  else if(license === "Apache 2.0"){
    return "Licensed under the Apache 2.0 "
  }
  else if(license=== "BSD 3"){
    return "Licensed under the BSD 3 "
  }
  else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.useage}
  ## Credits
  ${data.credits}
  ## Liscence
  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}
  ## Tests
  ${data.tests}
  ## Contributions
  ${data.contributions}
  ## Questions
  If you have any questions the creator can be contacted at this [email](${data.email}), or their GitHub can be viewed at github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
