const imgs = [
    'assets/bg1.png',
    'assets/bg2.png',
    'assets/bg3.png',
    'assets/bg4.png',
    'assets/bg5.png',
    'assets/bg6.png',
    'assets/bg7.png',
    'assets/bg8.png',
    'assets/bg9.png'
];
const profiles = [
    'assets/profiles/p1.png',
    'assets/profiles/p2.png',
    'assets/profiles/p3.png',
    'assets/profiles/p4.png'
]
const imgDivs = document.querySelectorAll('.img');

imgDivs.forEach((div, index) => {
    if (imgs[index]) {
        div.style.backgroundImage = `url('${imgs[index]}')`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center'; 
    }
});
const picDivs = document.querySelectorAll('.profile-photo')
picDivs.forEach((div,index)=>{
    if(profiles[index]){
        div.style.backgroundImage = `url('${profiles[index]}')`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center'; 
    }
}) 

