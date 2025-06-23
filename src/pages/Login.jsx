import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = (role) => {
    dispatch(login({ role }));
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      <button className="btn btn-primary me-2" onClick={() => handleLogin("user")}>
        Login as User
      </button>
      <button className="btn btn-secondary" onClick={() => handleLogin("admin")}>
        Login as Admin
      </button>
    </div>
  );
}
