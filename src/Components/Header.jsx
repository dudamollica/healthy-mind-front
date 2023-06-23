import dayjs from "dayjs"
import Logo from "../Assets/mind.png"
import { HeaderStyle, UserImg, LogoImg, DateText } from "../Styles/ComponentsStyles/HeaderStyle";
import { LinkStyle } from "../Styles/PagesStyles/RegistrationsStyles";

export default function Header() {
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
            {/* <UserImg src={userImg} /> */}
            <UserImg src={"https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"} />
        </HeaderStyle>
    )
}