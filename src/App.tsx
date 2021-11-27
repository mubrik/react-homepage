import * as React from 'react';
import Homepage from "./components/HomePage";
import { ThemeProvider  } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// utils
import createContext from "./components/utils/contextUtil";

// darkmode context
// interface
interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DarkModeContext = React.createContext<IDarkModeContext | null>(null);
export const [useDarkMode, DarkModeProvider] = createContext<IDarkModeContext>();

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
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
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
            xs: 500,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
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
