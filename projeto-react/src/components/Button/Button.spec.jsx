const { fireEvent, render, screen } = require("@testing-library/react");
import userEvent from '@testing-library/user-event';
import { Button } from './index'

describe('<Button />', () => {
  it('Should reder the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} text='Load more' />)

    expect.assertions(1);
    const button = screen.getByRole('button', { name:  /load more/i });
    expect(button).toBeInTheDocument();
    // expect(button)toHaveAttribute('class', 'button');
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn}/>)

    const button = screen.getByRole('button', { name:  /load more/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={true}/>)

    const button = screen.getByRole('button', { name:  /load more/i });
    userEvent.click(button);

    expect(button).toBeDisabled();
  });

  it('Should be enable when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} disabled={false}/>)

    const button = screen.getByRole('button', { name:  /load more/i });
    userEvent.click(button);

    expect(button).toBeEnabled();
  });

  it('Should be enable when disabled is false', () => {
    const fn = jest.fn();
    const {container} = render(<Button text='Load more' onClick={fn} disabled={false}/>)

    expect(container.firstChild).toMatchSnapshot();
  });
})
