input.onButtonPressed(Button.A, function () {
    for (let contador = 0; contador <= 10; contador++) {
        basic.showNumber(contador)
    }
    caras()
})
input.onButtonPressed(Button.AB, function () {
    contador = 1
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    caras()
})
function caras () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.B, function () {
    contador = 2
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    caras()
})
let contador = 0
let aleatorio = randint(5, 10)
basic.showNumber(aleatorio)
for (let contador = 0; contador <= aleatorio; contador++) {
    basic.showNumber(contador)
    for (let index = 0; index < contador; index++) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
