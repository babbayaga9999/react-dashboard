// src/pages/Settings.js
import React, { useState } from 'react';
import { Typography, Switch, FormControlLabel, Slider, Button, Box, Paper } from '@mui/material';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(30);

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleSaveSettings = () => {
    // Save settings logic (e.g., update user preferences)
    console.log({
      darkMode,
      notifications,
      volume,
    });
    alert('Settings saved!');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '600px' }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleDarkModeChange} color="primary" />}
          label="Dark Mode"
        />
        <FormControlLabel
          control={<Switch checked={notifications} onChange={handleNotificationsChange} color="primary" />}
          label="Enable Notifications"
        />
        <Typography gutterBottom>Notification Volume</Typography>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="volume-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSaveSettings}>
            Save Settings
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;
