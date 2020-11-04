import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import DeleteButton from './DeleteButton';

describe(`DeleteButton Component`, () => {
  test(`should show properly`, () => {
    render(<DeleteButton />);
    screen.getByRole('button');
  });

  test(`should call a function on click`, () => {
    const onClick = jest.fn();
    render(<DeleteButton onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });

  describe(`has three different sizes`, () => {
    test(`has small sizes`, () => {
      render(<DeleteButton size="small" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('is-small');
    });

    test(`has medium sizes`, () => {
      render(<DeleteButton size="medium" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('is-medium');
    });

    test(`has large sizes`, () => {
      render(<DeleteButton size="large" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('is-large');
    });
  });
});
