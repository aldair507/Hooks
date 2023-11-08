
import Hijo from "./componentes/Hijo";
import {UserProvider} from "./UserProvite"; 

export function App2() {
  return (
    <UserProvider>
      <div>
       
        <Hijo />
      </div>
    </UserProvider>
  );
}


