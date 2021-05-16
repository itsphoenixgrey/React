import logo from "./images/logoo.svg"
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
       <h2>Build The Community <br></br>Your Fans Will love</h2>
       <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat mauris. Sed tempor condimentum orci. Ut vitae consequat arcu. Nullam id felis nisl.</p>
       <button>Register</button>
     </div>
    </main>
      <footer>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-github"></i>
      </footer>
    </>
  );
}

export default App;
