//Cotação de moedas do dia
const USD = 5.74
const EUR = 6.09
const GBP = 7.28

//Obtendo os elementos do formulario
const form = document.querySelector("form") //Seleciona o evento
const currency = document.getElementById("currency")
const amount = document.getElementById("amount") //Seleciona o elemento (input) pelo seu ID no HTML
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Maniplando o input "amount" para receber somente numeros
amount.addEventListener("input", () => {
    //console.log (amount.value) exibe o valor inserido no input

    const hasCharactersRegex = /\D+/g //Verifica caracteres tipo texto e substitue por "" (nada)
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do formulario
form.onsubmit =(event) => {
    event.preventDefault() //Para não recaregar a página
    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
                convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` // Manipulação do conteudo

        //Calcula o total e formata o resultado
        // let total = String(amount * price).replace(".", ",")
        
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        //Exibe o resultado total
        result.textContent = `${total} Reais`

        //Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error){
        //Remove a classe que exibe o footer para mostrar o resultado
        footer.classList.remove("show-result")

        console.log(error)
        alert ("Não foi possível converter. Tente novamente mais tarde.")
    }
}

//Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
    //Converte para número, para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}