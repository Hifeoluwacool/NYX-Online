import styles from "../../styles/Home.module.css";
const Login = () => {
  return (
    <div className="Login py-5 box_container">
      <form action="/login" method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
      </form>
    </div>
  );
};

export default Login;
