import { Typography, Box } from "@mui/material";
import { TelegramQrIcon } from '../../pages/wallet/icons/TelegramQrIcon';
import { Link } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";

export const TelegramCard = () => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <Box className="telegram-card-wrapper" style={{"position":"relative"}}>
            <Box className="telegram-card">
                <div className="telegram-card-header">
                    <Typography className="telegram-card-header-text" style={{"color": "#00a575", "fontFamily": "Montserrat, sans-serif", "margin": "auto", "fontSize": "2rem"}} fontWeight={300}>telegram bot</Typography>
                    <div className="telegram-card-header-button">
                        <a className="link svelte-1na1a25 primary shadow" target="_blank" href="https://t.me/YusraTeamBot">/start</a>
                    </div>
                </div>
                <div className="telegram-card-description">
                    <Typography style={{"color": "#717171", "fontFamily": "Montserrat, sans-serif", "margin": "auto", "fontSize":"1rem"}}>
                        <span style={{"color": "#ffffff", "backgroundColor": "#00a575"}}>yusraBot</span> - telegram бот, обеспечивающий безопасный, быстрый и простой способ работы со всеми нашими продуктами. Он так же функционален, как и наша веб-платформа, но доступен из мессенджера Telegram. Бот сочетает в себе полную функциональность и оптимизированный пользовательский интерфейс.
                    </Typography>
                    <div className="telegram-card-description-button">
                        <a className="link svelte-1na1a25 primary shadow" target="_blank" href="https://t.me/YusraTeamBot">/start</a>
                    </div>
                </div>
            </Box>
            <div ref={cardRef}
                 className={`bot__card-img svelte-dpmec9 ${isVisible ? '' : 'plane-hidden'}`}>
            </div>
            <TelegramQrIcon/>
        </Box>
    )
}