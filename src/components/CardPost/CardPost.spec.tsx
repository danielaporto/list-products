import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardPost } from '.';
import { cardPostMock } from './mock';

describe('<CardPost />', () => {
  it('should render <CardPost />', () => {
    render(<CardPost {...cardPostMock} />);
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.webp');
    expect(screen.getByRole('heading', { name: 'Title 1' })).toBeInTheDocument();
    expect(screen.getByText('Body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<CardPost {...cardPostMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
