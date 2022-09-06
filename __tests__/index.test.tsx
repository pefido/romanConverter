import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders main page', ()=> {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Integer to Roman Numeral converter',
    });

    expect(heading).toBeInTheDocument();

  });
})
