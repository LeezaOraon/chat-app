import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
    const {authuser}= useAuthStore;

    return<div>ProfilePage</div>
};

export default ProfilePage;