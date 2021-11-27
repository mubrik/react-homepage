import * as React from 'react';
// ui
import {Typography, Button, TypographyProps, ButtonProps } from '@material-ui/core';
// comps
import {useDarkMode} from "../App";

const CustomType = ({children, ...rest}: TypographyProps): JSX.Element=> {
  // darkmode
  const {darkMode} = useDarkMode();

  return (
    <Typography 
      color={darkMode ? "textPrimary" : "textSecondary"}
      {...rest}
    >
      {children}
    </Typography>
  );
};

const CustomButton = ({children, ...rest}: ButtonProps):JSX.Element => {

  // darkmode
  const {darkMode} = useDarkMode();

  return(
    <Button 
      color={darkMode ? "primary" : "secondary"}
      variant={'contained'}
      {...rest}
    >
      {children}
    </Button>
  );

};

const CustomLinkButton = ({children, href,  ...rest}: ButtonProps):JSX.Element => {

  // darkmode
  const {darkMode} = useDarkMode();
  // handle click, cant use "target" for TS?, need links to open in new tab
  const handleLink = (href: string, event?:React.MouseEvent<HTMLButtonElement>): void => {
    // prev default
    event.preventDefault();
    // manually open
    window.open(href, "_blank");
  };

  return(
    <Button 
      color={darkMode ? "primary" : "secondary"}
      variant={'outlined'}
      href={href}
      onClick={(e) => handleLink(href, e)}
      {...rest}
    >
      {children}
    </Button>
  );
};

export {CustomType, CustomButton, CustomLinkButton};