import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

global.fetch = jest.fn();

describe("LoginForm (Completo)", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test("valida: username requerido", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.click(screen.getByRole("button", { name: /entrar/i }));
    expect(screen.getByRole("alert")).toHaveTextContent("username requerido");
  });

  test("valida: password mínimo 4", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByLabelText(/username/i), "ana");
    await user.type(screen.getByLabelText(/password/i), "12"); // Corto
    await user.click(screen.getByRole("button", { name: /entrar/i }));
    expect(screen.getByRole("alert")).toHaveTextContent("password mínimo 4");
  });

  test("submit éxito: muestra loading, llama onSuccess y limpia datos", async () => {
    const user = userEvent.setup();
    const onSuccess = jest.fn();

    (fetch as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: async () => ({ token: "123" }),
          });
        }, 100); // 100ms de espera
      })
    );

    render(<LoginForm onSuccess={onSuccess} />);

    await user.type(screen.getByLabelText(/username/i), "  ana  ");
    await user.type(screen.getByLabelText(/password/i), "1234");

    const submitBtn = screen.getByRole("button", { name: /entrar/i });
    await user.click(submitBtn);

    expect(await screen.findByRole("status")).toHaveTextContent("Enviando...");
    expect(submitBtn).toBeDisabled();

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });

    const args = (fetch as jest.Mock).mock.calls[0];
    expect(JSON.parse(args[1].body)).toEqual({ username: "ana", password: "1234" });

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});