import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useFormulario from './hooks/useFormulario';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChanges, reset] = useFormulario({
    name: '',
    lastname: '',
    email: ''
  });

  const submit = (event) => {
    event.preventDefault();
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input label="Nombre" name="name" value={formulario.name} onChange={handleChanges} />
              <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChanges} />
              <Input label="Correo Electronico" name="email" value={formulario.email} onChange={handleChanges} />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuario => <li key={usuario.email}>{`${usuario.name} ${usuario.lastname} : ${usuario.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
