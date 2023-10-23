import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled('div')`
    padding: 100px;
`;

export const Header = styled('header')`
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 2px solid grey;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: black;
    &.active {
        color: red;
    }
`;

export const Nav = styled('nav')`
    display: flex;
    gap: 40px;
`;
