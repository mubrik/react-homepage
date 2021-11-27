import * as React from 'react';
// material
import { styled } from '@mui/system';
import { Paper, Skeleton } from '@mui/material';
import {CustomBaseButton} from './CustomComponents';
// custom type
import { CustomType } from './CustomComponents';

const StyledCardAreaDiv = styled("div")(({theme}) => ({
  display: "grid",
  gridTemplateRows: "auto",
  padding: theme.spacing(0.4),
  justifyItems: "center",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "auto auto",
  },
}));

const StyledCardTextAreaDiv = styled("div")(({theme}) => ({
  padding: theme.spacing(0.4),
  margin: theme.spacing(0.2),
  display: "flex",
  flexDirection: "column",
  textAlign: "center"
}));

const StyledCardButtonAreaDiv = styled("div")(({theme}) => ({
  padding: theme.spacing(0.4),
  margin: theme.spacing(0.4),
  display: "flex",
  justifyContent: "space-evenly"
}));

const StyledImg = styled("img")(({theme}) => ({
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

  return(
    <Paper 
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <StyledCardAreaDiv>
        {imageUri ? (
            <StyledImg
              alt={"placeholder"}
              src={imageUri}
            />
            ) : (
              <Skeleton width={60} height={30} animation="wave"/>
            )
        }
          
        <StyledCardTextAreaDiv>
          <div>
            <CustomType variant="body2">
              {content ? content : ""}
            </CustomType>
          </div>
          <StyledCardButtonAreaDiv>
            {siteLink && <CustomBaseButton href={siteLink}>Check It Out</CustomBaseButton>}
            <CustomBaseButton href={codeLink} >Git Code</CustomBaseButton>
          </StyledCardButtonAreaDiv>
        </StyledCardTextAreaDiv>
      </StyledCardAreaDiv>
    </Paper>
  );
};

export default ProjectCard;