import React from 'react'
import styled from '@emotion/styled'
import { val } from './variable.js'

const Number = (countval) =>{
  return(
      <NumberWrap>
        <Current>{countval}</Current>
        <Pages>04</Pages>
      </NumberWrap>
  )
}


const NumberWrap = styled.div`
  width: 88px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  z-index: 10;
  font-family: Verdana,sans-serif;
  font-weight: bold;
`
const Current = styled.span`
  width: 88px;
  font-size: 32px;
  border-bottom: 1px solid ${val.black};
`
const Pages = styled.span`
  font-size: 16px;
  text-align: right;
`

export default Number
