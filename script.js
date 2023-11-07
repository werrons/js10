const name = document.querySelector('#name')
const color = document.querySelector('#color')
const button = document.querySelector('#button')
const input = document.querySelector('#input')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manifactures = document.querySelector('#manifactures')
const img = document.querySelector('#img')
const catBtn = document.querySelector('#cat')



//как брать данные с бэка с помощью поисковика
button.addEventListener('click',()=>{
    let value = input.value
    fetch(`http://swapi.dev/api/people/${value}`)
        .then(res =>res.json())
        .then(json=>{
            console.log(json)
            name.innerHTML=json.name
            color.innerHTML=json.hair_color
            fetchUrl = json.vehicles[0]
            fetch(fetchUrl)
                .then(res =>res.json())
                .then(json=>{
                    vehicle.innerHTML=json.name
                    model.innerHTML=json.model
                    manifactures.innerHTML=json.manufacturer
                })
        })



})
catBtn.addEventListener('click',()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res =>res.json())
        .then(json=>{
            console.log(json)
            img.src=json[0].url
            console.log(img.src=json[0].url)
        })
})