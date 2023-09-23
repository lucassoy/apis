const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData')

const callAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        apiData.innerText = JSON.stringify(data);
    })
    .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener('click', callAPI);

