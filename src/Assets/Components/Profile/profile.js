import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="profile-card">
                <img src={user.picture} alt={user.name} className="profile-picture" />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">{user.email}</p>
            </div>
        )
    );

};

export default Profile;