import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import Header from './Header';
import React from 'react';

describe('Header Component', () => {
  test(`should show properly`, () => {
    render(<Header />);
    screen.getByRole('banner');
  });

  test(`should call the function on click info button`, () => {
    const onInfo = jest.fn();
    render(<Header onInfo={onInfo} />);
    const infoBtn = screen.getByRole('button', { name: 'i' });
    userEvent.click(infoBtn);
    expect(onInfo).toBeCalled();
  });

  test(`should call the function on click help button`, () => {
    const onHelp = jest.fn();
    render(<Header onHelp={onHelp} />);
    const helpBtn = screen.getByRole('button', { name: '?' });
    userEvent.click(helpBtn);
    expect(onHelp).toBeCalled();
  });
});
