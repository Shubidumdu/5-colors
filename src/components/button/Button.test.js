import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import Button from './Button';

describe(`Button Component`, () => {
  test(`should show properly`, () => {
    render(<Button>테스트</Button>);
    screen.getByRole('button');
  });

  test(`should call a function on click`, () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>테스트</Button>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });

  describe(`can change own size`, () => {
    test(`to small size`, () => {
      render(<Button size="small">테스트</Button>);
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(button).toHaveClass('is-small');
    });

    test(`to medium size`, () => {
      render(<Button size="medium">테스트</Button>);
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(button).toHaveClass('is-medium');
    });

    test(`to large size`, () => {
      render(<Button size="large">테스트</Button>);
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(button).toHaveClass('is-large');
    });
  });
});
