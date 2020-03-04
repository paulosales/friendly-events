/**
* Copyright (c) 2020-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders start page with success', () => {
  const { getAllByText } = render(
    <App />
  );
  const eletronicText = getAllByText(/Performers/i);
  expect(eletronicText[0]).toBeInTheDocument();
});
