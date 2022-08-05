import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="left_container">
          <span className="facebooktext">facebook</span>
          <span className="facebooktexts">
            <br />
            Facebook hepls you connect and share with
            <br className="onebr" /> the people in your life
          </span>
        </div>
        <div className="rightcontainer">
          <div className="login_container">
            <div className="text">
              <input type="text" placeholder="Email address or phone number" />
            </div>
            <div className="password">
              <input type="password" placeholder="Password" />
            </div>
            <div className="login_btn">
              <button>Login</button>
            </div>
            <div className="forgot_password">
              <span>Forgotten Password?</span>
            </div>
            <div className="hrline">
              <hr />
            </div>
            <div className="createnewaccount">
              <button>Create New Account</button>
            </div>
          </div>
          <div className="createpage">
            <span className="bold">Create a Page</span>
            <span className="normaltext">
              {" "}
              For a celebrity,band or business
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
