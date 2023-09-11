async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    console.log(data);
  } catch (erro) {
    console.log('Erro:', erro);
  }
}
buscarDados();
