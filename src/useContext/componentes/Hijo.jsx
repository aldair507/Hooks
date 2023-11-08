
import { useUserContext, useUserToggleContext } from "../UserProvite"; // Asegúrate de que la ruta sea correcta y el nombre del archivo coincide
const Hijo = () => {
  const user = useUserContext();
  const cambiaLogin = useUserToggleContext(); 

  return (
    <div>
      <h2>Componente hijo</h2>
      {user && <p>Hola {user.name}</p>}
      <button onClick={cambiaLogin}>Cambiar</button>
    </div>
  );
}

export default Hijo;
