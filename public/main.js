document.querySelector('.five').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://atla-api-characters.herokuapp.com/api/${characterName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('characterNation').innerText = data.nation
        document.getElementById('characterBending').innerText = data.bending
        document.getElementById('characterSkills').innerText = data.skills
        document.getElementById('characterWeapon').innerText = data.weapon
        document.getElementById('characterNickname').innerText = data.nickname
        document.getElementById('characterFacts').innerText = data.notableFact
        document.getElementById('characterImage').src = data.image
    }catch(error){
        console.log('error')
    }
}




