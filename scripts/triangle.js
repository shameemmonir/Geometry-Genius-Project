/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-01: get base value
 * */ 




function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    // console.log(triangleBaseInput);
    const triangleBaseText = triangleBaseInput.value;
    // console.log(typeof triangleBaseText);
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    // console.log(triangleHeightInput);
    const triangleHeightText = triangleHeightInput.value;
    // console.log(triangleHeightText);
    const height = parseFloat(triangleHeightText);
    console.log(height);
}