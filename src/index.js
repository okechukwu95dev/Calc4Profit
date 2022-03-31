import * as ReactDOMClient from 'react-dom/client';
import HomePage from './Pages/homePage'
import Login from './Components/userLogin'
import SignUp from './Components/userSignUp';
function App({ callback }) {
  
  return (
    <div ref={callback}>  
      <HomePage/>
      <Login/>
      <SignUp/>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);