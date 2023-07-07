const carros = [
  {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ["Vidro Elétrico"],
    preco: 6799.33,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ["Trava"],
    preco: 12199.13,
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1,
  },
  {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25,
  },
  {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: 14350.45,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: 22109.21,
  },
  {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: 15999.13,
  },
  {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36,
  },
];

//Exercicio 1
function contaTotal(carros) {
  console.log((result = carros.length));
}
contaTotal(carros);

//Exercicio 2
function precoTotal(carros) {
  let total = 0;
  for (let i = 0; i < carros.length; i++) {
    total += carros[i].preco;
  }
  return `A soma do preço de todos veículos é R$${total}`;
}
console.log(precoTotal(carros));

//Exercicio 3
function filtraPorMarca(carros, marcas) {
  let cart = [];
  for (let i = 0; i < carros.length; i++) {
    const marcasAchadas = carros[i].marca;
    if (marcasAchadas === marcas) {
      cart.push(carros[i]);
    }
  }
  return cart;
}
console.log(filtraPorMarca(carros, "VW"));

//Exercicio 4
/* function filtraPorAcessorio(carros, acessorios) {
  let arr = [];
  for (let i = 0; i < carros.length; i++) {
    const automoveis = carros[i];
    const AcessoriosAchados = automoveis.acessorios;
    for (let j = 0; j < AcessoriosAchados.length; j++) {
      if (AcessoriosAchados[j] === acessorios) {
        arr.push(carros[i]);
      }
    }
  }
  return arr;
}
console.log(filtraPorAcessorio(carros, "Trava")); */

//Exercicio 4.2
function filtraPorAcessorio(carros, acessorios) {
  let filtro = [];
  for (let i = 0; i < carros.length; i++) {
    const automoveis = carros[i];
    const itensAchados = carros[i].acessorios;
    for (let j = 0; j < itensAchados.length; j++) {
      if (itensAchados[j] === acessorios) {
        filtro.push(automoveis);
      }
    }
  }
  return filtro;
}
console.log(filtraPorAcessorio(carros, "Vidro Elétrico"));

//Exercicio 5
function eCarroCompleto(carros) {
  let arr = [];
  for (let i = 0; i < carros.length; i++) {
    let completos = carros[i].completo;
    if (completos === true) {
      arr.push(carros[i]);
    }
  }
  return arr;
}
console.log(eCarroCompleto(carros));

//Exercicio 6
function adicionaCarro() {
  carros.push({
    modelo: "tesla",
    marca: "tesla-modelS",
    ano: "2017",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar"],
    preco: 14350.45,
  });
  return carros;
}
console.log(adicionaCarro());

//Exercicio 7
function removeCarro(carros, indice) {
  /* let newCars = []; */
  /*  for (let i = 0; i < carros.length; i++) {
    if (indice !== i) {
      newCars.push(carros[i]);
    }
  }
  return newCars; */
  carros.splice(indice, 1);
  return carros.length;
}

console.log(removeCarro(carros, 9));

//Exercicio 8
function contaCarrosNovos(carros) {
  let arr = [];
  for (let i = 0; i < carros.length; i++) {
    const tenYear = carros[i].ano;
    if (tenYear > 2010) {
      arr.push(carros[i]);
    }
  }
  return arr;
}
console.log(contaCarrosNovos(carros));


