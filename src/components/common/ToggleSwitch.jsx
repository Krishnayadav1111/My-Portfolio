import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({ color }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const switchColor = checked ? color : 'grey'; // Default color is red when unchecked

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{
        '& .MuiSwitch-track': {
          backgroundColor: switchColor,
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: switchColor,
        },
      }}
    />
  );
}
