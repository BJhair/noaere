import LoginButton from "../Components/Login/login";
import LogoutButton from "../Components/Login/logout";

export default function Inicio() {
    return (
        <div className = "text-center mt-20">
            <h1 className = "">Ola mundo</h1>
            <LoginButton />
            <LogoutButton />
        </div>
    );
}