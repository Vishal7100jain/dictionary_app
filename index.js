
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

        let answer = ""
        wordHeading.innerHTML = `You Searched For : ` + result.word.toUpperCase()

        if(result.definition != ""){
            answer = result.definition
            // to get the answer till one line or at the fullstop.
            let oneLineAnswer = answer.replace("1.", "1").indexOf(".")
            definationBrife.innerHTML = answer.slice(0, oneLineAnswer + 1) + "."
        }else{
            definationBrife.innerHTML = "SORRY, Word do not exist in your dictionary"
        }

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