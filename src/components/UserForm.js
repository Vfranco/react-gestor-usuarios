import useFormulario from '../hooks/useFormulario';
import Button from "./Button";
import Input from "./Input";

const UserForm = ({ submit }) => {
  const [formulario, handleChanges, reset] = useFormulario({
    name: '',
    lastname: '',
    email: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(formulario);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nombre" name="name" value={formulario.name} onChange={handleChanges} />
      <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChanges} />
      <Input label="Correo Electronico" name="email" value={formulario.email} onChange={handleChanges} />
      <Button>Enviar</Button>
    </form>
  )
}

export default UserForm;
