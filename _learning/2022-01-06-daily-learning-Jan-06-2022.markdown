---
title: Daily Learning Jan 05, 2022
layout: post
topic:
  React
tags:
category:
  - react
---

## 46 React Router v6 Private Route Tutorial

#### Auth hook file - src/hooks/useAuth.js
~~~js
export default function useAuth() {
  const auth = false;
  return auth;
}
~~~

#### Route file - src/App.js

~~~js
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
~~~

#### Private Outlet component file - src/components/PrivateOutlet.js

~~~js
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateOutlet() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
~~~

