import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import AddButton from './AddButton';

describe(`AddButton Component`, () => {
  test(`should show properly`, () => {
    render(<AddButton />);
    screen.getByRole('button');
  });

  test(`should call a function on click`, () => {
    const onClick = jest.fn();
    render(<AddButton onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
