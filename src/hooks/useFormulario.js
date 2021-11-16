import { useState } from "react";

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial);
  const handleChanges = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    })
  }

  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, handleChanges, reset];
}

export default useFormulario;
