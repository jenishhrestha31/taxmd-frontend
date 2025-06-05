import { render } from '@testing-library/react'; // render from RTL
import { screen } from '@testing-library/dom'; // fallback for screen
import '@testing-library/jest-dom'; // matchers like .toBeInTheDocument()
import Example from '@/components/Example';

test('renders greeting with name', () => {
  render(<Example name="John Doe" />);
  expect(screen.getByText('Hello, John Doe!')).toBeInTheDocument();
});
