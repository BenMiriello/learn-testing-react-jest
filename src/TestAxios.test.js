import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from './TestAxios';

jest.mock('axios');

it('should display a loading text', () => {
    const { getByTestId } = render(<TestAxios />);

    expect(getByTestId('loading')).toHaveTextContent('Loading...')
});

it('should load and display the data', async () => {
    const { getByTestId } = render(<TestAxios url={'/greeting'} />);
    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: 'hello there' },
    });

    fireEvent.click(getByTestId('fetch-data'));

    const greetingData = await waitForElement(() => getByTestId('show-data'));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(GreetingData).toHaveTextContent('hello there');
});
