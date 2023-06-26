import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Pensativo from "../Assets/pensativo.png"
import Feliz from "../Assets/feliz.png"
import Apaixonado from "../Assets/apaixonado.png"
import Triste from "../Assets/triste.png"
import Chateado from "../Assets/chateado.png"
import Autoestima from "../Assets/autoestimaBoa.png"
import Bravo from "../Assets/bravo.png"
import { DivForm, FormStyle, TodayContainer, TitleStyle, InputStyle, LabelStyle, ButtonStyle, DivEmotion, InputEmotion, EmotionImg, OptionsDiv, Option } from "../Styles/PagesStyles/TodayStyles"
import { useContext, useState } from "react";
import axios from "axios"
import { AuthContext } from "../AppContext/auth"

export default function Today() {
    const [timeSlept, setTimeSlept] = useState("");
    const [timeWokeUp, setTimeWokeUp] = useState("");
    const [emotionEvent, setEmotionEvent] = useState("");
    const [goodHabit, setGoodHabit] = useState("");
    const [badHabit, setBadHabit] = useState("");
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    function submitRegister(e, img) {
        e.preventDefault();
        setLoading(true);
        const URL =
            `${import.meta.env.VITE_APP_API_URL}today`
        const body = { timeSlept, timeWokeUp, emoticonImg: img, emotionEvent, goodHabit, badHabit };
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }

    function submitRegisterExercise(e, click) {
        e.preventDefault();
        setLoading(true);
        const URL =
            `${import.meta.env.VITE_APP_API_URL}/today`;
        const body = { exercise: click };
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }

    function submitRegisterFood(e, click) {
        e.preventDefault();
        setLoading(true);
        const URL =
            `${import.meta.env.VITE_APP_API_URL}/today`;
        const body = { food: click };
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }

    function submitRegisterWater(e, click) {
        e.preventDefault();
        setLoading(true);
        const URL =
            `${import.meta.env.VITE_APP_API_URL}/today`;
        const body = { water: click };
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        });
    }


    return (
        <>
            <Header />

            <TodayContainer>
                <DivForm >
                    <TitleStyle>Sono</TitleStyle>
                    <FormStyle onSubmit={submitRegister}>
                        <LabelStyle>Aproxidamente qual horário você foi dormir?</LabelStyle>
                        <InputStyle
                            disabled={loading ? true : false}
                            placeholder="time"
                            type="time"
                            required
                            value={timeSlept}
                            onChange={(e) => setTimeSlept(e.target.value)}
                        ></InputStyle>
                        <LabelStyle>Qual horário você acordou?</LabelStyle>
                        <InputStyle
                            disabled={loading ? true : false}
                            placeholder="time"
                            type="time"
                            required
                            value={timeWokeUp}
                            onChange={(e) => setTimeWokeUp(e.target.value)}
                        ></InputStyle>

                        <ButtonStyle>Salvar</ButtonStyle>
                    </FormStyle>
                </DivForm>

                <DivForm>
                    <TitleStyle>Emoção geral do dia</TitleStyle>
                    <DivEmotion>
                        <EmotionImg src={Pensativo} onClick={(e) => submitRegister(e, "Pensativo")} />
                        <EmotionImg src={Feliz} onClick={(e) => submitRegister(e, "Feliz")} />
                        <EmotionImg src={Apaixonado} onClick={(e) => submitRegister(e, "Apaixonado")} />
                        <EmotionImg src={Triste} onClick={(e) => submitRegister(e, "Triste")} />
                        <EmotionImg src={Autoestima} onClick={(e) => submitRegister(e, "Autoestima")} />
                        <EmotionImg src={Chateado} onClick={(e) => submitRegister(e, "Chateado")} />
                        <EmotionImg src={Bravo} onClick={(e) => submitRegister(e, "Bravo")} />
                    </DivEmotion>

                    <FormStyle>
                        <LabelStyle>Houve algum acontecimento que motivou esta emoção?</LabelStyle>
                        <InputEmotion
                            disabled={loading ? true : false}
                            placeholder="  escreva aqui..."
                            type="text"
                            value={emotionEvent}
                            onChange={(e) => setEmotionEvent(e.target.value)}
                        ></InputEmotion>
                        <ButtonStyle>Salvar</ButtonStyle>
                    </FormStyle>
                </DivForm>

                <DivForm>
                    <TitleStyle>Saúde Física</TitleStyle>
                    <FormStyle>
                        <LabelStyle>Você fez exercício físico hoje?</LabelStyle>
                        <OptionsDiv>
                            <Option onClick={(e) => submitRegisterExercise(e, "Sim")}>Sim</Option>
                            <Option onClick={(e) => submitRegisterExercise(e, "Não")}>Não</Option>
                        </OptionsDiv>

                        <LabelStyle>Como foi sua alimentação hoje?</LabelStyle>
                        <OptionsDiv>
                            <Option onClick={(e) => submitRegisterFood(e, "pouca")}>Foi pouca</Option>
                            <Option onClick={(e) => submitRegisterFood(e, "boa")}>Foi boa</Option>
                            <Option onClick={(e) => submitRegisterFood(e, "exagerada")}>Foi exagerada</Option>
                        </OptionsDiv>

                        <LabelStyle>Como foi sua ingestão hídrica hoje?</LabelStyle>
                        <OptionsDiv>
                            <Option onClick={(e) => submitRegisterWater(e, "pouca")}>Foi pouca</Option>
                            <Option onClick={(e) => submitRegisterWater(e, "boa")}>Foi boa</Option>
                            <Option onClick={(e) => submitRegisterWater(e, "exagerada")}>Foi exagerada</Option>
                        </OptionsDiv>

                    </FormStyle>
                </DivForm>

                <DivForm>
                    <TitleStyle>Hábitos</TitleStyle>
                    <FormStyle>
                        <LabelStyle>Praticou algum hábito ruim hoje? Qual(is)?</LabelStyle>
                        <InputEmotion
                            disabled={loading ? true : false}
                            type="text"
                            value={badHabit}
                            onChange={(e) => setBadHabit(e.target.value)}
                        ></InputEmotion>

                        <LabelStyle>Praticou algum hábito bom hoje? Qual(is)?</LabelStyle>
                        <InputEmotion
                            disabled={loading ? true : false}
                            type="text"
                            value={goodHabit}
                            onChange={(e) => setGoodHabit(e.target.value)}
                        ></InputEmotion>
                        <ButtonStyle>Salvar</ButtonStyle>
                    </FormStyle>
                </DivForm>

                <Footer></Footer>
            </TodayContainer>
        </>
    )
}