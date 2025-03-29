// Cria o botão
const musicBtn = document.createElement('button');
musicBtn.id = 'music-btn';
musicBtn.innerText = '🔇';
document.body.appendChild(musicBtn);

// Cria o container invisível para o player
const musicDiv = document.createElement('div');
musicDiv.id = 'music-player';
musicDiv.style.display = 'none'; // invisível
document.body.appendChild(musicDiv);

// Carrega a YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;
let isMuted = true;

// Função automática chamada pela API quando estiver pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('music-player', {
        videoId: 'yEvwHcFSncQ', // <-- ID da música nova
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'yEvwHcFSncQ',
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            playsinline: 1
        },
        events: {
            'onReady': (event) => {
                event.target.mute();      // começa mutado
                event.target.playVideo(); // começa tocando sem som
            }
        }
    });
}

// Controle do botão (ativar/desativar som)
musicBtn.onclick = () => {
    if (!player) return; // previne erro antes do player carregar
    if (isMuted) {
        player.unMute();
        musicBtn.innerText = '🎵';
        isMuted = false;
    } else {
        player.mute();
        musicBtn.innerText = '🔇';
        isMuted = true;
    }
}
