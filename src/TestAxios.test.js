import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from './TestAxios';

jest.mock('axios');

it('should display a loading text', () => {
    const { getByTestId } = render(<TestAxios />);

    expect(getByTestId('loading')).toHaveTextContent('Loading...')
});
