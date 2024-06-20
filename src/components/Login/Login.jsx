import React from "react";
import './Login.css';
import { FaUser, FaLock} from "react-icons/fa";

const Login = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Senha" required/>
                    <FaLock className="icon"/>
                </div>

                <div className="remenber-forgot">
                    <label><input type="checkbox"/>Lembre De Mim</label>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Não Possuí Cadastro? <a href="#">Registrar-se</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;