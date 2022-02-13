import React, {useEffect, useState} from 'react';
// material
import { styled, useTheme } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary  } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// animation
import { motion } from "framer-motion";
// custom comps
import ProjectCard from "./ProjectCard";
import { CustomBaseButton, CustomType} from './CustomComponents';
import useBackgroundGradientColor from "./utils/useBackgroundGradientColor";
//types
import {IHomePageState} from "./HomePage";

const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  padding: theme.spacing(2),
  // border: theme.palette.type === "dark" ? `1px solid ${theme.palette.secondary.light}52` : "1px solid #3b47dd40",
  // boxShadow: theme.palette.type === "dark"? "none" : `rgb(0 0 0 / 15%) 1px 1px 9px 1px`,
  overflow: "auto",
  maxHeight: "84vh",
  backdropFilter: "blur(2px)",
  borderRadius: "0.9em",
  minWidth:"100%", // mobile
  [theme.breakpoints.up("xs")]: {
    minWidth:"50vw"
  },
  [theme.breakpoints.up("sm")]: {
    minWidth:"55vw",
    maxHeight: "86vh",
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

    // states handle accordions
    const [expanded, setExpanded] = useState<boolean|string>(false);
    // project data
    const [projData, setProjData] = useState<IJsonObj[]|null>(null);
    
    // animation colors for motion div
    const animateColors = useBackgroundGradientColor();

    // fetch project details
    useEffect(() => {
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

    return(
      <motion.div
        // animate in div
        initial={{
          position: "absolute",
          translateX: "-50%",
          translateY: "-50%",
          scale: 0.3,
        }}
        animate={{
          scale: 1,
          translateX: "0%",
          translateY: "0%",
          transition: {
            duration: 1,
            type: "spring"
          },
        }}
        exit={{
          translateX: "50%",
          translateY: "80%",
          scale: 0.2,
          transition: {
            duration: 0.3
          },
        }}
      >
        <motion.div
          // animate in background
          initial={{
            position: "absolute",
            right: 0,
            top: 0,
            boxShadow: "#0000002b 1px 1px 3px 1px",
          }}
          animate={{
            background: animateColors.bgColor,
            borderRadius: "0.9em",
            width: "94%",
            height: "82%",
            right: 15,
            top: 64,
            zIndex: -777,
            transition: {
              delay: 0.2,
              duration: 0.8,
              type: "spring"
            }
          }}
        >
        </motion.div>
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
      </motion.div>
    );
};

export default ProjectListView;