import { useAuth0 } from "@auth0/auth0-react";

const Img = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <img src={user.picture} alt={user.name} className="size-8 rounded-full outline -outline-offset-1 outline-white/10" />
        )
    );
};

export default Img;