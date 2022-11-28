import Link  from "next/link";
import styles from '../styles/Home.module.css'
export default function Header() 
{
return (
    <div>
        
        <div >
         <h1 >Cliquez sur le bouton connexion afin de vous connecter en tant que Administrateur</h1>
         <Link href="/connexion">
          <button class="btn btn-primary">Connexion</button>
        </Link>
    </div>
        
    </div>
);
}