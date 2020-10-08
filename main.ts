let x = 0
let y = 0
basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(100)
            led.unplot(x, y)
            basic.pause(100)
        }
    }
})
