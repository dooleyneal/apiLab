let button = document.querySelector('#residents')
const clicked = () => {
    console.log('button clicked')
}
button.addEventListener('click', clicked)

const axios = require('axios').default
axios.get('https://swapi.dev/api/planets?search=Alderaan').then((response) => {
    for (i in this.people) {
        axios.get(i).then((response2) => {
            const h2 = document.createElement('h2')
            const node = document.createTextNode(this.name)
            h2.appendChild(node)
            const element = document.getElementById('nameDiv')
            element.appendChild(h2)
        })
    }
})