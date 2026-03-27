import React from "react";
import { render, screen } from "@testing-library/react";
import AutoLogout from "../components/AutoLogout";

describe("AutoLogout (fake timers)", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("cierra sesión después de 3 segundos", () => {
    render(<AutoLogout/>);

    expect(screen.getByText("Sesión activa")).toBeInTheDocument();

    jest.advanceTimersByTime(3000);

    expect(screen.getByText("Sesión cerrada")).toBeInTheDocument();
  });
});