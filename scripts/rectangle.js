function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    // console.log(rectangleWidthInput);
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    // console.log(rectangleLengthInput);
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

    const area = width * length;
    // console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerHTML = area;
}