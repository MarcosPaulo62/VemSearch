import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CardBackground } from "../../components/CardBackground/CardBackground";
import { MainLogin } from "./styles";
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button/Button';

interface FormData {
    email: string;
    senha: string;
}

export function Login(){
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

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

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <input 
                        type='email'
                        placeholder='e-mail'
                        {...register("email")}
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
                        fontSize='24px'
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