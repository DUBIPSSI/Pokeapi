import { Outlet, Link } from "react-router-dom";
import pokemon from './assets/pokemon.png'

function Layout(){
  return (
    <>
      <nav>
        <Link to="/"><img src={pokemon} height={50} /></Link>
        <Link to="/Favoris">Favoris</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;