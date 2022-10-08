async function loop() {
    while (true) {
        console.log('Running');
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

loop();