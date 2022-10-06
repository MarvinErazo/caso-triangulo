const ladoValido = (lado) => {
  return (lado > 0 && isFinite(lado) && typeof lado == "number")
};

const calcularArea = (a,b,c) =>{
  let s = (a+b+c)/2;

  let area = (a * b * Math.sin(c))/2 
    return Math.abs(area.toPrecision(3))
}

const tipoTriangulo = (lado1,lado2,lado3) => {

  if(ladoValido(lado1) && ladoValido(lado2) && ladoValido(lado3)){
    let tipo = "Tipo: "
    //Calcular tipo de triangulo
    if(lado1 == lado2 && lado2 == lado3)
      tipo += "Equilatero";

    if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3)
      tipo += "Escaleno";

    if ((lado1 == lado2 && lado1 != lado3) || (lado2 == lado3 && lado1 != lado2) || (lado1 == lado3 && lado1 != lado2))
      tipo += "Isosceles";

    tipo += " Area: " + calcularArea(lado1,lado2,lado3) 
    return tipo
  }
    
  return "Error: Un dato no es valido"
};
