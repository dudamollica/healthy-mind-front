import { ContainerRegistrations, LogoStyle, LogoImg, FormStyle, InputForm, ButtonForm, LinkStyle } from "../Styles/PagesStyles/RegistrationsStyles"
import Logo from "../Assets/mind.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function loginApp(e) {
        e.preventDefault();
        setLoading(true);
        const URL =
            process.env.REACT_APP_API_URL;
        const body = { email, password };
        const promise = axios.post(URL, body);
        promise.then((res) => {
            // saveToken(res.data.token);
            // saveImg(res.data.image);
            navigate("/hoje");
            setLoading(false);
        });
        promise.catch((err) => {
            setLoading(false);
            alert(err.response.data.message);
        });
    }

    return (
        <ContainerRegistrations>
            <LogoStyle>
                <LogoImg src={Logo} />
            </LogoStyle>

            <FormStyle onSubmit={loginApp}>
                <InputForm
                    disabled={loading ? true : false}
                    placeholder="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></InputForm>

                <InputForm
                    disabled={loading ? true : false}
                    placeholder="senha"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></InputForm>
                <ButtonForm
                    type="submit"
                    disabled={loading ? true : false}
                >
                    {loading ? <ThreeDots color="#ffffff" /> : "Entrar"}
                </ButtonForm>
            </FormStyle>

            <LinkStyle>
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </LinkStyle>

        </ContainerRegistrations>
    )
}