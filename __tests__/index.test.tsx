import { render, screen, fireEvent } from '@testing-library/react'
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
});

describe('action tests', () => {
  it('shows correct result in output section', ()=> {
    render(<Home />);

    const input = screen.getByPlaceholderText('Enter your integer here');
    fireEvent.change(input, {target: {value: '4'}});
    fireEvent.keyUp(input, {key: 'Enter', code: 'Enter', charCode: 13});
    const outputElement = screen.getByText('IV');
    expect(outputElement).toBeInTheDocument();

  });

  it('min value is 1', async ()=> {
    render(<Home />);

    const input = screen.getByPlaceholderText('Enter your integer here');
    fireEvent.change(input, {target: {value: 0}});
    expect(input).toHaveValue(1);
  });

  it('max value is 1000', async ()=> {
    render(<Home />);

    const input = screen.getByPlaceholderText('Enter your integer here');
    fireEvent.change(input, {target: {value: 9999}});
    expect(input).toHaveValue(1000);
  });
});

describe('test convert logic', ()=> {
  it.each(CONVERT_TEST_CASES)('converts %s to %s', (input, expectedOutput)=> {
    expect(calculate(input)).toBe(expectedOutput);
  });
});
