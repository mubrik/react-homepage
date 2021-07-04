import React from 'react';
import Homepage from "./components/HomePage";
import { ThemeProvider  } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const App = () => {

  let prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let [darkMode, setDarkMode] = React.useState(false);
  let theme = React.useMemo(
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
                    phones: 450,
                },
            },
            darkMode: {
                darkMode,
                setDarkMode
            }
        }),
    [darkMode],
  );
  theme = responsiveFontSizes(theme, {factor:3});

  React.useEffect(() => {
      setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);


  return(
    <>
    <ThemeProvider theme={theme}>
        <Homepage/>
    </ThemeProvider>
    </>
  );
}

export default App;
