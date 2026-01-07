describe("smoke", () => {
  test("jest está configurado", () => {
    expect(true).toBe(true);
  });
  test("jest está configurado", () => {
    const num1:number=5;
    const num2:number=3;
    const resultado:number= num1+num2;
    expect(resultado).toBe(8);
  });
  test("jest está configurado", () => {
    const bas1:number=5;
    const bas2:number=3;
    const h:number=3;
    const resultado:number= ((bas1+bas2)/2)*h;
    expect(resultado).toBe(12);
  });
});