import { FooterSyle } from "../Styles/ComponentsStyles/FooterStyle"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterSyle data-test="menu">
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
                {/* <TodayStyle data-test="today">
                    <CircularProgressbar
                        value={percentageDone}
                        text={"Hoje"}
                        styles={buildStyles({ textColor: "#ffffff", pathColor: "white", trailColor: buttonsLigthBlue })}
                    />
                </TodayStyle> */}
            </Link>
            <Link to="/historico">Registros</Link>
        </FooterSyle>
    )
}