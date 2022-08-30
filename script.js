console.log('js ok');

// Creo un array con lista della spesa
let list = ['pane', 'pomodori','carne','latte','uova'];
let i =  0;
let spesa = document.getElementById('container');

//Creo ciclo while per stampare la lista in console
while (i < list.length){
    console.log(list[i]);
    i++;
    spesa.innerHTML = list;
}



