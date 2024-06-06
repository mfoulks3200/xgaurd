import { Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { FaHandPaper } from "react-icons/fa";

import './Navbar.css';
import ThemeToggle from '~/lib/layout/ThemeToggle';
import { IoChevronDown } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <Flex
                as="header"
                width="full"
                className='navbar'
                boxShadow='sm'
            >
                <div
                    className='navbar-title'
                >
                    <Box color='blue.600'><FaHandPaper /></Box>
                    <h1>XGuard</h1>
                </div>
                <NavLink to="/">
                    {({ isActive, isPending, isTransitioning }) => (
                        <Button colorScheme='blue' variant={isActive ? 'solid' : 'ghost'}>Dashboard</Button>
                    )}
                </NavLink>
                <NavLink to="/routes">
                    {({ isActive, isPending, isTransitioning }) => (
                        <Button colorScheme='blue' variant={isActive ? 'solid' : 'ghost'}>Routes</Button>
                    )}
                </NavLink>
                <NavLink to="/connectors">
                    {({ isActive, isPending, isTransitioning }) => (
                        <Button colorScheme='blue' variant={isActive ? 'solid' : 'ghost'}>Connectors</Button>
                    )}
                </NavLink>
                <NavLink to="/metrics">
                    {({ isActive, isPending, isTransitioning }) => (
                        <Button colorScheme='blue' variant={isActive ? 'solid' : 'ghost'}>Metrics</Button>
                    )}
                </NavLink>

                <div className='navbar-end'>
                    <ThemeToggle />
                </div>
            </Flex>
            <div className='navbar-shim'></div>
        </>
    );
};

export default Navbar;
