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
//types
import {IHomePageState} from "./HomePage";

const useStyles = makeStyles(theme => ({ 
  profileCard: {
    display: "none",
    position: "relative",
    flexDirection: "column",
    height: "auto",
    minWidth:"100%", // mobile
    padding: theme.spacing(2),
    border: theme.palette.type === "dark" ? `1px solid ${theme.palette.primary.light}21` : "none",
    boxShadow: theme.palette.type === "dark"  ? "none" : `7px 10px 14px 1px #0000000d,
    1px 3px 10px 1px #00000021`,
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

interface IProjectListView {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
  show: boolean;
}

interface IJsonObj {
  header: string;
  content: string;
  description: string;
  codeLink: string;
  imageUri: string;
  siteLink?: string;
}

const ProjectListView = ({setNav, show}: IProjectListView): JSX.Element => {

    // material styles
    const classes = useStyles();
    // states
    // handle accordions
    const [expanded, setExpanded] = React.useState<boolean|string>(false);
    // project data
    const [projData, setProjData] = React.useState<IJsonObj[]>(null);
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
    // fetch project details
    React.useEffect(() => {
      fetch('/react-homepage/projectDetails.json')
        .then(res => res.json())
        .then(result => {
          const {details} = result;
          setProjData(details as IJsonObj[]);
        });
    }, []);
    // handle button clicks
    const handleClick = (): void => {
      setNav("home");
    };

    const handleChange = (panel: string, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

    return transitions(
      (styles, show) => show && 
        <animated.div className={classes.profileCard} style={styles}>
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
                  <Accordion
                    key={`panel${index}`}
                    className={classes.spacing}
                    expanded={expanded === `panel${index}`} 
                    onChange={(_, isExpanded) => handleChange(`panel${index}`, isExpanded)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Avatar aria-label="title" className={classes.avatar} variant="rounded">
                        {item.header.slice(0, 1)}
                      </Avatar>
                      <CustomType className={classes.heading}>{item.header}</CustomType>
                      <CustomType className={classes.secondaryHeading}>{item.description}</CustomType>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ProjectCard {...item}/>
                    </AccordionDetails>
                  </Accordion>
                  // <ProjectAccordion
                  //   key={`panel${index}`}
                  //   title={item.header}
                  //   description={item.description}
                  //   className={classes.spacing}
                  //   expanded={expanded === `panel${index}`} 
                  //   onChange={(_: React.ChangeEvent, isExpanded: boolean) => handleChange(`panel${index}`, isExpanded)}
                  // >
                  //   <ProjectCard {...item}/>
                  // </ProjectAccordion>
                )) :
                null
            }
          </div>
        </animated.div>
    );
};

// const ProjectAccordion = ({children, title, description, ...rest}): JSX.Element => {

//   // material styles
//   const classes = useStyles();

//   return(
//     <Accordion {...rest}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Avatar aria-label="title" className={classes.avatar} variant="rounded">
//           {title.slice(0, 1)}
//         </Avatar>
//         <CustomType className={classes.heading}>{title}</CustomType>
//         <CustomType className={classes.secondaryHeading}>{description}</CustomType>
//       </AccordionSummary>
//       <AccordionDetails>
//         {children}
//       </AccordionDetails>
//   </Accordion>
//   );
// };

export default ProjectListView;