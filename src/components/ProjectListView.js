import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { animated, useTransition } from 'react-spring';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProjectCard from "./ProjectCard";
import { CustomButton, CustomType} from './CustomComponents';

const useStyles = makeStyles(theme => ({
    
    profileCard: {
        display: "none",
        position: "relative",
        flexDirection: "column",
        height: "auto",
        minWidth:"100%", // mobile
        padding: theme.spacing(2),
        border: theme.darkMode.darkMode ? `1px solid ${theme.palette.primary.light}21` : "none",
        boxShadow: theme.darkMode.darkMode ? "none" : `-1px -3px 10px 1px ${theme.palette.secondary.light}21,
        1px 3px 10px 1px ${theme.palette.secondary.light}21`,
        borderRadius: "0.9em",
        [theme.breakpoints.up("xs")]: {
            minWidth:"55%"
        },
        [theme.breakpoints.up("sm")]: {
            minWidth:"65%"
        },
        [theme.breakpoints.up("xl")]: {
            minWidth:"75%"
        },
    },
    profileDiv: {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
    },
    backButton: {
        alignSelf: "self-start",
        margin: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    spacing: {
        margin: theme.spacing(1)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    avatar: {
        height: "auto",
        marginRight: theme.spacing(1)
    }
}));

const ProjectListView = ({setnav, show, ...rest}) => {

    // material styles
    const classes = useStyles();
    // anim transitions props
    const transitions = useTransition(show, {
        from: {
            display: "none",
            transform: "translateX(80%)",
        },
        enter: {
            delay: 600,
            display: "flex",
            transform: "translateX(0%)",
        },
        leave: {
            transform: "translateX(-250%)",
        },
        expires: 2
    });
    // project data
    const [projData, setProjData] = React.useState(null);
    // fetch project details
    React.useEffect(() => {
        fetch('/home/projectDetails.json')
            .then(res => res.json())
            .then(result => {
                const {details} = result;
                setProjData(details);
            })
    }, [])
    // handle button clicks
    const handleClick = (str) => {
        setnav("home");
    };
    // handle accordions
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return transitions(
        (styles, show) => show && 
            <animated.div className={classes.profileCard} style={styles} {...rest}>
                <div className={classes.profileDiv}>
                    <CustomButton
                        size={"small"}
                        onClick={handleClick}
                        className={classes.backButton}
                        startIcon={<ArrowBackIcon/>}
                    >
                        Home
                    </CustomButton>
                    { projData ? 
                        projData.map((item, index) => (
                            <ProjectAccordion
                                key={`panel${index}`}
                                title={item.header}
                                description={item.description}
                                className={classes.spacing}
                                expanded={expanded === `panel${index}`} 
                                onChange={handleChange(`panel${index}`)}
                            >
                                <ProjectCard {...item}/>
                            </ProjectAccordion>
                        ))
                    : null
                    }
                </div>
            </animated.div>
        );
};

const ProjectAccordion = ({children, title, description, ...rest}) => {

    // material styles
    const classes = useStyles();

    return(
        <Accordion {...rest}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Avatar aria-label="title" className={classes.avatar} variant="rounded">
                        {title.slice(0, 1)}
                </Avatar>
                <CustomType className={classes.heading}>{title}</CustomType>
                <CustomType className={classes.secondaryHeading}>{description}</CustomType>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    );
}

export default ProjectListView;