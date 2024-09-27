import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import ToggleSwitch from '../common/toggleSwitch';

const StyledHeader = styled.header<{ theme: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => (theme === 'light' ? '#F5F5F5' : '#15202b')};
    text-align: center;
    text-transform: uppercase;
    font-family: 'Raleway', fantasy;
    position: relative;
    width: 100%;
    height: 10%;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

const HeadTitle = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 30px;
    user-select: none;
`;

const ColoredText = styled.div`
    display: flex;
    width: 40px;
    justify-content: center;
    color: ${(props) => props.color || 'black'};
`;

const ToggleContainer = styled.div`
    position: absolute;
    right: 3%;
    display: flex;
    align-items: center;
`;

const SubtitleWapper = styled.div`
    display: flex;
    padding: 4px 52px;
    border-radius: 7px;
    position: absolute;
    min-width: 50px;
    left: 3%;
    align-items: center;
    justify-content: center;
    background: #5200FF;
`;

const Subtitle = styled.div<{ theme: string }>`
    font-size: 20px;
    color: #DEE0DE;
    user-select: none;
`;

interface HeaderProps {
    subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ subTitle }) => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const header_onClicked = () => {
        navigate('/');
    };

    return (
        <StyledHeader theme={theme}>
            {subTitle && 
                <SubtitleWapper>
                    <Subtitle theme={theme}>{subTitle}</Subtitle>
                </SubtitleWapper>}

            <HeadTitle onClick={header_onClicked}>
                <ColoredText color='#FF7E7E'>A</ColoredText>
                <ColoredText color='#FF7E7E'>L</ColoredText>
                <ColoredText color='#FF7E7E'>G</ColoredText>
                <ColoredText color='#FFA07A'>O</ColoredText>
                <ColoredText color='#FFA07A'>R</ColoredText>
                <ColoredText color='#FFA07A'>I</ColoredText>
                <ColoredText color='#FFD569'>T</ColoredText>
                <ColoredText color='#FFD569'>H</ColoredText>
                <ColoredText color='#FFD569'>M</ColoredText>
                <ColoredText color='#1E1E1E'>-</ColoredText>
                <ColoredText color='#58E79B'>C</ColoredText>
                <ColoredText color='#58E79B'>A</ColoredText>
                <ColoredText color='#58E79B'>N</ColoredText>
                <ColoredText color="#70BAFF">V</ColoredText>
                <ColoredText color="#70BAFF">A</ColoredText>
                <ColoredText color="#70BAFF">S</ColoredText>
            </HeadTitle>

            <ToggleContainer>
                <ToggleSwitch onToggle={toggleTheme} />
            </ToggleContainer>
        </StyledHeader>
    );
};

export default Header;
