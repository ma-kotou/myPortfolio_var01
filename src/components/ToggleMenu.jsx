import React from 'react';
import { slide as Menu } from "react-burger-menu";
import styled from '@emotion/styled';


export const ToggleMenu = () => {
  return (
    <Menu>
      <ul>
        <li>about</li>
        <li>works</li>
        <li>contact</li>
      </ul>
    </Menu>
  );
};

export default ToggleMenu
