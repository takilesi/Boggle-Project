// will need to add event listener so I know which tile has been clicked

const grid = [
    { 
        adjacentCells: [],
        // dummy values, don't want to deal with grid[0]
        id: 'l0',
        dead: false,
    },
    // first row 
    { 
        adjacentCells: ['l2', 'l5', 'l6'],
        // cell: l1, //DOM element
        id: 'l1',
        dead: false,
    },
    {
        adjacentCells: ['l1', 'l3', 'l5', 'l6', 'l7'],
        // cell: l2,
        id: 'l2',
        dead: false,
    },
    { 
        adjacentCells: ['l2', 'l4', 'l6', 'l7', 'l8'],
        // cell: l3, //DOM element
        id: 'l3',
        dead: false,
    },
    {
        adjacentCells: ['l3', 'l7', 'l8'],
        // cell: l4,
        id: 'l4',
        dead: false,
    },
    // second row 
    { 
        adjacentCells: ['l1', 'l2', 'l6', 'l9', 'l10'],
        // cell: l5, //DOM element
        id: 'l5',
        dead: false,
    },
    {
        adjacentCells: ['l1', 'l2', 'l3', 'l5', 'l7', 'l9', 'l10', 'l11'],
        // cell: l6,
        id: 'l6',
        dead: false,
    },
    { 
        adjacentCells: ['l2', 'l3', 'l4', 'l6', 'l8', 'l10', 'l11', 'l12'],
        // cell: l7, //DOM element
        id: 'l7',
        dead: false,
    },
    {
        adjacentCells: ['l3', 'l4', 'l7', 'l11', 'l12'],
        // cell: l8,
        id: 'l8',
        dead: false,
    },
    // third row 
    { 
        adjacentCells: ['l5', 'l6', 'l10', 'l13', 'l14'],
        // cell: l9, //DOM element
        id: 'l9',
        dead: false,
    },
    {
        adjacentCells: ['l5', 'l6', 'l7', 'l9', 'l11', 'l13', 'l14', 'l15'],
        // cell: l10,
        id: 'l10',
        dead: false,
    },
    { 
        adjacentCells: ['l6', 'l7', 'l8', 'l10', 'l12', 'l14', 'l15', 'l16'],
        // cell: l11, //DOM element
        id: 'l11',
        dead: false,
    },
    {
        adjacentCells: ['l7', 'l8', 'l11', 'l15', 'l16'],
        // cell: l12,
        id: 'l12',
        dead: false,
    },
    // fourth row 
    { 
        adjacentCells: ['l9', 'l10', 'l14'],
        // cell: l13, //DOM element
        id: 'l13',
        dead: false,
    },
    {
        adjacentCells: ['l9', 'l10', 'l11', 'l13', 'l15'],
        // cell: l14,
        id: 'l14',
        dead: false,
    },
    { 
        adjacentCells: ['l10', 'l11', 'l12', 'l14', 'l16'],
        // cell: l5, //DOM element
        id: 'l15',
        dead: false,
    },
    {
        adjacentCells: ['l11', 'l12', 'l15'],
        // cell: l16,
        id: 'l16',
        dead: false,
    },
  ]

// event listener sets cellClickedOn
let cellClickedOn = "l1";  

let alreadyUsedCells = []; 
// call this function each time a tile is clicked to 
// update which tiles can be used to make given word
//
const setGrid = () => {
    // set clicked tile to dead
    for (let i=1; i<=16; i++){
        if (grid[i].id == cellClickedOn){
            grid[i].dead = true; 
            alreadyUsedCells.push(cellClickedOn);
            console.log(grid[i].dead); 
        }
    }
    console.log(alreadyUsedCells);

}

setGrid(); 
 
