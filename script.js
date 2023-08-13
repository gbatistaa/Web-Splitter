// Declaração das variáveis DOM para manipulação dos elementos HTML interativos:

let totalBillElement = document.getElementById('bill-input');
let five = document.getElementById('button5');
let ten = document.getElementById('button10');
let fifteen = document.getElementById('button15')
let twentyFive = document.getElementById('button25');
let fifty = document.getElementById('button50');
let customBillElement = document.getElementById('custom-bill-input');
let numberPeopleElement = document.getElementById('people-input');
let tipPerPerson = document.getElementById('tip-result');
let totalPerPerson = document.getElementById('total-result');
let resetButton = document.getElementById('reset-button');

// Variáveis para resgatar o valor inicial dos campos de entrada dos inputs, para usar na função de reset:

const totalBillInicial = totalBillElement.value;
const customBillInicial = customBillElement.value;
const numberPeopleInicial = numberPeopleElement.value;
const tipInicial = tipPerPerson.innerHTML;
const totalInicial = totalPerPerson.innerHTML;

// Adição de eventos de foco em inputs:

totalBillElement.addEventListener("focus", function(e){
    e.preventDefault();
    this.style.outlineColor = 'rgb(127, 156, 159)';
});

customBillElement.addEventListener("focus", function(e){
    e.preventDefault();
    this.style.outlineColor = 'rgb(127, 156, 159)';
});

numberPeopleElement.addEventListener("focus", function(e){
    e.preventDefault();
    this.style.outlineColor = 'rgb(127, 156, 159)';
});

// Variável que irá receber o valor dos botões ou do input de porcentagem personalizada:

let personalizedPercentage = 0;

// Adição de eventos de clique nos botões de porcentagem personalizada: 

five.addEventListener("click", (e) => {
    e.preventDefault();
    personalizedPercentage = 5
});
ten.addEventListener("click", (e) => {
    e.preventDefault();
    personalizedPercentage = 10
});
fifteen.addEventListener("click", (e) => {
    e.preventDefault();
    personalizedPercentage = 15
});
twentyFive.addEventListener("click", (e) => {
    e.preventDefault();
    personalizedPercentage = 25
});
fifty.addEventListener("click", (e) => {
    e.preventDefault();
    personalizedPercentage = 50
});


// Funções currificadas para calcular o valor da gorjeta por pessoa, e o valor total por pessoa (com  gorjeta): 

const tipPerPersonResult = (per) => (total) => (people) => {
    const convertTotal = parseFloat(total);
    const convertPessoa = parseFloat(people);
    return convertTotal * (per/100) / convertPessoa;
}
const totalPerPersonResult = (per) => (total) => (people) =>{
    const convertTotal = parseFloat(total);
    const convertPessoa = parseFloat(people);
    return (convertTotal + (convertTotal * per/100)) / convertPessoa
}

// Evento de tecla Enter para mandar os valores de input calculados para o HTML:

window.addEventListener("keyup", (e) => {
    if (e.key == 'Enter') {

        // Resgate de valores do input dentro do evento para manter os dados fornecidos pelo usuário sempre atualizados: 

        let customBillValue = customBillElement.value;
        let totalBillValue = totalBillElement.value;
        let numberPeopleValue = numberPeopleElement.value;

        if (customBillValue !== undefined) personalizedPercentage = parseFloat(customBillValue);

        tipPerPerson.innerHTML = tipPerPersonResult(personalizedPercentage)(totalBillValue)(numberPeopleValue).toFixed(2);
        totalPerPerson.innerHTML = totalPerPersonResult(personalizedPercentage)(totalBillValue)(numberPeopleValue).toFixed(2);
    };
});

// Evento de clique no botão reset, para resetar todos os elementos para o valor inicial: 

resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    totalBillElement.value = totalBillInicial;
    customBillElement.value = customBillInicial;
    numberPeopleElement.value = numberPeopleInicial;
    tipPerPerson.innerHTML = tipInicial;
    totalPerPerson.innerHTML = totalInicial;
});