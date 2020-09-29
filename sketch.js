const CANVAS_WIDTH  = window.innerWidth
const CANVAS_HEIGHT = window.innerHeight

let bodyLengthSlider
let branchPortionSlider
let maxIterationSlider
let angleSlider

let bodyLength = 180
let branchPortion = 0.7
let maxIteration = 10
let angle = Math.PI / 5

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

    createP('Body Length:')
    createSpan('50')
    bodyLengthSlider = createSlider(50, 300, 180)
    createSpan('300')

    createP('Branch Proportion:')
    createSpan('0.1')
    branchPortionSlider = createSlider(0.1, 1, 0.7, 0.05)
    createSpan('1')

    createP('Max Iteration:')
    createSpan('1')
    maxIterationSlider = createSlider(1, 15, 10)
    createSpan('15')
    
    createP('Branch Angle:')
    createSpan('0')
    angleSlider = createSlider(0, 2 * Math.PI, Math.PI / 4, 0.01)
    createSpan('2 * PI')
}

function draw() {
    background(0)
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
    stroke(255)

    bodyLength = bodyLengthSlider.value()
    branchPortion = branchPortionSlider.value()
    maxIteration = maxIterationSlider.value()
    angle = angleSlider.value()

    branch(bodyLength, 0)
}

function branch(len, i) {
    line(0, 0, 0, -len)
    translate(0, -len)
    if (i < maxIteration) {
        push()
        rotate(angle)
        branch(len * branchPortion, i + 1)
        pop()
        push()
        rotate(-angle)
        branch(len * branchPortion, i + 1)
        pop()
    }
}