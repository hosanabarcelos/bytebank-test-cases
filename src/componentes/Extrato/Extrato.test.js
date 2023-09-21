import { render, screen } from '@testing-library/react';
import Extrato from './index.jsx';

test('Should render a list of transactionss', () => {
    const transactions = [
        {
            transaction: 'Depósito',
            value: 100,
        }
    ]

    render(<Extrato transacoes={transactions}/>)
    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
})