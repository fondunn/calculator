const length = document.getElementById('selectLength');
const width = document.getElementById('selectWidth');
const result = document.getElementById('result');
const bnt = document.getElementById('btn');
const modal = document.getElementsByClassName('modal');
const form = document.getElementById('calculator');
const popup = document.getElementById('popup');
const closePopud = document.getElementById('close-popup');

const text = ['Result: ', ' pcs']


form.addEventListener('submit', calculate);

function calculate(event) {
    
    const selectedLength = length[length.selectedIndex].value;
    const selectedWidth = width[width.selectedIndex].value;
    
    let parsedLength = parseInt(selectedLength);
    let parsedWidth = parseInt(selectedWidth);

    let piecesCount = (parsedLength * parsedWidth) / 4;

    event.preventDefault();

    const nPacks = 6;
    const mPacks = 8;

    let total8PacksCount = Math.ceil(piecesCount / mPacks);

    
    let total8PacksOstatok = (total8PacksCount * mPacks) - piecesCount;
    
    let i = 0;

    if ( piecesCount <= 6 ) {
        result.textContent = text[0] + piecesCount + ' Need 1 pack of ' + nPacks + text[1];
    } else if ( piecesCount == 9 ) {
        result.textContent = text[0] + piecesCount + ' Need 2 pack of ' + nPacks + text[1];
    } else {
        while ( total8PacksOstatok > 1 ) {
            ++i;

            total8PacksCount--;

            total8PacksOstatok = (total8PacksCount * mPacks) + (nPacks * i) - piecesCount;
        }

        if ( total8PacksCount == 0 ) {
            result.textContent = text[0] + piecesCount + ' pcs need ' + i + 'packs with ' + nPacks + text[1];
        } else if (i == 0) {
            result.textContent = text[0] + piecesCount + ' pcs need ' + total8PacksCount + ' packs with ' + mPacks + text[1];
        } else {
            result.textContent = text[0] + piecesCount + ' pcs need ' + total8PacksCount + ' packs with ' + mPacks + ' pcs, and ' + i + ' packs with ' + nPacks + text[1];
        }
    }    
}

bnt.onclick = function() {
    popup.classList.remove('hidden');
}

closePopud.onclick = function(event) {
    popup.classList.add('hidden');
    event.preventDefault();
}