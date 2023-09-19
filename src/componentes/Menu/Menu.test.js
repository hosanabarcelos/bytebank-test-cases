import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Should render a link to the home page', () => {
    render(<Menu />);
    const homePageLink = screen.getByText('Inicial');

    expect(homePageLink).toBeInTheDocument();
});

test('Should render a list of links', () => {
    render(<Menu />);
    const listLinks = screen.getAllByRole('link');

    expect(listLinks).toHaveLength(4);
});

test('Should not render a link to extract', () => {
    render(<Menu />);
    const extractLink = screen.queryByText('Extrato');

    expect(extractLink).not.toBeInTheDocument();
});

test('Should render a list of links with class link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
});