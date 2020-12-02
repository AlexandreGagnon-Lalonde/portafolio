import React from "react";
import Link from "next/link";
import styled, { keyframes } from 'styled-components'

import { COLORS } from "../../public/constant";

const MoreMinorProjects = () => {
  return (
      <MoreProjectsLink href={"/archive"} passHref>
        <ArchiveLink><ASpan>A</ASpan> <RSpan>R</RSpan> <CSpan>C</CSpan> <HSpan>H</HSpan> <ISpan>I</ISpan> <VSpan>V</VSpan> <ESpan>E</ESpan></ArchiveLink>
      </MoreProjectsLink>
  );
};

const ASlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const RSlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const CSlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const HSlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const ISlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const VSlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const ESlideIn = keyframes`
  0% {
    right: -30px;
  }
  50% {
    right: 40px;
  }
  55% {
    right: 40px;
  }
  100% {
    right: 20px;
  }
`
const ASpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 41%;
  text-align: center;
`
const RSpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 44%;
  text-align: center;

`
const CSpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 47%;
  text-align: center;

`
const HSpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 50%;
  text-align: center;

`
const ISpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 53%;
  text-align: center;

`
const VSpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 56%;
  text-align: center;

`
const ESpan = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  right: -30px;
  top: 59%;
  text-align: center;

`

const Container = styled.div`
`
const ArchiveLink = styled.a`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
  grid-row: 1 / 3;
  grid-column: 2;
  background: ${COLORS.blue};
  background: radial-gradient(ellipse at right, ${COLORS.blue} 0%, ${COLORS.white} 50%);
  transition: all 0.2s;
  font-weight: bold;
  font-size: 1.25em;
  color: ${COLORS.orange};

  &:hover {
    background: radial-gradient(ellipse at right, ${COLORS.blue} 30%, ${COLORS.white} 65%);
  }
  &:hover ${ASpan} {
      animation: 0.5s ${ASlideIn} ease-out forwards;
  }
  &:hover ${RSpan} {
      animation: 0.6s ${RSlideIn} ease-out forwards;
  }
  &:hover ${CSpan} {
      animation: 0.7s ${CSlideIn} ease-out forwards;
  }
  &:hover ${HSpan} {
      animation: 0.8s ${HSlideIn} ease-out forwards;
  }
  &:hover ${ISpan} {
      animation: 0.9s ${ISlideIn} ease-out forwards;
  }
  &:hover ${VSpan} {
      animation: 1s ${VSlideIn} ease-out forwards;
  }
  &:hover ${ESpan} {
      animation: 1.1s ${ESlideIn} ease-out forwards;
  }
`

const MoreProjectsLink = styled(Link)`
  height: 100%;
`;

export default MoreMinorProjects;
