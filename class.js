class Foo {
	color='negro';
	peso= 34;

  		ver() {
    		console.info(`Color: ${this.color}. Peso: ${this.peso}`);
			}
}    

class Bar {
	imprimir=true;

  		miMetodo() {
  			if(this.imprimir) {
  				console.info('Imprimir!');
  	}
  }
}



// Agregar property "imprimir=true" para que "miMetodo()" se ejecute.