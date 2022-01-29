import React from 'react';
// material
import { styled } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary  } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// anim spring
import { animated, useTransition } from 'react-spring';
import ProjectCard from "./ProjectCard";
import { CustomBaseButton, CustomType} from './CustomComponents';
//types
import {IHomePageState} from "./HomePage";

const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  padding: theme.spacing(2),
  border: theme.palette.type === "dark" ? `1px solid ${theme.palette.secondary.light}52` : "1px solid #3b47dd40",
  boxShadow: theme.palette.type === "dark"? "none" : `rgb(0 0 0 / 15%) 1px 1px 9px 1px`,
  borderRadius: "0.9em",
  minWidth:"100%", // mobile
  [theme.breakpoints.up("xs")]: {
    minWidth:"50vw"
  },
  [theme.breakpoints.up("sm")]: {
    minWidth:"55vw"
  },
  [theme.breakpoints.up("xl")]: {
    minWidth:"58vw"
  },
}));

const StyledNavAreaDiv = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
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

    // states
    // handle accordions
    const [expanded, setExpanded] = React.useState<boolean|string>(false);
    // project data
    const [projData, setProjData] = React.useState<IJsonObj[]|null>(null);
    // anim transitions props
    const transitions = useTransition(show, {
      from: {
        display: "none",
        transform: "translateX(80%)",
      },
      enter: {
        delay: 500,
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
    const handleClick = (param:IHomePageState ): void => {
      setNav(param);
    };

    const handleChange = (panel: string, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

    return transitions(
      (styles, show) => show && 
        <animated.div style={styles}>
          <StyledProfileCardDiv>
            <StyledNavAreaDiv>
              <CustomBaseButton
                size={"small"}
                onClick={() => handleClick("home")}
                sx={{
                  marginLeft: (theme) =>  theme.spacing(1),
                }}
                startIcon={<HomeIcon/>}
              >
                Home
              </CustomBaseButton>
              <CustomBaseButton
                size={"small"}
                onClick={() => handleClick("nowPlaying")}
                sx={{
                  marginRight: (theme) =>  theme.spacing(1),
                }}
                startIcon={<MusicNoteIcon/>}
              >
                Playlist
              </CustomBaseButton>
            </StyledNavAreaDiv>
            { projData ? 
                projData.map((item, index) => (
                  <Accordion
                    key={`panel${index}`}
                    sx={{margin:(theme) => theme.spacing(1)}}
                    expanded={expanded === `panel${index}`} 
                    onChange={(_, isExpanded) => handleChange(`panel${index}`, isExpanded)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Avatar aria-label="title"  
                        variant="rounded"
                        sx={{
                        height: "auto",
                        marginRight:(theme) => theme.spacing(1)}}
                      >
                        {item.header.slice(0, 1)}
                      </Avatar>
                      <CustomType>{item.header}</CustomType>
                      <CustomType sx={{marginLeft: "auto", marginRight: "auto"}}>{item.description}</CustomType>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ProjectCard {...item}/>
                    </AccordionDetails>
                  </Accordion>
                )) :
                null
            }
          </StyledProfileCardDiv>
        </animated.div>
    );
};

export default ProjectListView;