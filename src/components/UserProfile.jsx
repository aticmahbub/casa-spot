import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./FirebaseProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <Helmet>
                <title>
                    User Profile
                </title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {user?.displayName}</h2>
    <p>User email: {user?.email}</p>
    <p>User image URL: {user?.photoURL}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contact</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserProfile;