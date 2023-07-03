// will need to add event listener so I know which tile has been clicked

const grid = [
    // first row 
    { 
        adjacentCells: ['l2', 'l5', 'l6'],
        // cell: l1, //DOM element
        id: 'l1',
        active: false,
    },
    {
        adjacentCells: ['l1', 'l3', 'l5', 'l6', 'l7'],
        // cell: l2,
        id: 'l2',
        active: false,
    },
    { 
        adjacentCells: ['l2', 'l4', 'l6', 'l7', 'l8'],
        // cell: l3, //DOM element
        id: 'l3',
        active: false,
    },
    {
        adjacentCells: ['l3', 'l7', 'l8'],
        // cell: l4,
        id: 'l4',
        active: false,
    },
    // second row 
    { 
        adjacentCells: ['l1', 'l2', 'l6', 'l9', 'l10'],
        // cell: l5, //DOM element
        id: 'l5',
        active: false,
    },
    {
        adjacentCells: ['l1', 'l2', 'l3', 'l5', 'l7', 'l9', 'l10', 'l11'],
        // cell: l6,
        id: 'l6',
        active: false,
    },
    { 
        adjacentCells: ['l2', 'l3', 'l4', 'l6', 'l8', 'l10', 'l11', 'l12'],
        // cell: l7, //DOM element
        id: 'l7',
        active: false,
    },
    {
        adjacentCells: ['l3', 'l4', 'l7', 'l11', 'l12'],
        // cell: l8,
        id: 'l8',
        active: false,
    },
    // third row 
    { 
        adjacentCells: ['l5', 'l6', 'l10', 'l13', 'l14'],
        // cell: l9, //DOM element
        id: 'l9',
        active: false,
    },
    {
        adjacentCells: ['l5', 'l6', 'l7', 'l9', 'l11', 'l13', 'l14', 'l15'],
        // cell: l10,
        id: 'l10',
        active: false,
    },
    { 
        adjacentCells: ['l6', 'l7', 'l8', 'l10', 'l12', 'l14', 'l15', 'l16'],
        // cell: l11, //DOM element
        id: 'l11',
        active: false,
    },
    {
        adjacentCells: ['l7', 'l8', 'l11', 'l15', 'l16'],
        // cell: l12,
        id: 'l12',
        active: false,
    },
    // fourth row 
    { 
        adjacentCells: ['l9', 'l10', 'l14'],
        // cell: l13, //DOM element
        id: 'l13',
        active: false,
    },
    {
        adjacentCells: ['l9', 'l10', 'l11', 'l13', 'l15'],
        // cell: l14,
        id: 'l14',
        active: false,
    },
    { 
        adjacentCells: ['l10', 'l11', 'l12', 'l14', 'l16'],
        // cell: l5, //DOM element
        id: 'l15',
        active: false,
    },
    {
        adjacentCells: ['l11', 'l12', 'l15'],
        // cell: l16,
        id: 'l16',
        active: false,
    },
]


let cellClickedOn = "l1";  

let alreadyUsedCells = []; 

alreadyUsedCells.push(cellClickedOn); 




    // now I disable the html elements that are not adjacent to the clicked cell


let i = 0; 

// if ( grid[i].id == cellClickedOn ){
//     console.log(grid[i].id); 
// } else {
//     console.log("we got nothing"); 
// }

const setGrid = () => {
    // loop through all 
    for (let i=0; i<grid.length; i++){
        // console.log(grid[i].id); 
        if (  grid[i].id == cellClickedOn ){
            console.log("here is the tile cell we are in: " + grid[i].id);
            for (let j=0; j<grid[i].adjacentCells.length; j++) {
                console.log("the cells to set to active: " + grid[i].adjacentCells[j]); 
                let test = grid[i].adjacentCells[j];
                let removeL = test.replace('l',''); // now have number of cell
                let removeLm1 = removeL - 1; // now have the array index for cell (removeL minus 1)
                grid[removeLm1].active = true;    
            }
        }
    }
}

setGrid();


for (let ii=0; ii<grid.length; ii++) {
    console.log(grid[ii].id + " is active " + grid[ii].active); 
}
