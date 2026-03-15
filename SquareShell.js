const BOUNDARY = 3; // Half the size of our pattern

for(let i = -1*BOUNDARY; i <= BOUNDARY; i++){
    let currentRow = "";
    for(let j = -1*BOUNDARY; j <= BOUNDARY; j++){
        currentRow += (Math.max(Math.abs(i), Math.abs(j)) + 1) + " ");
    }
    console.log(currentRow);
}
