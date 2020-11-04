import userEvent from '@testing-library/user-event';
import { render, screen } from '../../__testUtils__';
import React from 'react';
import Color from './Color';

describe('Color component', () => {
  test(`should shows properly`, () => {
    render(<Color color="#fff" />);
    const color = screen.getByTestId('color');
    expect(color).toHaveStyle('background: #fff');
  });
});
