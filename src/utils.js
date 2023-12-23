

const wait = (sec) => new Promise((res, rej) => {
    setTimeout(() => {res()}, sec * 1000)
})

const fetchDataFromServer = () => {

    const rows = [ [0, 1, 2, 3], [4, 5, 6, 7]]
    const rightIndexes = {
        0 : 1,
        1 : 0,
        2 : 3,
        3 : 2,
        4 : 5,
        5 : 4,
        6 : 7,
        7 : 6
    }
    const images = [
        'https://image-kiel.de/wp-content/uploads/2017/08/red-back-300x300.jpg', 
        'https://image-kiel.de/wp-content/uploads/2017/08/red-back-300x300.jpg',

        'https://i0.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/logo-blue-just-image-300x300.png?ssl=1',
        'https://i0.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/logo-blue-just-image-300x300.png?ssl=1',

        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Green_008000_300x300.svg',
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Green_008000_300x300.svg',

        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg', 
        'https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg', 
    ]



    return {rows, rightIndexes, images}
}


export { wait, fetchDataFromServer}

