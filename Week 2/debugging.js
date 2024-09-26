const PI = 3.14;
let radius = 3;
let area = 0;
area = areaOfCircle(radius);
radius = 4;
area = areaOfCircle(radius);

function areaOfCircle(r) {
    return r * r * PI;
}