let inputName =  document.createElement('input')
let buttonPokemon = document.createElement('button')
inputName.placeholder = "Nombr Pokemon"

buttonPokemon.textContent =  'Buscar'
buttonPokemon.addEventListener('click',()=>{
    let pokemon = inputName.value
   console.log(pokemon)
   ApiFetch(pokemon)
})
document.body.append(inputName)
document.body.append(buttonPokemon)


function ApiFetch(pokemon){
    console.log(pokemon + "iii")
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            let image = document.createElement('img')
            let nombre =  document.createElement('label')
            image.src =  resp.sprites.back_female

            nombre.innerText = resp.name
            document.body.append(image)
            document.body.append(nombre)
            cargarTabla(resp)
        })

}

function cargarTabla(resp){
    console.log(resp )
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let td =  document.createElement('td')
    let tr =  document.createElement('tr')
    thead.style.background = "black"
    td.innerHTML = "red"
    thead.appendChild(td)


    document.body.append(table)

}