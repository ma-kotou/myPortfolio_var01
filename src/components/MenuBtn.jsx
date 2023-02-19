import React from 'react'
import { val } from '../components/variable.js';
import { slide as Menu } from "react-burger-menu";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'
import AnimationLink from './AnimationLink'


const MenuBtn = (props) => {
  return(
    <Menu width={600}>
      <ul>
        <AnimationLink link="work"/>
        <li>
          <AniLink paintDrip hex="#FF6C9C" component={Link} to="/skill">skill</AniLink>
        </li>
        <li>
          <AniLink paintDrip hex="#FF6C9C" component={Link} to="/history">history</AniLink>
        </li>
      </ul>
    </Menu>
  )
}

export default MenuBtn
