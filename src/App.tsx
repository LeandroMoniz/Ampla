import { BrowserRouter } from 'react-router-dom';

import  Router  from "./routes/Routes";
import GlobalStyle from './Style/GlobalStyle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <GlobalStyle/>
      </BrowserRouter>
    </div>
  );
}

export default App;
