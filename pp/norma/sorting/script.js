let arrayDiPartenzaTarget = document.querySelector("#arrayDiPartenzaTarget");
let arrayShufflatoTarget = document.querySelector("#arrayShufflatoTarget");
let btnReshuffle = document.querySelector("#btnReshuffle");
let mergeSortTarget = document.querySelector("#mergeSortTarget");
let quickSortTarget = document.querySelector("#quickSortTarget");
let heapSortTarget = document.querySelector("#heapSortTarget");
let executionTimeTargetMerge = document.querySelector("#executionTimeTargetMerge");
let executionTimeTargetShuffle = document.querySelector("#executionTimeTargetShuffle");
let interazioniMerge = document.querySelector("#interazioniMerge");
let interazioniQuick = document.querySelector("#interazioniQuick");

let listaNumeri = [];
// modificare il numero di elementi nell'array
for(let i = 1; i <= 100; i++){
    listaNumeri.push(i);
}

arrayDiPartenzaTarget.innerHTML = listaNumeri.join(" ");

function fisherYates(listaNumeri){
    let startTime = performance.now();
    let numeriShuffled = [...listaNumeri];
    let lunghezzaArray = numeriShuffled.length;
    for(let i = lunghezzaArray - 1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = numeriShuffled[i];
        numeriShuffled[i] = numeriShuffled[j];
        numeriShuffled[j] = temp;        
    }
    arrayShufflatoTarget.innerHTML = numeriShuffled.join(" ");    
    let endTime = performance.now();
    executionTimeTargetShuffle.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`; 
    return numeriShuffled;
}

let counterMerge = 0;
let counterQuick = 0;

function mergeSort(array){    
    if(array.length <= 1){
        return array;
    }
    const meta = Math.floor(array.length/2);
    
    const primaMeta = array.slice(0, meta);
    const secondaMeta = array.slice(meta);
    
    const primaMetaSorted = mergeSort(primaMeta);
    const secondaMetaSorted = mergeSort(secondaMeta);
    
    return merge(primaMetaSorted, secondaMetaSorted);
}


function merge(primaMeta, secondaMeta){
    let arraySortato = [];
    let primaMetaIndex = 0;
    let secondaMetaIndex = 0;
    
    while(primaMetaIndex < primaMeta.length && secondaMetaIndex < secondaMeta.length){
        counterMerge++;
        if(primaMeta[primaMetaIndex] < secondaMeta[secondaMetaIndex]){
            arraySortato.push(primaMeta[primaMetaIndex]);
            primaMetaIndex++;
        }else{
            arraySortato.push(secondaMeta[secondaMetaIndex]);
            secondaMetaIndex++;
        }
    }

    while(primaMetaIndex < primaMeta.length){
        arraySortato.push(primaMeta[primaMetaIndex]);
        primaMetaIndex++;
    }

    while(secondaMetaIndex < secondaMeta.length){
        arraySortato.push(secondaMeta[secondaMetaIndex]);
        secondaMetaIndex++;
    }
    
    return arraySortato;
}

function mergeSortStampa(numeriShuffled){
    let startTime = performance.now();
    let arrayMergeSort = mergeSort([...numeriShuffled]);
    mergeSortTarget.innerHTML = arrayMergeSort.join(" ");
    let endTime = performance.now();
    executionTimeTargetMerge.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`; 
}

function quickSort(array){
    if(array.length <= 1){
        return array;
    }

    const pivotIndex = Math.floor(array.length/2);
    const pivot = array.splice(pivotIndex, 1)[0];

    const minori = array.filter(numero => {
        counterQuick++;
        return numero < pivot;
    });
    const maggiori = array.filter(numero => {
        counterQuick++;
        return numero >= pivot;
    });

    return [...quickSort(minori), pivot, ...quickSort(maggiori)];
}

function quickSortStampa(numeriShuffled){
    let startTime = performance.now();
    let arrayQuickSort = quickSort([...numeriShuffled]);
    quickSortTarget.innerHTML = arrayQuickSort.join(" ");
    let endTime = performance.now();
    executionTimeTargetQuick.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`;
}

btnReshuffle.addEventListener("click", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    counterMerge = 0;
    counterQuick = 0;
    mergeSortStampa(numeriShuffled);
    quickSortStampa(numeriShuffled);
    interazioniMerge.innerHTML = "Numero di comparazioni: " + counterMerge;
    interazioniQuick.innerHTML = "Numero di comparazioni: " + counterQuick;
});

document.addEventListener("DOMContentLoaded", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    mergeSortStampa(numeriShuffled);
    quickSortStampa(numeriShuffled);    
    interazioniMerge.innerHTML = "Numero di comparazioni: " + counterMerge;
    interazioniQuick.innerHTML = "Numero di comparazioni: " + counterQuick;
});