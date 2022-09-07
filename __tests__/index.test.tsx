import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { calculate } from '@/utils/index';
import { CONVERT_TEST_CASES } from '@/mocks/index';

describe('Home', () => {
  it('renders main page', ()=> {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Integer to Roman Numeral converter',
    });

    expect(heading).toBeInTheDocument();

  });
describe('test convert logic', ()=> {
  it.each(CONVERT_TEST_CASES)('converts %s to %s', (input, expectedOutput)=> {
    expect(calculate(input)).toBe(expectedOutput);
  });
});
