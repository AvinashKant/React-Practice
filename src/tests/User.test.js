// src/components/MyComponent.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest'
import Users from './User.js'

describe('App', () => {
  it('renders the App component', () => {
    render(<Users />);
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    expect(screen.getByText('name 1')).toBeInTheDocument();
    expect(screen.getByText('name 2')).toBeInTheDocument();
  })
})