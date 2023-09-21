import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Component <Saldo />', () => {
  test('Must render balance with monetary value', () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});