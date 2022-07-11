let canvasElement = document.getElementById('canvas')
let buttonElement = document.getElementById('button')

const context = canvasElement.getContext('2d')
canvasElement.addEventListener('click', createCanvasRectange)
buttonElement.addEventListener('click', clearCanvas)

function clearCanvas() {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height)
}

function createCanvasRectange(event) {
    const BORDER_COLOR = '#ff0000'
    const BORDER_THICKNESS = 4
    const MIN_RECT_SIZE = 9

    const rect = canvasElement.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    context.strokeStyle = BORDER_COLOR
    context.lineWidth = BORDER_THICKNESS
    context.strokeRect(x, y, ...getRandomSize(rect.width - x, rect.height - y, MIN_RECT_SIZE))

    function getRandomSize(maxWidth, maxHeight, minSize) {
        return [
            Math.floor(Math.random() * (maxWidth - minSize + 1) + minSize),
            Math.floor(Math.random() * (maxHeight - minSize + 1) + minSize),
        ]
    }

}
