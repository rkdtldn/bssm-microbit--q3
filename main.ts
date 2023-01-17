input.onButtonPressed(Button.A, function () {
    if (TnF == true) {
        TnF = false
    } else {
        TnF = true
    }
})
let TnF = false
TnF = false
basic.forever(function () {
    if (TnF == true) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
