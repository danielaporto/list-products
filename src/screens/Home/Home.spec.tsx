import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('should render <Home />', () => {
    render(<Home />);
  });

  it('should match snapshot', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
