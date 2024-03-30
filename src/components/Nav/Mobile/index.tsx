import {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {List, X} from "@phosphor-icons/react";
import Box from "@/components/Blocks/Box";
import {NavData} from "@/components/Nav/NavLinks/Data";
import SingleNavLink from "@/components/Nav/NavLinks/SingleLink";

const Nav = styled.nav<{ isOpen: boolean }>`
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.4s;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background: none;
    border: 2px solid white;
    border-radius: 100px;
    width: 60px;
    height: 60px;
    font-size: 50px;
    cursor: pointer;
`;


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box display={["block","block","none"]}>
            <Box border={"2px solid white"} borderRadius={"100%"} width={"40px"} height={"40px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <List size={24} onClick={toggleMenu}/>
            </Box>
            <Nav isOpen={isOpen}>
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.4}}
                >
                    {NavData.map((item, index) => (
                        <Box mt={"15px"} onClick={toggleMenu} key={index}>
                            <SingleNavLink title={item.title} link={item.link}/>
                        </Box>
                    ))}
                </motion.div>
                <CloseButton onClick={toggleMenu}>
                    <X size={32}/>
                </CloseButton>
            </Nav>
        </Box>
    );
};

export default MobileNav;
