// Não altere este arquivo
const {
  somar,
  multiplicar,
  subtrair,
  dividir,
} = require("./index");

describe("Testes para funções matemáticas", () => {
  test("somar deve retornar a soma de dois números", () => {
    expect(somar(2, 3)).toBe(5);
    expect(somar(-2, 3)).toBe(1);
  });

  test("multiplicar deve retornar o produto de dois números", () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(-2, 3)).toBe(-6);
  });

  test("subtrair deve retornar a diferença entre dois números", () => {
    expect(subtrair(5, 3)).toBe(2);
    expect(subtrair(3, 5)).toBe(-2);
  });

  test("dividir deve retornar a divisão de dois números e lançar erro ao dividir por zero", () => {
    expect(dividir(6, 3)).toBe(2);
    expect(() => dividir(6, 0)).toThrow("Erro: divisão por zero");
  });
});
