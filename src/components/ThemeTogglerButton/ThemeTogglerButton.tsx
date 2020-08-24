import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from "../../services/theme-context";

const ThemeTogglerButton: React.FC = () => {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <FormControlLabel className="theme-toggle-btn"
            control={<Switch checked={!theme.isLightTheme} onChange={toggleTheme} color="primary" />}
            label="Dark Theme"
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;