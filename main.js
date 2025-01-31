

// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25]
// Output: [25, 12, 8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.



arr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];




function ordinaDescr (lista_numeri) {
    
    lista_ordinata = lista_numeri.sort( (a,b)=>b-a )
    return lista_ordinata
    
}



function ordinaCresc (lista_numeri) {
    
    lista_ordinata = lista_numeri.sort ((a,b)=>a-b)
    return lista_ordinata
}


console.log(   ordinaDescr ( arr )  );


console.log(   ordinaCresc ( arr )  );
