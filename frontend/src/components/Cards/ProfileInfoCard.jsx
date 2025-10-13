import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const { user, clearUser } = useContext(UserContext);

const handelLogout = () => {
  localStorage.clear(); 
  clearUser();           
  navigate("/");         
};

return (
  user && (   // sadece kullanıcı varsa göster
    <div className="flex items-center">
      <img
        src={user.profileImageUrl}
        alt=""
        className="w-11 h-11 bg-gray-300 rounded-full mr-3"
      />
      <div>
        <div className="text-[15px] text-black font-bold leading-3">
          {user.name || ""}
        </div>
        <button
          className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
          onClick={handelLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
);

export default ProfileInfoCard;