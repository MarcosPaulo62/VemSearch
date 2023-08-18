import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CardBackground } from "../../components/CardBackground/CardBackground";
import { MainLogin } from "./styles";
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button/Button';
import { IFormAuthValues } from '../../utils/interface';
import { Alert } from '../../components/Alert/Alert';

export function Login(){
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<IFormAuthValues>();

    const onSubmit = (data: IFormAuthValues) => {
        loginUser(data);
        reset();
    };

    const apiKey = 'http://vemser-dbc.dbccompany.com.br:39000/vemser/dbc-pessoa-api'

    async function loginUser(user: IFormAuthValues){
        const response = await fetch(`${apiKey}/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok){
            throw new Error("Erro ao fazer requisição!");
        }

        const token = await response.text();
        localStorage.setItem("token", token);
        navigate('/area-logada');
    }

    return(
        <CardBackground width="46vw">
            <MainLogin>
                <div className='icons'>
                    <Link to='/'>
                        <span className="material-symbols-rounded">
                            home
                        </span>
                    </Link>
                    <Link to='/'>
                        <img src={logo} alt="Logo VemSearch application" />
                    </Link>
                    <Link to='/sobre'>
                        <span className="material-symbols-rounded">
                            info
                        </span>
                    </Link>
                </div>
                <Alert backgroundColor='red'>Olá</Alert>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <input 
                        type='text'
                        placeholder='nome'
                        {...register("login")}
                        required
                    />

                    <input 
                        type='password'
                        placeholder='senha'
                        {...register("senha")}
                        required
                        minLength={8}
                    />

                    <span>Novo por aqui? <Link className='link' to='/cadastro'>Cadastre-se!</Link></span>

                    <Button 
                        border='none'
                        color='var(--black-85)'
                        backgroundColor='var(--brand-2)'
                        width='176px'
                    >entrar</Button>
                </form>
            </MainLogin>
        </CardBackground>
        
    )
}