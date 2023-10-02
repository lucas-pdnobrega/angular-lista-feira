import { Comida } from './comida';

describe('Comida', () => {
  it('should create an instance', () => {
    expect(new Comida(4, 'Maçã', 1.55)).toBeTruthy();
  });
});
