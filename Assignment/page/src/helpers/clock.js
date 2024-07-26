import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockContent = styled.p`
    border: solid 2px white;
    margin-left: 20px;
    padding-left: 8px;
    padding-right: 4px;
    border-radius: 5px;
    font-size: 20px;
    width: 90%;
    height: 24px;
    text-align: center;
    justify-content: center;
`;

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <ClockContent>{currentTime}</ClockContent>
        </div>
    );
}

export default Clock;
