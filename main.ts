/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aden Hughes
 * Created on: feb 2026
 * This program Tells the temperature
*/

// The Variable For Temperature
let currentTemperature: number

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// The Procedure
input.onButtonPressed(Button.A, function () {
  currentTemperature = input.temperature()
  basic.showString('The temperature is' + currentTemperature)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
