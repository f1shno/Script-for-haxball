var tennis1 = `{"name":"Tennis [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":500,"height":281,"spawnDistance":700,"bg":{"type":"grass","width":350,"height":200,"kickOffRadius":0,"cornerRadius":0},"vertexes":[{"bCoef":0.1,"x":-160,"y":0,"color":"ffffff","trait":"Line"},{"bCoef":0.1,"x":160,"y":0,"color":"ffffff","trait":"Line"},{"bCoef":0.1,"x":-160,"y":-160,"trait":"Line"},{"bCoef":0.1,"x":-160,"y":160,"trait":"Line"},{"bCoef":0.1,"x":160,"y":-160,"trait":"Line"},{"bCoef":0.1,"x":160,"y":160,"trait":"Line"},{"bCoef":0.1,"x":-349.99998474121,"y":-160,"trait":"Line"},{"bCoef":0.1,"x":351.00001525879,"y":-160,"trait":"Line"},{"bCoef":0.1,"x":-349.99998474121,"y":160,"trait":"Line"},{"bCoef":0.1,"x":351.00001525879,"y":160,"trait":"Line"},{"bCoef":0.1,"trait":"barrier","x":0,"y":-200,"vis":true,"color":"ffffff"},{"bCoef":0.1,"trait":"barrier","x":0,"y":200,"vis":true,"color":"ffffff"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","x":-160,"y":-200,"vis":true,"color":"66ccff"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":160,"y":-200,"vis":true,"color":"66ccff"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","x":-161,"y":200,"vis":true,"curve":0,"color":"66ccff"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":159,"y":200,"vis":true,"curve":0,"color":"66ccff"}],"segments":[{"bCoef":0.1,"v0":0,"v1":1,"color":"ffffff","trait":"Line","curve":1.5043567853023},{"color":"ffffff","bCoef":0.1,"v0":2,"v1":3,"trait":"Line"},{"color":"ffffff","bCoef":0.1,"v0":4,"v1":5,"trait":"Line"},{"color":"ffffff","bCoef":0.1,"v0":6,"v1":7,"trait":"Line"},{"color":"ffffff","bCoef":0.1,"v0":8,"v1":9,"trait":"Line"},{"vis":true,"color":"ffffff","bCoef":0.1,"trait":"barrier","v0":10,"v1":11},{"vis":true,"color":"66ccff","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","v0":12,"v1":13},{"vis":true,"color":"66ccff","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","v0":14,"v1":15,"curve":0,"y":200},{"vis":false,"color":"fafafa","bCoef":0.1,"v0":13,"v1":15,"curve":146.60365544733,"cMask":["red","blue"],"trait":"kickOffBarrier","cGroup":["redKO","blueKO"]}],"goals":[{"team":"blue","p0":[358.8571434021,-217.42857146263],"p1":[358.8571434021,215.57142853737]},{"team":"red","p0":[-358.8571434021,-217.42857146263],"p1":[-358.8571434021,215.57142853737]},{"team":"red","p0":[-359,213],"p1":[-114,204]},{"team":"blue","p0":[359,214],"p1":[118,204]},{"p0":[358,-218],"p1":[120,-205],"team":"blue"},{"p0":[-360,-217],"p1":[-124,-204],"team":"red"}],"discs":[{"radius":5,"pos":[-0.22222137451172,-203.66666793823],"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"trait":"goalPost"},{"radius":5,"pos":[-0.22222137451172,203.66666793823],"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"trait":"goalPost"}],"planes":[{"bCoef":0.1,"dist":-469.00003051758,"normal":[-1,0]},{"bCoef":0.1,"dist":-469.00003051758,"normal":[1,0]},{"bCoef":0.1,"trait":"Line","dist":-280,"normal":[0,1]},{"bCoef":0.1,"trait":"Line","dist":-280,"normal":[0,-1]}],"traits":{"ballArea":{"vis":true,"bCoef":2,"cMask":["ball"],"color":[250,250,250]},"barrier":{"vis":false,"bCoef":0,"cMask":["red","blue"]},"letters":{"vis":true,"bCoef":0,"cMask":[""],"color":[255,255,255]},"goalPost":{"radius":3,"invMass":0,"cMask":["red","blue"]},"goalNet":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"Line":{"vis":true,"bCoef":0,"cMask":[""],"color":[250,250,250]}},"playerPhysics":{"acceleration":0.17,"kickStrength":0.1,"bCoef":3.48},"canBeStored":false}`
// Criação da sala
var room = HBInit({
    roomName: "🎾 Tênis 2v2/3v3 🎾 | SMASH (teste de bot)",
    maxPlayers: 24,
    noPlayer: false,
    playerName: "Smash bot",
    public: false	,
    geo: { "code": 'br', "lat": -19.912998, "lon": -43.940933 }
});
room.setCustomStadium(tennis1);
room.setTeamsLock(true);
room.setScoreLimit(0);
room.setTimeLimit(0);
// Variáveis globais
var dc = "dc link";  // Link do Discord (vou usar depois)
var announce = room.sendAnnouncement;

