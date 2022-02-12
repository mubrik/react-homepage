import {useMemo} from "react";
// material
import { useTheme } from '@mui/system';
// dkmode
import { useDarkMode } from '../../App';

export default ():{bgColor: string} => {

  const { darkMode } = useDarkMode();
  const theme = useTheme();

  const animateColors = useMemo(() => {

    const _bgColor = darkMode ? theme.palette.secondary.light : theme.palette.primary.light;
    const _gradientColor = darkMode ? "linear-gradient(127deg, rgb(25 0 84) 0%" : "linear-gradient(127deg, rgb(251 240 251) 0%";
    
    return {
      bgColor: `${_gradientColor}, ${_bgColor} 100%)`,
    };
  }, [darkMode]);

  return animateColors;
};