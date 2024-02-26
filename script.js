document.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("colorPicker");
  const redInput = document.getElementById("redInput");
  const greenInput = document.getElementById("greenInput");
  const blueInput = document.getElementById("blueInput");
  const colorBox = document.getElementById("colorBox");
  const hexCode = document.getElementById("hexCode");

  function updateColor() {
    const color = colorPicker.value;
    const redValue = parseInt(color.substring(1, 3), 16) || 0;
    const greenValue = parseInt(color.substring(3, 5), 16) || 0;
    const blueValue = parseInt(color.substring(5, 7), 16) || 0;

    redInput.value = redValue;
    greenInput.value = greenValue;
    blueInput.value = blueValue;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    const hexColor = rgbToHex(redValue, greenValue, blueValue);

    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
  }

  function updateColorFromInputs() {
    const redValue = parseInt(redInput.value) || 0;
    const greenValue = parseInt(greenInput.value) || 0;
    const blueValue = parseInt(blueInput.value) || 0;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    const hexColor = rgbToHex(redValue, greenValue, blueValue);

    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;

    // Update color picker value
    const hex = rgbToHex(redValue, greenValue, blueValue).substring(1);
    colorPicker.value = `#${hex}`;
  }

  function rgbToHex(r, g, b) {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };

    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  colorPicker.addEventListener("input", updateColor);
  redInput.addEventListener("input", updateColorFromInputs);
  greenInput.addEventListener("input", updateColorFromInputs);
  blueInput.addEventListener("input", updateColorFromInputs);

  // Initial color update
  updateColor();
});
