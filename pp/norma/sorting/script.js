let arrayDiPartenzaTarget = document.querySelector("#arrayDiPartenzaTarget");
let arrayShufflatoTarget = document.querySelector("#arrayShufflatoTarget");
let executionTimeTargetShuffle = document.querySelector("#executionTimeTargetShuffle");
let executionTimeTargetMerge = document.querySelector("#executionTimeTargetMerge");
let btnReshuffle = document.querySelector("#btnReshuffle");
let mergeSortTarget = document.querySelector("#mergeSortTarget");
let quickSortTarget = document.querySelector("#quickSortTarget");
let heapSortTarget = document.querySelector("#heapSortTarget");

let listaNumeri = [];
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

btnReshuffle.addEventListener("click", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    mergeSortStampa(numeriShuffled);
});

document.addEventListener("DOMContentLoaded", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    mergeSortStampa(numeriShuffled);
});