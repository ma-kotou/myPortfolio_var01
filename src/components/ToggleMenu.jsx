import styled from '@emotion/styled';
import React from 'react';


export const ToggleMenu = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open}>
      <ul>
        <li>about</li>
        <li>works</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};
