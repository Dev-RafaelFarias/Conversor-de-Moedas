const button = document.querySelector(".button-convert")
const selectIn = document.querySelector(".in")
const selectFor = document.querySelector(".for")


function buttonClick() {

    const inputValue = document.querySelector(".valor").value // pegar o valor do input

    const valueToConvert = document.querySelector(".valueToConvert") // mapear o valor a ser convertido
    const valueConverted = document.querySelector(".valueConverted") // mapear o valor convertido

    console.log(selectFor.value)

    const dolarToDay = 4.90 // valor do Dolar do dia
    const euroToDay = 5.26
    const libraToDay = 6.07
    const bitcoinToDay = 170733.00

    if (selectFor.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToDay)
    }

    if (selectFor.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToDay)
    }

    if (selectFor.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToDay)
    }

    if (selectFor.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToDay)
    }

    if (selectFor.value == "real") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }


    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

function selectCurrency() {
    const imageLow = document.querySelector(".dolar-eua")
    const nameLowCurrency = document.querySelector(".name-low")
    const valueConverted = document.querySelector(".valueConverted") // mapear o valor convertido
    const valueMoney = document.getElementById("valueMoney")
    
    if(selectFor.value == "dolar"){
        nameLowCurrency.innerHTML = "Dólar"
        imageLow.src ="./img/eua.png"
        valueConverted.innerHTML = "US$ 0,00"
        valueMoney.innerHTML ="Dólar = 4,90"
   }
   
   if(selectFor.value == "euro"){
    nameLowCurrency.innerHTML = "Euro"
    imageLow.src ="./img/euro.png"
    valueConverted.innerHTML = "0,00 €"
    valueMoney.innerHTML ="Euro = 5,26"
   }
   
   if(selectFor.value == "libra"){
    nameLowCurrency.innerHTML = "Libra"
    imageLow.src ="./img/libra.png"
    valueConverted.innerHTML = "£ 0,00"
    valueMoney.innerHTML ="Libra = 6,07"
   }

   if(selectFor.value == "bitcoin"){
    nameLowCurrency.innerHTML = "Bitcoin"
    imageLow.src ="./img/bitcoin.png"
    valueConverted.innerHTML = "0,00 BTC"
    valueMoney.innerHTML ="Bitcoin = 170mil"
   }

   if(selectFor.value == "real"){
    nameLowCurrency.innerHTML = "Real"
    imageLow.src ="./img/brasil.png"
    valueConverted.innerHTML = "R$ 0,00"
    valueMoney.innerHTML = ""

   }

   buttonClick()
}



selectFor.addEventListener("change", selectCurrency)
button.addEventListener("click", buttonClick)
