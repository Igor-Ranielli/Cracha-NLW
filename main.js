const linkSocialMedia = {
  github: "Igor-Ranielli",
  youtube: "channel/UC-B7hc1AohcTljWHd56kYDg",
  facebook: "profile.php?id=100009641652672",
  instagram: "IDontHaveAInstagram:)",
  twitter: "IDontHaveATwitter:)"
}

function changeSocialMediaLinks(){

for (let li of socialLinks.children ) {

  const social = li.getAttribute('class')

  li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`

   }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name 
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

/* 
camelCase
PascalCase
snake_case 
*/

