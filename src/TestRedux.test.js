import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from './store/reducer';
import TestRedux from './TestRedux';

const renderWithRedux = (
    component, 
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
};

afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />);
    expect(getByTestId('counter')).toHaveTextContent('0');
});
