
import { HttpClient } from "../../infra/HttpClient/HttpClient";

export const authService = {
  async login({ username, password }) {
    try {
      const response = await HttpClient({
        fetchUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
        fetchOptions: {
          method: "POST",
          body: { username, password },
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro no Service login:", error);
      throw error;
    }
  },
};
