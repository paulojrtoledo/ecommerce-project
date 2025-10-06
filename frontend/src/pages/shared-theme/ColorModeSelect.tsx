import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';

interface ColorModeSelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
  mode: 'light' | 'dark';
  onChangeMode?: (mode: 'light' | 'dark') => void;
}

export default function ColorModeSelect(props: ColorModeSelectProps) {
  const { mode, onChangeMode, ...otherProps } = props;

  const handleChange: SelectProps['onChange'] = (event) => {
    const value = event.target.value as 'light' | 'dark';
    onChangeMode?.(value);
  };

  return (
    <Select
      value={mode}
      onChange={handleChange}
      inputProps={{
        'data-screenshot': 'toggle-mode',
      }}
      {...otherProps}
    >
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
