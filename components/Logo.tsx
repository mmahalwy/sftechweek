import React from 'react';
import logo from '../public/images/sf-techweek-logo.png';
import Image from 'next/image';

const Logo = ({ width = 200, height = 200 }) => <Image src={logo} width={width} height={height} />;

export default Logo;
