import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { TextInput } from '@components/UI/inputs';

describe('Should test TextInput component', () => {
  test('Should render TextInput', () => {
    render(
      <TextInput
        label="Name"
        register={{
          value: 'aaaaa',
        }}
      />
    );

    // screen.logTestingPlaygroundURL();
    const input = screen.getByRole(/textbox/i);

    expect(input).toBeInTheDocument();
  });

  test('Should render TextInput with input value', () => {
    render(
      <TextInput
        label="Name"
        register={{
          value: 'myEmail@email.com',
        }}
      />
    );

    const input = screen.getByRole(/textbox/i);

    expect(input).toHaveValue('myEmail@email.com');
  });

  test('Should render label content', () => {
    render(
      <TextInput
        label="Select your name"
        register={{
          value: 'myEmail@email.com',
        }}
      />
    );

    screen.logTestingPlaygroundURL();
    const label = screen.getByText(/select your name/i);

    expect(label).toHaveTextContent('Select your name');
  });
});
