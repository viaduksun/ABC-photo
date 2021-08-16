import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonTop from './ButtonTop';

describe('ButtonTop component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<ButtonTop />);
    getByRole('button');
  });
  it('should pass click', () => {
    const onClick = jest.fn();
    const { queryByRole } = render(<ButtonTop onClick={onClick} />);
    fireEvent(
      queryByRole('button'),
      new MouseEvent('click', { bubbles: true })
    );
    expect(onClick).toHaveBeenCalled();
  });
});
