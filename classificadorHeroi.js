// Variáveis para armazenar o nome e a experiência do herói
let nomeHeroi = "Thor"; // Substitua pelo nome desejado
let experiencia = 7500; // Substitua pelo valor de experiência desejado

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o nível do herói
if (experiencia < 1000) {
  nivel = "Ferro";
} else if (experiencia <= 2000) {
  nivel = "Bronze";
} else if (experiencia <= 5000) {
  nivel = "Prata";
} else if (experiencia <= 7000) {
  nivel = "Ouro";
} else if (experiencia <= 8000) {
  nivel = "Platina";
} else if (experiencia <= 9000) {
  nivel = "Ascendente";
} else if (experiencia <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
