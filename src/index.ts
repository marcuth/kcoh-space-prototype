const game = {
    troops: [
        {
            id: "troop1",
            position: { x: 0, y: 0 },
            width: 1,
            height: 1,
            color: "blue",
            side: "player"
        }
    ],
    buildings: [
        {
            id: "building1",
            position: { x: 5, y: 5 },
            width: 2,
            height: 3,
            color: "gray",
            side: "enemy"
        }
    ]
}

const canvas = document.querySelector("canvas")!
const ctx = canvas.getContext("2d")!

function renderScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    game.troops.forEach(troop => {
        ctx.fillStyle = troop.color
        ctx.fillRect(troop.position.x, troop.position.y, troop.width, troop.height)
    })

    game.buildings.forEach(building => {
        ctx.fillStyle = building.color
        ctx.fillRect(building.position.x, building.position.y, building.width, building.height)
    })

    requestAnimationFrame(renderScreen)
}

renderScreen()