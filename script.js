// const leftDiv = document.querySelector('.left')
const root = document.querySelector(':root')

function color() {
    const colors = ['#00457E', '#2F70AF', '#92DAD9','#DCEBEB'
    ,'#F7E2E1', '#ECA4A4', '#AC6869']
    const colorsWhite = ['#fffafa', '#f5f5f5', '#fffafa', '#F8F8FF'
    , '#f8f8ff', '#f8fbf8', '#F5F5F5']

    const randoWhite = () => colorsWhite[Math.floor(Math.random() * colors.length)];
    const rando = () => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `
    --left-color: ${rando()};
    --right-color: ${randoWhite()};
    `
    setTimeout(color)
}

color()
