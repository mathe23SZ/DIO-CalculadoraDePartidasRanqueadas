function calcularSaldo(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Define o nível com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  // Exibe a mensagem final com saldoVitorias e nível
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`
  );
}

// Exemplo de uso da função
const vitorias = 73; // número de vitórias
const derrotas = 10; // número de derrotas

calcularSaldo(vitorias, derrotas);
