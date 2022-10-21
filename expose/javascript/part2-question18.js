function time() {
    let d = new Date();
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}

setInterval(time, 1000)