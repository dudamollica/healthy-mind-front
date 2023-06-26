import dayjs from "dayjs"
import Logo from "../Assets/mind.png"
import { HeaderStyle, UserImg, LogoImg, DateText } from "../Styles/ComponentsStyles/HeaderStyle";
import {AuthContext} from "../AppContext/auth"
import { useContext } from "react";

export default function Header() {
    const { userImg } = useContext(AuthContext);

    function wichDay() {
        switch (dayjs().day()) {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda";
            case 2:
                return "Terça";
            case 3:
                return "Quarta";
            case 4:
                return "Quinta";
            case 5:
                return "Sexta";
            case 6:
                return "Sábado";
            default:
                break;
        }
    }
    return (
        <HeaderStyle>
            <LogoImg src={Logo} alt="Logo" />
            <DateText>
                {wichDay()},<br></br> {dayjs().date()}/{dayjs().month() + 1}
            </DateText>
            <UserImg src={userImg} />
        </HeaderStyle>
    )
}