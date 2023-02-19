import React from 'react'
import styled from '@emotion/styled';
import { val } from '../components/variable.js';

const MenuBtn = () => {

  return(
    <Button>
      <Border />
      <Border />
      <Border />
    </Button>
  )
}

const Button = styled.button`
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  background: ${val.black};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  border: none;
`

const Border = styled.span`
  display: block;
  width: 40px;
  height: 1px;
  background-color: #fff;
  margin-bottom: 10px;
  &:last-of-type{
    margin-bottom: 0;
  }
`
export default MenuBtn
