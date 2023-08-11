import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BadgePage from './components/badgePage/BadgePage';
import CreateBadgePage from './components/createbadgePage/CreateBadgePage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/badge', //?birthdate=:birthdate&textcolor=:textcolor&fontsize=:fontsize&fontfamily=:fontfamily',
    element: <BadgePage></BadgePage>,
  },
  {
    path: '/',
    element: <CreateBadgePage></CreateBadgePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
