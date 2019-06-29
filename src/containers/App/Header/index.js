//core
import React from 'react'
import { Link } from "react-router-dom";

// Styles
import { HeaderContent, LinkButton } from './styles';


const  Header = () => {
    return (
        <HeaderContent>
            <Link to='/' style={{ textDecoration: 'none' }}><LinkButton>Home</LinkButton></Link>
            <Link to='/history' style={{ textDecoration: 'none' }}><LinkButton>History</LinkButton></Link>
        </HeaderContent>
    )
}

export default Header;
