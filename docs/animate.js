const svgCollections = document.getElementsByClassName('animate-path')
const homeInfoText = document.getElementById('homeInfoText');
setTimeout(() => {
    for (let i = 0; i < svgCollections.length; i++) {
        const svg = svgCollections[i];
        svg.classList.add('run-stroke');
        console.log(svg.getTotalLength());
    }
}, 500)

setTimeout(() => {
    console.log('test')
    homeInfoText.classList.add('float-in');
}, 4500);
