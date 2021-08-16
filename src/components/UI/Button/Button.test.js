import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('button');
  });
  it('should render correctly with children', () => {
    const text = 'My Button';
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{text}</Button>);
    getByText(text);
  });
  it('should pass click', () => {
    const onClick = jest.fn();
    const { queryByRole } = render(<Button onClick={onClick} />);
    fireEvent(
      queryByRole('button'),
      new MouseEvent('click', { bubbles: true })
    );
    expect(onClick).toHaveBeenCalled();
  });
});
