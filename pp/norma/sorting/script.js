let arrayDiPartenzaTarget = document.querySelector("#arrayDiPartenzaTarget");
let arrayShufflatoTarget = document.querySelector("#arrayShufflatoTarget");
let btnReshuffle = document.querySelector("#btnReshuffle");
let mergeSortTarget = document.querySelector("#mergeSortTarget");
let quickSortTarget = document.querySelector("#quickSortTarget");
let heapSortTarget = document.querySelector("#heapSortTarget");
let executionTimeShuffleTarget = document.querySelector("#executionTimeShuffleTarget");
let executionTimeMergeTarget = document.querySelector("#executionTimeMergeTarget");
let executionTimeQuickTarget = document.querySelector("#executionTimeQuickTarget");
let executionTimeHeapTarget = document.querySelector("#executionTimeHeapTarget");
let interazioniMerge = document.querySelector("#interazioniMerge");
let interazioniQuick = document.querySelector("#interazioniQuick");
let interazioniHeap = document.querySelector("#interazioniHeap");
let btnConfronta = document.querySelector("#btnConfronta");
let confrontaTimeMergeLi = document.querySelector("#confrontaTimeMergeLi");
let confrontaCounterMergeLi = document.querySelector("#confrontaCounterMergeLi");
let confrontaTimeQuickLi = document.querySelector("#confrontaTimeQuickLi");
let confrontaCounterQuickLi = document.querySelector("#confrontaCounterQuickLi");
let confrontaTimeHeapLi = document.querySelector("#confrontaTimeHeapLi");
let confrontaCounterHeapLi = document.querySelector("#confrontaCounterHeapLi");
let confrontaTimeMergeMediaTarget = document.querySelector("#confrontaTimeMergeMediaTarget");
let confrontaCounterMergeMediaTarget = document.querySelector("#confrontaCounterMergeMediaTarget");
let confrontaTimeQuickMediaTarget = document.querySelector("#confrontaTimeQuickMediaTarget");
let confrontaCounterQuickMediaTarget = document.querySelector("#confrontaCounterQuickMediaTarget");
let confrontaTimeHeapMediaTarget = document.querySelector("#confrontaTimeHeapMediaTarget");
let confrontaCounterHeapMediaTarget = document.querySelector("#confrontaCounterHeapMediaTarget");

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
        [numeriShuffled[i], numeriShuffled[j]] = [numeriShuffled[j], numeriShuffled[i]];
    }
    arrayShufflatoTarget.innerHTML = numeriShuffled.join(" ");    
    let endTime = performance.now();
    executionTimeShuffleTarget.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`; 
    return numeriShuffled;
}

let counterMerge = 0;
let counterQuick = 0;
let counterHeap = 0;

// merge sort

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
    executionTimeMergeTarget.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`; 
}

// quick sort

function quickSort(array){
    if(array.length <= 1){
        return array;
    }

    const pivotIndex = Math.floor(array.length/2);
    const pivot = array[pivotIndex];
    const arraySenzaPivot = [...array.slice(0, pivotIndex), ...array.slice(pivotIndex + 1)];

    const {minori, maggiori} = arraySenzaPivot.reduce((temp, numero) =>{
        counterQuick++;
        if(numero < pivot) {
            temp.minori.push(numero);
        }else{
            temp.maggiori.push(numero);
        }
        return temp;
    }, {minori: [], maggiori: []});

    return [...quickSort(minori), pivot, ...quickSort(maggiori)];
}

function quickSortStampa(numeriShuffled){
    let startTime = performance.now();
    let arrayQuickSort = quickSort([...numeriShuffled]);
    quickSortTarget.innerHTML = arrayQuickSort.join(" ");
    let endTime = performance.now();
    executionTimeQuickTarget.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`;
}

// heap sort

function heapSwap(array, i, j){
    [array[i], array[j]] = [array[j], array[i]];
}

function heapify(array, n, i){
    let grande = i;
    let figlioSinistra = (2 * i) + 1;
    let figlioDestra = (2 * i) + 2;

    if(figlioSinistra < n && array[figlioSinistra] > array[grande]){
        counterHeap++;
        grande = figlioSinistra;
    }

    if(figlioDestra < n &&  array[figlioDestra] > array[grande]){
        counterHeap++;
        grande = figlioDestra;
    }

    if(grande != i){
        heapSwap(array, i, grande);
        heapify(array, n, grande);
    }
}

function heapSort(array){
    let n = array.length;
    let i = Math.floor(n/2) - 1;

    while(i >= 0){
        heapify(array, n, i);
        i--;
    }

    let j = n - 1;

    while(j > 0){
        heapSwap(array, 0, j);
        heapify(array, j, 0);
        j--;
    }

    return array;
}

function heapSortStampa(numeriShuffled){
    let startTime = performance.now();
    let arrayHeapSort = heapSort([...numeriShuffled]);
    heapSortTarget.innerHTML = arrayHeapSort.join(" ");
    let endTime = performance.now();
    executionTimeHeapTarget.innerHTML = `Tempo d'esecuzione: ${endTime-startTime} ms`;
}

// eventi

btnReshuffle.addEventListener("click", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    counterMerge = 0;
    counterQuick = 0;
    counterHeap = 0;
    mergeSortStampa(numeriShuffled);
    quickSortStampa(numeriShuffled);
    heapSortStampa(numeriShuffled);
    interazioniMerge.innerHTML = "Numero di comparazioni: " + counterMerge;
    interazioniQuick.innerHTML = "Numero di comparazioni: " + counterQuick;
    interazioniHeap.innerHTML = "Numero di comparazioni: " + counterHeap;
});

