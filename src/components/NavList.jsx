import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function NavList() {
    const [value, setValue] = React.useState('collections');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="collections" label="Collections" />
        <Tab value="men" label="Men" />
        <Tab value="women" label="Women" />
        <Tab value="about" label="About" />
        <Tab value="contact" label="Contact" />
      </Tabs>
    </Box>
  )
}
