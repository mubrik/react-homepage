import * as React from 'react';
// ui
import { Button, Typography, ButtonProps, TypographyProps } from '@mui/material';
// comps
import {useDarkMode} from "../App";

const CustomType = ({children, ...rest}: TypographyProps): JSX.Element=> {
  // darkmode
  const {darkMode} = useDarkMode();

  return (
    <Typography
      sx={{color: darkMode ? "text.primary" : "text.secondary"}}
      {...rest}
    >
      {children}
    </Typography>
  );
};

const CustomBaseButton = ({children, href, variant, onClick,  ...rest}: ButtonProps):JSX.Element => {

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
      color={darkMode ? "secondary" : "primary"}
      variant={variant ? variant : "outlined"}
      onClick={onClick ? onClick : (e) => handleLink(href, e)}
      href={href ? href : ""}
      {...rest}
    >
      {children}
    </Button>
  );
};

export {CustomType, CustomBaseButton};