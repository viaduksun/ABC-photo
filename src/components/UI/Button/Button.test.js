<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> a8ed0603d182b38347aea24421229e989cf08e65
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button />);
    getByRole('button');
  });
});
=======
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
        const { getByText } = render(<Button>{text}</Button>);
        getByText(text);
    });
    it('should pass click', () => {
        const onClick = jest.fn();
        const {queryByRole} = render(<Button onClick={onClick}>Click</Button>);
        fireEvent(
            queryByRole('button'),
            new MouseEvent('click', { bubbles: true})
        );
        expect(onClick).toHaveBeenCalled();
    });
});
>>>>>>> 4a3827cd53507aa0379f0518c11bfe2a95378595
