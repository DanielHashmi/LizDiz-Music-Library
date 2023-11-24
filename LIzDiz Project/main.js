
let songIndex = 0;
let mastersn = document.getElementById('masterSn');
let Musics = [
    { name: "_THE FLASH_ [Theme Song Remix] -Remix Maniacs(MP3_160K)(MP3_160K)", path: 'Music/1.mp3', cover: 'pics/1.jpg' },
    { name: "Acharuli Popuri-Georgian Gandagana Remix Bass boosted _ Copyright free(MP3_160K)(MP3_160K)", path: 'Music/2.mp3', cover: 'pics/2.jpg' },
    { name: "Alan Walker x Shining Nikki - Something Just Like This __ Animation Music Video(MP3_160K)", path: 'Music/3.mp3', cover: 'pics/3.jpg' },
    { name: "Arabik  _ Next Route _ Background Music _ Audio Library Release(MP3_160K)", path: 'Music/4.mp3', cover: 'pics/4.jpg' },
    { name: "David Guetta_ Bebe Rexha _ J Balvin - Say My Name [Bass Boosted](MP3_160K)", path: 'Music/5.mp3', cover: 'pics/5.jpg' },
    { name: "Unknown Brain x Rival - Control (feat. Jex) [NCS Release](MP3_160K)", path: 'Music/6.m4a', cover: 'pics/6.jpg' },
    { name: "Off The Leash (Instrumental   Slowed   Shunsui Bankai)(MP3_320K)", path: 'Music/7.mp3', cover: 'pics/7.jpg' },
    { name: "TheFloudy _ NICESKEIK - TFNS(MP3_128K)", path: 'Music/8.mp3', cover: 'pics/8.jpg' },
]
let songItems = Array.from(document.getElementsByClassName('songItem'))
music = new Audio('free.m4a')

let play = document.getElementById('play')
let myProBar = document.getElementById('myprobar')
play.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle')
    }
    else {
        music.pause();
        play.classList.remove('fa-pause-circle')
        play.classList.add('fa-play-circle')
    }
})
music.addEventListener('timeupdate', () => {
    progress = parseInt((music.currentTime / music.duration) * 100)
    myProBar.value = progress
})

myProBar.addEventListener('change', () => {
    music.currentTime = myProBar.value * music.duration / 100;
})

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = Musics[i].cover
    element.getElementsByClassName("songName")[0].innerText = Musics[i].name
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e) => {
        if (music.paused) {
            makeAllPlays()
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            music.src = `Music/${songIndex + 1}.mp3`
            mastersn.innerText = Musics[songIndex].name;
            music.currentTime = 0;
            music.play()
            play.classList.remove('fa-play-circle');
            play.classList.add('fa-pause-circle')
        } else {
            music.pause()
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            play.classList.remove('fa-pause-circle')
            play.classList.add('fa-play-circle')
        }
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    music.src = `Music/${songIndex + 1}.mp3`
    mastersn.innerText = Musics[songIndex].name;
    music.currentTime = 0;
    music.play()
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 7
    }
    else {
        songIndex -= 1;
    }
    music.src = `Music/${songIndex + 1}.mp3`
    mastersn.innerText = Musics[songIndex].name;
    music.currentTime = 0;
    music.play()
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle')
})