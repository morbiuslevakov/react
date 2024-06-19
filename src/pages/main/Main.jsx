import React from "react";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { Stack, Typography, Box } from '@mui/material';
import {Infographic} from "../../components/infogrphic/Infographic";
import {TelegramCard} from "../../components/telegram-card/TelegramCard";

export const Main = () => {

    return (
        <Wrapper style={{"top":0, "left":0}}>
            <Stack className="main-block" style={{"backgroundColor": "#004444", "paddingTop":"80px"}}>
                <div>
                    <Box style={{"display":"grid"}}>
                        <h1 style={{"fontSize": "5rem", "textAlign":"left", "color": "white", "float":"left"}} className="main-title">yusra</h1>
                        <h3 style={{"fontSize": "3rem", "textAlign":"right", "color": "white", "float":"right"}} className="main-title">.community</h3>
                    </Box>
                    {/*<Box className="main-block-subtitle" style={{"display":"block", "width":"100%", "max-width":"1100px"}}>*/}
                    {/*    <Typography style={{"fontSize": "1.75rem", "fontWeight":300, "fontFamily":"Montserrat, sans-serif", "color": "white", "float":"right", "marginTop":"80px"}}>What is YusraCommunity</Typography>*/}
                    {/*</Box>*/}
                </div>
            </Stack>
            <PageContent style={{"width":"auto"}}>
                <Infographic titleFloat="right" textFloat="right" title="about"
                             text="Данный сайт предназначен для обмена (свапа) токенов YUSRA, чтобы обменять токены — вам необходимо зарегистрироваться"/>
                <Box style={{"padding":"20px"}}>
                    <Box style={{"float": "right", "borderRight": "4px solid #004444", "padding": "24px 30px"}}>
                        <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                            YusraCommunity — это высококвалифицированная, анонимная и независимая команда разработчиков и крипто-энтузиастов. Команда не предоставляет финансовые консультации и не связана с другими криптокомпаниями. Мы открыты для новых идеи и работаем исключительно в интересах криптосообщества.
                        </Typography>
                    </Box>
                </Box>
                <Infographic titleFloat="right" textFloat="right" title="about"
                             text="Yusra была сформирована в 2024 году активными сторонниками мира WEB3 технологий. Вместе с сообществом мы можем создавать лучшие продукты DeFi на мировом рынке. Мы открыты к сотрудничеству и рады принять новых членов команды. Присоединяйся к нам, чтобы создать будущее WEB3."/>
                {/*<Stack style={{"width":"100%", "alignItems":"center"}} mt={10} gap={7}>*/}
                {/*    <Box style={{"width": "100%"}}>*/}
                {/*        <TelegramCard />*/}
                {/*    </Box>*/}
                {/*</Stack>*/}
            </PageContent>
        </Wrapper>
    );
}
