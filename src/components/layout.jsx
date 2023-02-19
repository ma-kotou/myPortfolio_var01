import React, {useState} from 'react'
import Footer from './footer'
import { sanitize } from 'sanitize.css'
import { Global, css } from '@emotion/react'
import { val } from './variable.js';
import Sidebar from './Sidebar';
import MenuBtn from './MenuBtn';
import ToggleMenu from './ToggleMenu';


const Layout = ({ children }) => {

  return (
    <>
      <Global styles={styles} />
        <main>
          <Sidebar />
          <MenuBtn
            open={open}
            controls="navigation"
            label="メニューを開きます"
            onClick={toggleFunction}/>
            <ToggleMenu id="navigation" open={open} />
          {children}
        </main>
        <Footer />
    </>
  );
};

/* GlobalStyle */

const styles = css`
  ${ sanitize }

  body {
  color: ${val.black};
  letter-spacing: .05em;
  box-sizing: border-box;
  font-family: gill-sans-nova, sans-serif;
  }
  main{
    background: ${val.white};
  }

  a {
    color: ${val.black};
    text-decoration: none;
    cursor: pointer;
  }

  h1{
    font-size: 2rem;
  }
  h2{
    font-size: ${val.s32};
  }
  h3{
    font-size: 1.125rem;
  }
  h4{
    margin: 0;
  }
  img{
    margin-bottom: 72px;
  }
  .rightArrow{
    margin-left: 1rem;
    animation: advance 0.5 ease 0s 1 normal;
  }

  //blog style
  .block-list{
    display: flex;
    margin: 0 auto;
    justify-content: start;
    align-items: center;
    ul{
      display: flex;
      margin-bottom: .5rem;
      li{
        margin-left: .8rem;
        list-style: none;
        font-size: 12px;
        color: #000;
        border: 1px solid #000;
        padding: 2px 6px;
        border-radius: 8px;
      }
    }
  }
  .center{
    text-align: center;
    margin: 0 auto;
  }
`

export default Layout;
