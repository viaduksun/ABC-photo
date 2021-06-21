<<<<<<< HEAD
import Button from './Button';
import { render } from '@testing-library/react';
=======
import { render } from '@testing-library/react';
import Button from './Button';
>>>>>>> develop

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('button');
  });
});
