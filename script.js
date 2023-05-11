const gameBoard = (() => {
    
    const boxes = document.getElementsByClassName('boxes');
    

    const clickHandler = (() => {
        for (box of boxes) {
            box.addEventListener('click', (box) => {
                const mark = document.createElement('img');
                const oTurn = 'Asset/SVG/circle.svg';
                
                // if (playerTurn == false) {
                    const firstTurn = 'Asset/SVG/cross.svg';
                    mark.setAttribute('src', firstTurn);
                    const currentValue = mark.getAttribute('src');
                    console.log(currentValue);
                    console.log(mark)
                // }

                // if (playerTurn == true || mark.setAttribute('src', 'Asset/SVG/circle.svg')) {
                //     mark.setAttribute('src', 'Asset/SVG/cross.svg')
                // } else {
                //     mark.setAttribute('src', 'Asset/SVG/circle.svg')
                // }
                // if (mark.getAttribute('src') === 'Asset/SVG/cross.svg') {
                //     mark.setAttribute('src', 'Asset/SVG/circle.svg')
                // } else {
                //     mark.setAttribute('src', 'Asset/SVG/cross.svg')
                // }
                // mark.setAttribute('src', 'Asset/SVG/cross.svg');
                console.log(mark.getAttribute('src') === 'Asset/SVG/cross.svg')
                mark.setAttribute('class', 'marks');
                box.target.appendChild(mark)
                // function checkMark() {}
                // const checkMark = (() => {
                //     if (mark.hasAttribute('src') == 'Asset/SVG/cross.svg') {
                //         mark.setAttribute('src', 'Asset/SVG/circle.svg')
                //     } else {
                //         mark.setAttribute('src', 'Asset/SVG/cross.svg')
                //     }
                //     console.log(mark)
                // })();
                return { mark }
            }, {once:true})
        }
        console.log(this)
        return { box }
    })();

    // Unnecessory =>

    // const checkMark = (() => {
    //     const img = () => {
    //         const createImage = document.createElement('img');
    //         createImage.setAttribute('src', 'Asset/SVG/cross.svg');
    //         createImage.setAttribute('class', 'marks');
    //         clickHandler.box.appendChild(createImage)
    //     }
    //     return { img }
    // })();

    // const addCross = (() => {
    //     const img = document.createElement('img');
    //     img.setAttribute('src', 'Asset/SVG/cross.svg');
    //     img.setAttribute('class', 'marks');
    //     console.log(img)
    //     return { img }
    // })();
    const buttonX = document.getElementById('x');
    const buttonO = document.getElementById('o');

    // const playerTurn = ((turnX, turnO) => {
        
    // })

    function playerTurn() {
        const playerOneTurn = false;
        buttonX.addEventListener('click', () => {
            playerOneTurn = buttonX;
        })
        const atttribute = 'Asset/SVG/cross.svg';
        
    }

    playerTurn();
    // const checkTurn = (() => {

    // })();

    // Gameboard Array
    const gameWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // console.log(gameWins)

    // Players
    
    // function Players(name, turn)  {
    //     this.name = name,
    //     this.turn = turn,
    // }
    const Players = (name, turn) => {
        this.name = name;
        this.turn = turn;
        return { name, turn }
    }


    // X n O Turn
    const turn = "X";

    // Player n Computer turn
    // Click Handler

    // New Game
    // Result

})();