

const hex_str = '0 1 2 3 4 5 6 7 8 9 A B C D E F';
const hex_arr = hex_str.split(" ");




function generate(){
    let hex = '#';
    for (let i = 0; i < 6 ; i++){
        let hexIndex = parseInt(Math.random()*hex_arr.length);
        hex += hex_arr[hexIndex].toString();
    }
    document.body.style.backgroundColor = hex;
    document.getElementById("hex").innerHTML= hex;
}
