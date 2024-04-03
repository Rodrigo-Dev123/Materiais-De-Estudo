import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('Should render <Page /> component', () => {
    render(<Page />);

    const element = screen.getByText('Projeto Rodando...');
    expect(element).toBeInTheDocument;
  });
});
