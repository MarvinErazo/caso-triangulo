const triangulo = require(".");

//PRUEBAS UNITARIAS SEGUN LOS REQUERMIENTO

/*REQ1: Validacion de  numeros menores o iguales a 0
    Ninguno de los tres lados del triangulo puede ser menor que cero

*/

test('[1,0,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,0,1)).toBe("Error: Un dato no es valido")
    }
)

test('[0,1,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,0,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,1,0] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,0,1)).toBe("Error: Un dato no es valido")
    }
)

test('[-1,1,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(-1,1,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,-5,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,-5,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,1,-1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,1,-1)).toBe("Error: Un dato no es valido")
    }
)

/*REQ2: Validacion de caracteres que no pertenezcan a los reales
    Ninguno de los tres lados del triangulo puede contener un caracter distinto de un numero real
*/

test('["a",1,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo("a",1,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,"var",1] => Error: Un dato no es valido',
    () => {
        expect(triangulo("a","var",1)).toBe("Error: Un dato no es valido")
    }
)

test('["a",1,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo("a",1,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,NaN,1] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,NaN,1)).toBe("Error: Un dato no es valido")
    }
)

test('[1,1,""] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,1,"")).toBe("Error: Un dato no es valido")
    }
)

test('[1,1,null] => Error: Un dato no es valido',
    () => {
        expect(triangulo(1,1,null)).toBe("Error: Un dato no es valido")
    }
)

/*REQ3: Area del triangulo
    Calcula el area del triangulo segun sus lados
*/

test('[1,1,1] => Tipo: Equilatero Area: 0.421',
    () => {
        expect(triangulo(1,1,1)).toBe("Tipo: Equilatero Area: 0.421")
    }
)

/*REQ4: Tipo de triangulo 
    El sistema muestra si el triangulo es equilatero, isosceles o escaleno
*/

test('[2,2,2] => Tipo: Equilatero Area: 1.82',
    () => {
        expect(triangulo(2,2,2)).toBe("Tipo: Equilatero Area: 1.82")
    }
)

test('[5,4,3] => Tipo: Escaleno Area: 1.41',
    () => {
        expect(triangulo(5,4,3)).toBe("Tipo: Escaleno Area: 1.41")
    }
)

test('[10,4,4] => Tipo: Isosceles Area: 15.1',
    () => {
        expect(triangulo(10,4,4)).toBe("Tipo: Isosceles Area: 15.1")
    }
)

/*REQ5: Mensaje de error
    En caso de que un dato no se haya validado mostrara un mensaje de error
*/
