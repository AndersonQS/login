import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

// import { Container } from './styles';

export const Private = () => {
  const auth = useContext(AuthContext);
  return (
    <div>Pagina Privada
      <h2>Olá {auth.user?.name}, tudo bem ?</h2>
    </div>
  );
}
