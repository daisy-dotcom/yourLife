import { render, screen } from '@testing-library/react';
import App from './App';
/*import { createServer } from "server"

let server

beforeEach(() => {
  server = createServer()
//  If your API is at a different port or host than your app, you'll need something like:
//  server = createServer({
//    environment: "test",
//    urlPrefix: "http://api.acme.com:3000",
//  })
})

afterEach(() => {
  server.shutdown()
})*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
