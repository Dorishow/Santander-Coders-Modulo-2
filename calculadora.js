let calculo = {n1: 0, operador: '', n2: 0}
    let contador = 0
    let lista = []

    function enter(data){
        if(typeof data == 'number'){
            if(contador === 0){
                calculo = {...calculo, n1: data}
                contador = contador + 1
            }
            else if(contador === 2){
                calculo = {...calculo, n2: data}
            }
            else{contador = 0}
        }
        else if(typeof data == 'string'){
            if(contador === 1){
                calculo = {...calculo, operador: data}
                contador = contador + 1
            }
        }
        else{console.log('caractere inválido')}
    }
    
    function equals(){
        if(contador === 2){
            lista = [...lista, {'n1': calculo.n1, 'operacao': calculo.operador, 'n2': calculo.n2}]
            contador = 0
            return calculate(calculo)
            
            contador = 0
        }
    }
    
    function calculate({n1, operador, n2}){
        if(operador === '+') return n1 + n2
        if(operador === '-') return n1 - n2
        if(operador === '*') return n1 * n2
        if(operador === '/') return n1 / n2
    }