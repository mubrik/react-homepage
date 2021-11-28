import * as React from 'react';
import Homepage from "./components/HomePage";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// utils
import createContext from "./components/utils/contextUtil";

// darkmode context
// interface for darkmode context
interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
// the context, created using custom create contex
// custom includes error checking so TS doesnt flag an issue
export const [useDarkMode, DarkModeProvider] = createContext<IDarkModeContext>();

// module augmentation
// first time using this in TS, cool stuff
declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface PaletteOptions {
    type?: string;
    warning?: PaletteColorOptions
  }
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
  }
}

const App = ():JSX.Element => {
  // get darkmode preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // state
  const [darkMode, setDarkMode] = React.useState(false);
  // memo
  const darkModeValue = React.useMemo(() => {
    return {
      darkMode,
      setDarkMode
    };
  }, [darkMode]);
  // theme memoised
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          mode: darkMode ? "dark" : "light",
          primary: {
            light: "#6ec6ff",
            main: "#2196f3",
            dark: "#0069c0",
          },
          secondary: {
            light: "#ff8038",
            main: "#c95100",
            dark: "#912000",
          },
          warning: {
            main: "#b40000"
          }
        },
        typography: {
          fontFamily: [
              "Ubuntu",
              "sans-serif",
          ].join(","),
          fontSize: 14,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
          },
        },
      }),
    [darkMode],
  );

  // responsive theme
  const responsiveTheme = responsiveFontSizes(theme, {factor:3});

  // effect for setting dark mode
  React.useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
  // basic effect for testing stuff
  // React.useEffect(() => {
  //   console.log(theme);
  // });


  return(
    <>
    <ThemeProvider theme={responsiveTheme}>
      <DarkModeProvider value={darkModeValue}>
        <Homepage/>
      </DarkModeProvider>
    </ThemeProvider>
    </>
  );
};

export default App;
