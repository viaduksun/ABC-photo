import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('button');
  });
});
