import React from 'react'
import styled from '@emotion/styled'
import { val } from './variable.js'
import { motion } from "framer-motion"
import video from "./../images/popVideo.mp4"

const Mv = () => {
return (
    <MainView>
      <video autoPlay loop muted playsInline style={{ width:"100%" }}>
        <source src={video} type="video/mp4"/>
      </video>
      <TextArea>
          <H2 initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 1 }}>Design/Coding/Program</H2>
          <H2 initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 2 }}>ディレクション・進行管理まで</H2>
          <H2 initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 3 }}>全てお任せ下さい。</H2>
      </TextArea>
    </MainView>
  )
}

export default Mv

const MainView = styled.section`
  width: 100%;
  min-height: 40vh;
  position: relative;
  margin-bottom: ${val.s160};
`

const TextArea = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-height: 20rem;
  padding-left: 3rem;
  text-align: left;
  transition: 1s;
  overflow: hidden;
`

const H2 = styled(motion.h2)`
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  margin-bottom: .5rem;
`
