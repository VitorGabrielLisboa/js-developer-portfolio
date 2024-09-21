
function updateProfileInfo(profileData){
    const photo = document.getElementById('photo')
    const name = document.getElementById("name")
    const job = document.getElementById('job')
    const location = document.getElementById('location')
    const email = document.getElementById('email')
    photo.src = profileData.photo
    photo.alt = profileData.nome
    name.innerText = profileData.nome
    job.innerText = profileData.titulo
    location.innerText = `${profileData.localidade.cidade} - ${profileData.localidade.estado}`
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>`<li>${skill}</li>`).join('')
    console.log(softSkills)
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li title="${skill.nome}">${skill.logo}</li>`).join('')
}
function updateLanguage(profileData){
    const language = document.getElementById('language')
    language.innerHTML = profileData.idiomas.map(idioma => `<li title="${idioma.nivel}"><i class="fa-solid fa-check"></i> ${idioma.nome}</li>`).join('')
}
function updatePortfolio(profileData){
    const portfolio = document.getElementById('portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => {
        if(portfolio.git === true){
            return `
            <li>
                <span class="title"><i class="fa-brands fa-github"></i> ${portfolio.nome}</span>
                <a href="${portfolio.gitHub}" target="_blank"> ${portfolio.gitHub}</a>
            </li>
        `
        }else{
            return `
            <li>
                <span class="title">${portfolio.nome}</span>
                <a href="${portfolio.gitHub}" target="_blank"> ${portfolio.gitHub}</a>
            </li>
            `
        }
    }).join('')
}
function updateExperience(profileData){
    const experience = document.getElementById('experience')
    experience.innerHTML = profileData.experiencias.map(experience => `
         <li>
            <h3 class="title">${experience.nome}</h3>
            <span class="period"><i class="fa-solid fa-calendar-days"></i> ${experience.periodo.inicio} - ${experience.periodo.fim}</span>
            <p>${experience.descricao}</p>
        </li>
        `).join('')
}
(async () =>{
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguage(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()