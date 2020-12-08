const IMAGEPATHS = [
    "dojocat.jpg",
    "heisencat.png",
    "linkcat.png",
    "ironcat.png",
    "defunktocat.png",
    "coder2.jpg",
    "riddlocat.png",
    "chellocat.jpg",
    "stormtroopocat.png",
    "visionary.jpg",
    "cherry.jpg",
    "oktobercat.png",
    "mario.png",
    "cooler.png",
    "jean-luc-picat.jpg",
    "aidorucat.png",
    "domo-cat.png",
    "kantana.jpg",
    "daftpunk.gif",
    "codercat.jpg",
]

//draw image cells
function drawImageCells() {
    let cells = "";
    let counter = 0;
    //initialize target variable
    let target = 0
    //loop through every image path
    IMAGEPATHS.forEach((path, idx) => {
        //set target to 1 || 0 every new row
        if (counter % 5 === 0) {
            if (target === 0)
                target = 1;
            else
                target = 0;
        }
        //add conditional class every row
        cells += `<div class="cell${idx % 2 === target ? '' : ' blue-inset'}"><img src="images/${path}" alt="image"/></div>`;
        //increment counter every iteration
        counter++;
    });
    document.getElementById('image-cells').innerHTML = cells;
}
//invoke draw image cells
drawImageCells();