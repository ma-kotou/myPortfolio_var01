import React, {useState} from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { val } from './variable.js'
import { motion } from "framer-motion"
import Navigation from "./Navigation"
import { StaticImage } from 'gatsby-plugin-image'
import Number from "./Numbar"
import {CounterResult} from "./CounterResult"

const Mv = () => {

const [countval, setCountVal] = useState(0);

const CounterUp = ()=>{
  setCounterVal(prevCount => prevCount + 1);
}

const CounterDown = () => {
  setCountVal(prevCount =>
    prevCount > 0 ? prevCount -1 : prevCount)
}

return (
    <MainView
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
      opacity: { ease: "linear",duration: 1}
      }}>
      <Number/>
      <ContentWrap>
        <Navigation/>
        <CounterResult/>
        <TextArea>
          <H2>Thank you for visit!</H2>
          <Text>
            前職にてインハウスデザインのUIの設計、デザイン、コーディングを行いつつ、外注クライアントとのweb制作のディレクション・デザイン・コーディング・フロントエンドまで一貫して携わってきました。
          </Text>
          <Text>
            特にどの分野が好き！というわけでなくweb制作全般が好きで、自己満足でなくクライアントが表現したい事を上手に形にする、実現するという事に重きを置いてきました。
          </Text>
          <Text>
            前職では一人で全て担う形が多かったのですが、勿論全て一人で実行はできても複数人での作業分担した方がスピードアップには繋がります。なので、他の方に回せる箇所は回しながら指示を行いつつ案件進行を行って参りました。
          </Text>
        </TextArea>
      </ContentWrap>
      <StaticImage
        src="../images/mv01.jpg"/>
    </MainView>
  )
}

const MainView = styled(motion.section)`
  width: calc(100% - 200px);
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

const ContentWrap = styled.div`
  width: 50%;
`

const TextArea = styled(motion.div)`
  white-space: nowrap;
  padding: 0 24px;
  text-align: left;
  transition: 1s;
  overflow: hidden;
`

const Text = styled.p`
  padding-right: 56px;
  white-space: pre-line;
  line-height: 2em;
  font-size: ${val.s20};
  margin-bottom: 56px;
`

const H2 = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: ${val.s120};
`

export default Mv
