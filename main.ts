input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    custom.sendKeyText("ABCDE")
})
input.onButtonPressed(Button.AB, function () {
    custom.pressSimultaneouslyKey(SimultaneouslyKeyCode.LEFTCTRL)
    custom.sendKeyText("A")
    custom.sendKeyCode(KeyCode.DELETE)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(4, 0)
    custom.sendKeyText("abcde")
})
let キー = 0
radio.setFrequencyBand(7)
radio.setTransmitPower(7)
radio.setGroup(7)
basic.forever(function () {
	
})
basic.forever(function () {
    if (キー != 0) {
        キー = 0
        basic.pause(50)
        led.unplot(2, 2)
        led.unplot(0, 2)
        led.unplot(2, 0)
        led.unplot(2, 4)
        led.unplot(4, 2)
    }
})
