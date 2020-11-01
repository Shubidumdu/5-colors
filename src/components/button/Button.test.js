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
});
