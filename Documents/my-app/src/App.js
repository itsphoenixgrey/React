import logo from "./images/logo.svg"
import mockup from "./images/illustration-mockups.svg"
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo"/>
      </header>

      <main>
       <img src={mockup} alt="mockup"/>
       <div className="content">
         <h2>Build The Community<br></br> Your Fans Will Love</h2>
         <p>Huddle re-imagines the way we build communities. you have <br></br>a voice, but so does your audience
           create connections with <br></br>your users as you engage in genuine discussion.
         </p>
         <button>Register</button>
       </div>
      </main>

      <footer>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-github"></i>
      </footer>
      
    </>
  );
}

export default App;
