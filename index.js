import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import { EcommerceService } from './components/Ecommerce/Ecommerce';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import axios from 'axios';
// import { StyleBinding } from './components/style-binding/Sbinding';
// import { ProductInfo } from './components/data-binding/databinding';
// import { UseState } from './components/UseState/UseState';
// import { ClassBinding } from './components/class-binding/class-binding';
// import { ResultApplication } from './components/ResultWebPage/ResultApp';
// import { MouseDemo } from './components/mouse-demo/mouse-demo';
// import { KeyDemo } from './components/key-demo/key-demo';
// import { Clipboard } from './components/clipboard-events/clipboard-event';
// import { TimeInterval } from './components/time-intervals/time-intervals';
// import { LoginComponent } from './customised-components/login/Login-Component';
// import { HomeComponent } from './customised-components/HomeComponent';
// import { LoginClassComponent } from './ClassComponents/LoginClass';
// import { PureDemo } from './ClassComponents/PureDemo';
// import { HomeLoginComponent } from './ClassComponents/ClassProps';
// import { ConditionalRendering, CondtionRendering } from './ClassComponents/ConditionalRender';
// import { FormReact } from './components/Forms/FormReact';
// import { FormikDemo } from './components/Formik/FormikDemo';
// import { YupDemo } from './components/YupDemo/YupDemo';
// import { RouterDemo } from './components/RouterDemo/RouterDemo';
// import { UserRegistration } from './CNMP/UserManagment/UserRegistration/UserRegistration';
// import { RouterDemo } from './components/RouterDemo/RouterDemo';
// import { ShoppingHome } from './components/shopping-router/Shopping-home';
// import { ShoppingProducts } from './components/shopping-router/Shooping-products';
// import { AppCnmp } from './CNMP/App/App';
// import { MuiDemo } from './components/MUI-Demo/MUI';
// import { ReducerComponent } from './components/Reducer/ReducerComponent/ReducerCompo';
// import { ContextAPI, ContextDemo } from './components/ContextDemo/ContextDemo';
// import { ContextApp } from './components/ContextDemo/ContextApp';
// import { ContextHeader } from './components/ContextExmple1/ContextHeader';
// import {ComponentRevision} from './ReactRevsion/SampleReact';
// import { RouterApp } from './ReactRevsion/ReactRouterRev';
import { RecipHomePage } from './RecipeFrontend/RecipeCodeFrontend/RecipeHomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecipHomePage  />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
