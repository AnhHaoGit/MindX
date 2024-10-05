let k = prompt("Nhập chữ:");

if (isNaN(k)) {
    let abc = true;
    for (let i = 0; i < (k.length / 2); i++) {
        if (k[i] !== k[k.length - 1 - i]) {
            abc = false;
            break;
        }
    }

    if (abc) {
        console.log("Chữ đối xứng");
    } else {
        console.log("Chữ không đối xứng");
    }
} else {
    console.log("Nhập lại chữ");
}
