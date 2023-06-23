import { ContainerRegistrations, LogoStyle, LogoImg, FormStyle, InputForm, ButtonForm, LinkStyle } from "../Styles/PagesStyles/RegistrationsStyles"
import Logo from "../Assets/mind.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function submitRegister(e) {
        e.preventDefault();
        setLoading(true);
        const URL =
            `http://localhost:5000/cadastro`;
        const body = { email, name, image, password };
        const promise = axios.post(URL, body);
        promise.then((res) => {
            navigate("/");
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }

    return (
        <ContainerRegistrations>
            <LogoStyle>
                <LogoImg src={Logo} />
            </LogoStyle>

            <FormStyle onSubmit={submitRegister}>
                <InputForm
                    disabled={loading ? true : false}
                    placeholder="nome"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></InputForm>

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

                <InputForm
                    disabled={loading ? true : false}
                    placeholder="foto"
                    type="file"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></InputForm>

                <ButtonForm
                    type="submit"
                    disabled={loading ? true : false}
                >
                    {loading ? <ThreeDots color="#ffffff" /> : "Cadastrar"}
                </ButtonForm>
            </FormStyle>

            <LinkStyle>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </LinkStyle>

        </ContainerRegistrations>
    )
}
