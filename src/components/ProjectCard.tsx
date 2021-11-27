import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CustomLinkButton} from './CustomComponents';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  media: {
    maxHeight: 320,
    minWidth: 120,
    maxWidth: 200,
    [theme.breakpoints.up("xs")]: {
      maxHeight: 320,
      maxWidth: 400,
      minWidth: 200,
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: 320,
      maxWidth: 400,
      minWidth: 320,
    },
  },
  cardBodyArea: {
    display: "flex",
    flexDirection: "column"
  },
  cardDetailsArea: {
    display: "grid",
    gridTemplateRows: "auto",
    padding: theme.spacing(0.4),
    justifyItems: "center",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "auto auto",
    },
  }, 
  cardTextArea : {
    padding: theme.spacing(0.4),
    margin: theme.spacing(0.2),
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
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

interface IJsonObj {
  header: string;
  content: string;
  description: string;
  codeLink: string;
  imageUri: string;
  siteLink?: string;
}

const ProjectCard = ({imageUri, content, siteLink, codeLink}: IJsonObj): JSX.Element => {
  // styles
  const classes = useStyles();

  return(
    <Paper elevation={0} className={classes.root}>
      <div className={classes.cardDetailsArea}>
        {imageUri ? (
            <img
                className={classes.media}
                alt={"ff"}
                src={imageUri}
            />
            ) : (
                <Skeleton className={classes.media} height={30} animation="wave"/>
            )
        }
          
        <div className={classes.cardTextArea}>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              {content ? content : ""}
            </Typography>
          </div>
          <div className={classes.cardButtonArea}>
            {siteLink && <CustomLinkButton href={siteLink}>Check It Out</CustomLinkButton>}
            <CustomLinkButton href={codeLink} >Git Code</CustomLinkButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default ProjectCard;