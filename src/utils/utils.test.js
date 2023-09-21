import { calculaNovoSaldo } from "./index";

describe('When to carry out a transaction', () => {
    test('Deposit = balance increase', () => {
        const transaction = {
            transacao: 'Depósito',
            valor: 50
        }

        const newValue = calculaNovoSaldo(transaction, 100);

        expect(newValue).toBe(150);
    });

    test('Transfer = balance decrease', () => {
        const transaction = {
            transacao: 'Tranferência',
            valor: 50
        }

        const newValue = calculaNovoSaldo(transaction, 100);

        expect(newValue).toBe(50);
    });
});

test('It must return the balance value updated with the income', () => {
    const calculateYield = jest.fn((saldo) => saldo + saldo * 0.005);

    const value =  100;
    const newValue = calculateYield(value);

    expect(newValue).toBe(100.5);
    expect(calculateYield).toBeCalled();
    expect(calculateYield).toHaveBeenCalledWith(value);
});