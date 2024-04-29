// Internacionalização (i18n)

// A internacionalização é o processo de desenvolver produtos de forma que possam ser facilmente adaptados para vários idiomas e regiões

let valor = 123456.78;

// Exibir o valor como moeda nos EUA
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor)); // $123,456.78

// Exibir o valor como moeda no Brasil
console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)); // R$ 123.456,78