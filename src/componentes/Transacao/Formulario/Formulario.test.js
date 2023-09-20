import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Must render an input field', () => {
    test('in the document', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        expect(inputText).toBeInTheDocument();
    });

    test('with type number', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        expect(inputText).toHaveAttribute('type', 'number');
    });

    test('that can be filled', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(inputText, '50');
        expect(inputText).toHaveValue(50);
    });
});