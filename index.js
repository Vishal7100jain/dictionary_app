
async function main(word) {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '629ecaf124msh718b7083b73487ap1de7b4jsnebc86f82f681',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

    
        wordHeading.innerHTML = `You Searched For : ` + result.word.toUpperCase()
        definationBrife.innerHTML = result.definition
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}

let serachWord = document.getElementById("serachWord")
let input = document.getElementById("input")
serachWord.addEventListener("click", (e) => {
    e.preventDefault()
    let inputWord = input.value
    main(inputWord)
})