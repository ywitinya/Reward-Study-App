export default function Signup() {
    return(
        <button className="container">
            <div className="signup-form">
            <input type="text" placeholder="First Name" />
            <br></br>
            <input type="text" placeholder="Last Name" />
            <br></br>
            <input type="email" placeholder="Email Address" />
            <br></br>
            <input type="password" placeholder="Password" />
            <br></br>
            <input type="password" placeholder="Re-type Password" />
            <br></br>
            <a href="#" ><button type="submit">Sign Up</button></a>
            </div>
        </button>
    );
}