import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { amber, blue, deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500], // Customize primary color
    },
    secondary: {
      main: blue[1200], // Customize secondary color
    },
  },
});

// Button component with event handler
const AlertButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Button variant="contained" color="primary" size="large" onClick={handleClick}
        style={{
        backgroundColor: 'darkblue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        paddingTop: '40px',
        boxShadow: 'none', // Optional: Disable default Material-UI box shadow
        }}
      
      >
        Click Me
      </Button>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AlertButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
