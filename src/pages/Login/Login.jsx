import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("LogIn successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error(errorMessage, errorCode);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("LogIn successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center my-8">
      <img className="w-4/12 m-0" src={login} alt="" />
      <div>
        <Form
          onSubmit={handleLogIn}
          className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
        >
          <h1 className="text-2xl font-bold">LogIn</h1>
          <div className="py-6 w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input w-full max-w-xs"
            />
          </div>
          <div className="w-full pb-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input w-full max-w-xs"
            />
          </div>

          <p className="text-start text-base font-semibold">
            create a new acount
            <Link to="/register" className="text-yellow-400-700 underline pl-2">
              Register
            </Link>
          </p>
          <button type="submit" className="btns-primary">
            LogIn
          </button>
          <div className="py-4">
            <button
              onClick={handleGoogleLogIn}
              className="text-base flex items-center gap-3 font-semibold btns-primary"
            >
              <span>
                <FaGoogle />
              </span>{" "}
              Continue with google
            </button>
          </div>
          <button className="text-base flex items-center gap-3 font-semibold btns-primary">
            <span>
              <FaGithub />
            </span>{" "}
            Continue with github
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
