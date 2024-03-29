const saveCartItems = require('../helpers/saveCartItems');

Object.defineProperty(window, 'localStorage', {
  value: {
    setItem: jest.fn(),
  },
});

describe('4 - Teste a função saveCartItems', () => {
  it('verifica se é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  })
});

it('Verifica se ao executar saveCartItems com o argumento, o método localStorage.setItem é chamado', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalled();
});

it('Verifica se ao executar saveCartItems com o argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
});
