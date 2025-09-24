import { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.value;

    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await authService.login({
              username: values.usuario,
              password: values.senha,
            });
            router.push("/auth-page-ssr");
          } catch (error) {
            alert("Usuário ou senha incorretos:", error);
          }
        }}
      >
        <input
          placeholder="Usuário"
          name="usuario"
          defaultValue="omariosouto"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          defaultValue="safepassword"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
