let example = [[1,2,3],[4,[5,6]],7,[8,9]];

function flatten(data) {
    let output = [];

    data.forEach(element => {
        if(typeof element=="array") {
            output +=element;

        }
    });

}