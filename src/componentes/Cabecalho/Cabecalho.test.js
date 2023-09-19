import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Whether the logged in user name was rendered', () => {
    render(<Cabecalho />)

    const userName = screen.getByText('Joana Fonseca Gomes');

    expect(userName).toBeInTheDocument();
    expect(userName).toMatchSnapshot();
});

test('Renders the logo correctly', () => {
    const { getByTestId } = render(<Cabecalho />);
    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
});

test('Renders user avatar correctly', () => {
    const { getByAltText } = render(<Cabecalho />);
    const avatar = getByAltText('Ícone de um avatar de usuário');

    expect(avatar).toBeInTheDocument();
});