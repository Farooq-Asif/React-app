import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navebar from './Navebar/Navebar';
import { BrowserRouter ,createBrowserRouter} from 'react-router-dom';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
const routercon = ReactDOM.createRoot(document.getElementById('nav-con'));
routercon.render(
    <>
    <h1>git add .
git commit -m "my changes" 
git remote add origin https://github.com/zinmyoswe/React-and-Django-Ecommerce.git
git push -u origin master</h1>
 <Navebar />
    </>

  
  
            
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();