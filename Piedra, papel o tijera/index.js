function inicioDelJuego() {
    /* primer paso: crear las opciones del juego */ 
    const options_of_game = ['Piedra', 'Papel', 'Tijera'];
    const option = Math.round(Math.random() * 2)
            

/*
    for(let i = 0; i <= options_of_game.legth -1; i++){
        const option = Math.round(Math.random() * 2)
        console.log()
    }
    }

      options_of_game.forEach((element, index)=>) {
        const option = Math.round(Math.random() * 2)
            console.log()
        } */
      
    
    
    const user_options = prompt('Escribe una opcion');
    const computer_options = options_of_game[option].toLowerCase();

    /* evaluar lo que se ejecuta una sola vez */

    if(user_options === computer_options) {
        console.log('Empate');
    } else if (user_options === 'piedra') {
        if(computer_options === 'tijera') {
            console.log('La piedra le gana a la tijera');
            console.log('User Gano');
        } else {
            console.log('El papel le gana a la piedra');
            console.log('Computer Gano');
        }
    }

      else if (user_options === 'tijera') {
        if(computer_options === 'papel') {
            console.log('La tijera le gana al papel');
            console.log('User Gano');
        } else {
            console.log('La piedra le gana a la tijera');
            console.log('Computer Gano');
        }
    }

      else if (user_options === 'papel') {
        if(computer_options === 'piedra') {
            console.log('El papel gana a la piedra');
            console.log('User Gano');
        } else {
            console.log('La tijera le gana al papel');
            console.log('Computer Gano');
        }
    } 
}