// Staff (administradores ou moderadores da sala)
var staff = ['fishno', 'yakisoba'];  // Nomes dos donos
var staffID = ['OrjOX2_oD3gc1IU7hwQlyma3HkGuxFYquph_AFaFTDw', 'nulo'];  // IDs dos donos

// Função chamada quando um jogador entra na sala
room.onPlayerJoin = function(player) {
    var players = room.getPlayerList();
	if(players.length <= 2) {
		room.setPlayerAdmin(player.id, true);
	}
	room.sendAnnouncement(
        `🎾 SMASH: Bem-Vindo ${player.name}! Digite "!ajuda" para saber mais sobre o servidor, ;).`,
        player.id,
        0x00FF00,
        "bold",
        2
    );
    room.sendAnnouncement(
	`✅ ${player.name} Entrou na sala!`,
	null,
	0xFFFFFF,
        "bold",
	1   
    );
   if(player.name === "fishno" && player.auth === "OrjOX2_oD3gc1IU7hwQlyma3HkGuxFYquph_AFaFTDw") {
	room.setPlayerAdmin(player.id, true);
   }
   else if(player.name === "Teru" && player.auth === "jY3p6DXRbnTI44B9PhYAutlcv9_XKqQy8MApSQntUtc") {
	room.setPlayerAdmin(player.id, true);   
}
    };

	

// Função auxiliar para centralizar o texto (caso necessário)
function centerText(text) {
    var spaces = Math.max(0, (50 - text.length) / 2);
    var space = ' '.repeat(Math.floor(spaces));
    return space + text + space;
};
// Chat customizado e comandos
var comandos = [`!bb`, `!ajuda`, `!afks`, `!unis`, `!stats`, `!sequência`, `!pontos`, `!saves`, `!wins`, `!winrate`, `!provo`];

var afk = {};

function unAfk(player) {
    afk[player.id] = false;
}

function setAfk(player) {
    afk[player.id] = true;
}

function isAfk(player) {
    return afk[player.id] === true;
}

room.onPlayerChat = function(player, message) {
    if (staff.includes(player.name) && player.admin === true) {
        room.sendAnnouncement(
            `[DONO] ${player.name}: ${message}`,
            null,
            0x00FFFF,
            "bold",
            1
        );
    } else {
        room.sendAnnouncement(
            `✅ ${player.name}: ${message}`,
            null,
            0xFFFFFF,
            "normal",
            1
        );
    }

    if (comandos.includes(message)) {
        if (message === `!bb`) {
            room.kickPlayer(player.id, "Volte sempre!", false);
            return false;
        } else if (message === `!ajuda`) {
            room.sendAnnouncement(
                `SMASH: comandos: !bb, !ajuda, !afk, !afks, !unis, !provo.`,
                player.id,
                0x00FF00,
                "bold",
                2
            );
            return false; // Impede que a mensagem apareça no chat
        } else if (message === `!afks`) {
            let afkPlayers = Object.keys(afk).filter(id => afk[id] === true);
            if (afkPlayers.length === 0) {
                room.sendAnnouncement(
                    `SMASH: Não há ninguém na lista de AFKs!`,
                    player.id,
                    0xFFFFFF,
                    "normal",
                    2
                );
            } else {
                let afkNames = afkPlayers.map(id => room.getPlayer(id).name).join(", ");
                room.sendAnnouncement(
                    `SMASH: Lista de AFKs: ${afkNames}`,
                    player.id,
                    0xFFFFFF,
                    "normal",
                    2
                );
            }
        }
    }

    if (message === "!afk") {
        if (isAfk(player)) {
            room.sendAnnouncement(
                `SMASH: ${player.name} não está mais afk.`,
                null,
                0xFFFFFF,
                "bold",
                2
            );
            unAfk(player);
        } else {
            room.sendAnnouncement(
                `SMASH: ${player.name} agora está afk!`,
                null,
                0xFFFFFF,
                "bold",
                2
            );
            setAfk(player);
        }
    }

    return false;  // Impede que qualquer outra mensagem seja enviada no chat
};

// sistema de picks
room.onPlayerJoin = function(player) {
var players = room.getPlayerList();	
var novaOrdem = players.map(p => p.id)
	if(players.length <=2) {
		room.setPlayerTeam(player.id, 1)
		room.stopGame();
		room.startGame();
	} else if (players.length <=3) {
		room.setPlayerTeam(player.id, 2);
		room.stopGame();
		room.startGame();
	} else if (players.length <=4) {
		room.setPlayerTeam(player.id, 2);
		room.stopGame();
		room.startGame();
	} else if (players.length <=5)  {
		room.setPlayerTeam(player.id, 1);
		room.stopGame();
		room.startGame();
	}  
var fila = [];
var posição = {};
fila.push(player.name + " " + "[" + players.length + "]")
}
var specList = players.filter((x) => player.team[0])
function updateSpecList() {
	w.i.p
}

	
