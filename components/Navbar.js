import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useCookies } from "react-cookie";
import * as React from 'react';
//import { middleware } from "../middleware";
import { useRouter } from 'next/router';
import Headerdashboard from "./Headerdashboard";
export default function Navbar({children}){
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter()
    
    const logout = () =>
    {
        console.log("COOKIE DELETED");
        removeCookie("user", { path: '/' });
        window.location.replace('/');
    }

    return (
        
    <div>
 <Headerdashboard></Headerdashboard>
  
  <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span class="fs-5 d-none d-sm-inline">CSE Dashboard</span>
              </a>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li class="nav-item">
                      <a href="./dashboard/" class="nav-link align-middle px-0">
                          <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Accueil</span>
                      </a>
                  </li>
                  <li>
                      <a href="./consultcandidat" class="nav-link px-0 align-middle">
                          <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Consultations candidats</span></a>
                  </li>
                  <li>
                      <a href="./consultemployeur" class="nav-link px-0 align-middle ">
                          <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Consultations employeurs</span></a>
                  </li>
                  <li>
                      <a href="./consultadmin" class="nav-link px-0 align-middle ">
                          <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Consultations admin</span></a>
                  </li>
                  <li>
                      <a href="#"   onClick={logout} class="nav-link px-0 align-middle ">
                          <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Se deconnecter</span></a>
                  </li>
              </ul>
              <hr/>
          </div>
      </div>
      <div class="col py-3">
      
            {children }
            

        </div>
        </div>
        </div>
    )
}