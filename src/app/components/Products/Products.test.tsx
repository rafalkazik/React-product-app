import React from 'react';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays page header elements', async () => {
    const { getByText } = render(<Products />);
    expect(getByText('join.tsh.io')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Promo')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
