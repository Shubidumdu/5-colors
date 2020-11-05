import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import React from 'react';
import Checkbox from './CheckBox';

describe('Checkbox Component', () => {
  test(`should shows properly`, () => {
    render(<Checkbox>테스트</Checkbox>);
    screen.getByRole('checkbox');
  });

  test(`should call the function on Click`, () => {
    const onClick = jest.fn();
    render(<Checkbox onClick={onClick}>테스트</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(onClick).toBeCalled();
  });
});
