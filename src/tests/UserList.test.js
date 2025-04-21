import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders loading and then users', async () => {
  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
