let calculatePrice = (producto, precio) => {

  let envio = 0;

  if (precio <= 2000) {
    envio = 300;
  }

  if (precio > 2000) {
    if (precio > 4000) {
      envio = 700;
    } else {
      envio = 500;
    }
  }
  
  let precioFinal = precio + envio;

  console.log(`El producto ${producto} cuesta $${precio}. Su costo de envío es de $${envio}. Por lo tanto, el precio final es de ${precioFinal}`);

};

calculatePrice("monitor", 4150);
