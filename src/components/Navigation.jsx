import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { val } from './variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = () => {
  const data = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const links= ['works','skill','history'];

  return (
        <Nav>
          {links.map((links)=>{
              return(
                <Item>
                  <AniLink paintDrip hex="#FF6C9C" component={Link} to={`/${links}`}>{links}</AniLink>
                </Item>
                )
          })}
        </Nav>
  );
};


const Nav = styled.ul`
  box-sizing: border-box;
  margin-bottom: 32px 0 152px;
  text-align: right;
`

const Item = styled.li`
  font-size: ${val.s24};
  list-style: none;
  display: inline-block;
  margin-right: ${val.s56};
  position: relative;
  a{
    transition: 1s;
  &:hover{
    color: ${val.pink};
    }
  }
  &:after{
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${val.pink};
    transform: scale(0,1);
    transition: transform 0.3s;
  }
  &:hover::after{
    transform: scale(1,1);
  }
`


export default Navigation;
