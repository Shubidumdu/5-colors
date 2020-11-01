import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import RoundButton from './RoundButton';

describe(`RoundButton Component`, () => {
  test(`should show properly`, () => {
    render(<RoundButton>테스트</RoundButton>);
    screen.getByRole('button');
  });

  test(`should call a function on click`, () => {
    const onClick = jest.fn();
    render(<RoundButton onClick={onClick}>테스트</RoundButton>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
