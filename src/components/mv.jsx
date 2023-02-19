import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { val } from './variable.js'
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import { StaticImage } from 'gatsby-plugin-image'
import Number from "./Numbar"

const Mv = () => {
  <link rel="stylesheet" href="https://use.typekit.net/zvp3usw.css"></link>

return (
    <MainView>
      <Number/>
      <Switch>
        <LeftButton>
          <StaticImage src="../images/arrow.png" />
        </LeftButton>
        <RightButton>
          <StaticImage src="../images/arrow.png" />
        </RightButton>
      </Switch>
      <TextBox>
        <Navigation/>
        <TextArea>
          <Line />
          <H2>Thank you for visit!</H2>
          <SubNavigation>
            <Item>Direction</Item>
            <Item>Design</Item>
            <Item>Develop</Item>
          </SubNavigation>
        </TextArea>
      </TextBox>
      <StaticImage
        src="../images/mv01.jpg"/>
    </MainView>
  )
}

const MainView = styled.section`
  width: calc(100% - 180px);
  height: calc(100vw - 34px);
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .gatsby-image-wrapper-constrained{
    max-width: 50%;
  }
`

const Switch = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate( -60%, -50% );
  z-index: 10;
`

const LeftButton = styled.div`
  width : 40px;
  height : 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${val.darkGray};
  img{
    width: 60%;
  }
`
const RightButton = styled.div`
  width : 40px;
  height : 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  background: ${val.black};
  img{
    width: 60%;
  }
`
const TextBox = styled.div`
  width: 50%;
`
const Line = styled.span`
  width: 50px;
  height: 15px;
  margin-bottom: 16px;
`

const TextArea = styled(motion.div)`
  white-space: nowrap;
  padding-left: 3rem;
  text-align: left;
  transition: 1s;
  overflow: hidden;
`

const H2 = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: ${val.s120};
`

const SubNavigation = styled.ul`
  font-size: ${val.s24};
`

const Item = styled.li`
  list-style: dot;
`
export default Mv
