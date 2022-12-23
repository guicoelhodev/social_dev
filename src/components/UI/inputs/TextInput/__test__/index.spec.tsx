import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { TextInput } from '@components/UI/inputs';

describe('Should test TextInput component', () => {
  test('Should render TextInput', () => {
    const { debug } = render(<TextInput label="Name" />);

    console.log(debug);
  });
});
