/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-01: get base value
 * */ 




function calculateTriangleArea(){

    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    // console.log(triangleBaseInput);
    const triangleBaseText = triangleBaseInput.value;
    // console.log(typeof triangleBaseText);
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // get triangle height area
    const triangleHeightInput = document.getElementById('triangle-height');
    // console.log(triangleHeightInput);
    const triangleHeightText = triangleHeightInput.value;
    // console.log(triangleHeightText);
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    // console.log(area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}