import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";
import authService from "../../Appwrite/Auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <button
        className="inline-block px-6 py-4 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
