import {Typography, Button } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";

const CustomType = ({children, ...rest}) => {

    const theme = useTheme();
    // darkmode
    const darkMode = theme.darkMode.darkMode;

    return(
        <Typography 
            color={darkMode ? "textPrimary" : "textSecondary"}
            {...rest}
        >
            {children}
        </Typography>
    );
};

const CustomButton = ({children, ...rest}) => {

    const theme = useTheme();
    // darkmode
    const darkMode = theme.darkMode.darkMode;

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

const CustomLinkButton = ({children, ...rest}) => {

    const theme = useTheme();
    // darkmode
    const darkMode = theme.darkMode.darkMode;

    return(
        <Button 
            color={darkMode ? "primary" : "secondary"}
            variant={'outlined'}
        {...rest}
        >
            {children}
        </Button>
    );

};

export {CustomType, CustomButton, CustomLinkButton};