document.addEventListener("DOMContentLoaded", ()=>{
    let numeriShuffled = fisherYates(listaNumeri);
    mergeSortStampa(numeriShuffled);
    quickSortStampa(numeriShuffled);    
    heapSortStampa(numeriShuffled);
    interazioniMerge.innerHTML = "Numero di comparazioni: " + counterMerge;
    interazioniQuick.innerHTML = "Numero di comparazioni: " + counterQuick;
    interazioniHeap.innerHTML = "Numero di comparazioni: " + counterHeap;
});

btnConfronta.addEventListener("click", ()=>{

    // modificare il numero di confronti
    let numeroConfronti = 10;

    confrontaTimeMergeLi.innerHTML = "";
    confrontaCounterMergeLi.innerHTML = "";
    confrontaTimeQuickLi.innerHTML = "";
    confrontaCounterQuickLi.innerHTML = "";
    confrontaTimeHeapLi.innerHTML = "";
    confrontaCounterHeapLi.innerHTML = "";
    confrontaTimeMergeMediaTarget.innerHTML = "";
    confrontaCounterMergeMediaTarget.innerHTML = "";
    confrontaTimeQuickMediaTarget.innerHTML = "";
    confrontaCounterQuickMediaTarget.innerHTML = "";
    confrontaTimeHeapMediaTarget.innerHTML = "";
    confrontaCounterHeapMediaTarget.innerHTML = "";

    let confrontaTimeMergeMedia = 0;
    let confrontaCounterMergeMedia = 0;
    let confrontaTimeQuickMedia = 0;
    let confrontaCounterQuickMedia = 0;
    let confrontaTimeHeapMedia = 0;
    let confrontaCounterHeapMedia = 0;

    for(let i = 0; i < numeroConfronti; i++){

        let liTimeMerge = document.createElement("li");
        let liCounterMerge = document.createElement("li");
        let liTimeQuick = document.createElement("li");
        let liCounterQuick = document.createElement("li");
        let liTimeHeap = document.createElement("li");
        let liCounterHeap = document.createElement("li");
        let numeriShuffled = fisherYates(listaNumeri);

        counterMerge = 0;
        counterQuick = 0;
        counterHeap = 0;

        let startTime = performance.now();
        let arrayMergeSort = mergeSort([...numeriShuffled]);
        let endTime = performance.now();
        let time = endTime-startTime;
        liTimeMerge.textContent = time.toFixed(2) + "ms";
        confrontaTimeMergeMedia += time;
        confrontaCounterMergeMedia += counterMerge;
        confrontaTimeMergeLi.appendChild(liTimeMerge);
        liCounterMerge.textContent = counterMerge;
        confrontaCounterMergeLi.appendChild(liCounterMerge);

        startTime = performance.now();
        let arrayQuickSort = quickSort([...numeriShuffled]);
        endTime = performance.now();
        time = endTime-startTime;
        liTimeQuick.textContent = time.toFixed(2) + "ms";
        confrontaTimeQuickMedia += time;
        confrontaCounterQuickMedia += counterQuick;
        confrontaTimeQuickLi.appendChild(liTimeQuick);
        liCounterQuick.textContent = counterQuick;
        confrontaCounterQuickLi.appendChild(liCounterQuick);

        startTime = performance.now();
        let arrayHeapSort = heapSort([...numeriShuffled]);
        endTime = performance.now();
        time = endTime-startTime;
        liTimeHeap.textContent = time.toFixed(2) + "ms";
        confrontaTimeHeapMedia += time;
        confrontaCounterHeapMedia += counterHeap;
        confrontaTimeHeapLi.appendChild(liTimeHeap);
        liCounterHeap.textContent = counterHeap;
        confrontaCounterHeapLi.appendChild(liCounterHeap);
        
    }

    confrontaTimeMergeMedia = confrontaTimeMergeMedia/numeroConfronti;
    confrontaCounterMergeMedia = confrontaCounterMergeMedia/numeroConfronti;
    confrontaTimeQuickMedia = confrontaTimeQuickMedia/numeroConfronti;
    confrontaCounterQuickMedia = confrontaCounterQuickMedia/numeroConfronti;
    confrontaTimeHeapMedia = confrontaTimeHeapMedia/numeroConfronti;
    confrontaCounterHeapMedia = confrontaCounterHeapMedia/numeroConfronti;

    confrontaTimeMergeMediaTarget.innerHTML = "Time: " + confrontaTimeMergeMedia.toFixed(2) + "ms";
    confrontaCounterMergeMediaTarget.innerHTML = "Comparazioni: " + confrontaCounterMergeMedia;
    confrontaTimeQuickMediaTarget.innerHTML = "Time: " + confrontaTimeQuickMedia.toFixed(2) + "ms";
    confrontaCounterQuickMediaTarget.innerHTML = "Comparazioni: " + confrontaCounterQuickMedia;    
    confrontaTimeHeapMediaTarget.innerHTML = "Time: " + confrontaTimeHeapMedia.toFixed(2) + "ms";
    confrontaCounterHeapMediaTarget.innerHTML = "Comparazioni: " + confrontaCounterHeapMedia;    
    
})