import react from 'react'
import './../GameDetails/game.css'
import './login.css'
const Login = () => {
    return(
        <div>
            <h1 className="mb-4"> Login/Register</h1>
            {/*taken from footswatch sample code*/}
        <form>
            <fieldset className="wd-paragraph-border ">

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <div className="d-flex justify-content-between">
                         <input type="email" className="form-control rounded-pill me-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                        <button type="submit" className="btn btn-primary rounded-pill ">Enter</button>
                    </div>

                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>

                </div>

                <div className="form-group mb-4">

                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <div className="d-flex justify-content-between">
                        <input type="password" className="form-control rounded-pill me-3" id="exampleInputPassword1" placeholder="Password"/>
                        <button type="submit" className="btn btn-primary rounded-pill ">Enter</button>
                </div>
                </div>
                <div className="d-flex flex-column align-items-center wd-move-left">
                <div className="d-flex align-items-end flex-column">
                    <button type="submit" className="btn btn-primary rounded-pill  wd-login-button-size mb-4">Login
                    </button>
                    <form >
                        <label htmlFor="createAccount" className="form-label text-light pe-2 ">No account?</label>
                        <button type="submit" id="createAccount" className="btn btn-primary rounded-pill  wd-login-button-size ">Create Account</button>
                    </form>
                </div>
                </div>

            </fieldset>
        </form>
        </div>
    )
}

export default Login;