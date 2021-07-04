import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CustomLinkButton} from './CustomComponents';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    media: {
      height: 140,
    },
    cardBodyArea: {
        display: "flex",
        flexDirection: "column"
    },
    cardTitleArea: {

    },
    cardDetailsArea: {
        display: "grid",
        gridTemplateRows: "auto",
        padding: theme.spacing(0.4),
        [theme.breakpoints.up("xs")]: {
            gridTemplateColumns: "auto auto",
        },
    }, 
    cardTextArea : {
        padding: theme.spacing(0.4),
        display: "flex",
        flexDirection: "column"
    },
    cardButtonArea : {
        padding: theme.spacing(0.4),
        margin: theme.spacing(0.4),
        display: "flex",
        justifyContent: "space-evenly"
    },
    padding: {
        padding: theme.spacing(0.4),
    }

}));

const ProjectCard = ({imageUri, content, siteLink, codeLink}) => {

    const classes = useStyles();

    return(
        <Paper elevation={0} className={classes.root}>
            <div className={classes.cardDetailsArea}>
                <img
                    /* className={classes.media} */
                    alt={"ff"}
                    src={imageUri ? imageUri : ""}
                />
                <div className={classes.cardTextArea}>
                    <div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content ? content : ""}
                        </Typography>
                    </div>
                    <div className={classes.cardButtonArea}>
                        {siteLink && <CustomLinkButton href={siteLink} target="_blank">Check It Out</CustomLinkButton>}
                        <CustomLinkButton href={codeLink} target="_blank">Git Code</CustomLinkButton>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ProjectCard;