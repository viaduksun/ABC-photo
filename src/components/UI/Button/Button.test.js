import Button from './Button';
import { render } from '@testing-library/react';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('div');
  });
});
