import React from 'react'

// Styles
import { HeaderContent, LinkButton } from './styles';


export default function Header() {
    return (
        <HeaderContent>
            <LinkButton>Home</LinkButton>
            <LinkButton>History</LinkButton>
        </HeaderContent>
    )
}
