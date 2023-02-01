let plainText="", plainList;
const emojiList = "✨ 🎇 🌟 ⭐ 🌠 💥 🔥 🧨 🥵 🌶️ 🥶 🧊 🍦 😰 ❄️ ⛄ 🌴 🌻 🍀 🍂 🌳 🎋 💚 🥗 🥀 🌸 💟 💓 💗 😍 😻 💝 🤟 💌 💕 😇 🤗 😌 🙌 😃 😁 🤭 😮‍💨 🙄 😔 🙏 😆 🥳 🏇 👉👈 😠 😤 😩 ✨ 🤡 🔥 🎉 ✊ 👌 💅 🤙 🤸 🧚 🧘 💃 🌈 🍊 🍻 🔪 🪓 🤮 😍 🥰 😘 🫶 🤌 💪 🧚‍♀️ 🧚 🧚‍♂️ 🧜‍♀️ 🧜 🧜‍♂️ 💃 🦋 💐 🌷 🌹 🌺 🌸 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 💥 🔥 🌈 ☀️ 🧸 🎁 🎈 🎀 🪄 🎊 🎉 🎐 💌 ❤️ 🤎 💗 🧡 💔 💖 💛 ❤️‍🔥 💘 💚 ❤️‍🩹 💝 💙 ❣️ 💟 💜 💕 💓 💞 🖤 🤍 ♥️".split(" ")
var fairyList = []; 
const n = emojiList.length; 

function getRandIdx(n){
    let randFloat = Math.random(); 
    let randInt = Math.floor(randFloat*n); 
    return randInt; 
}

document.getElementById("inputButton").onclick = function(){
    // getting input string to `plaintext`
    fairyList = [];
    plainText = document.getElementById("plaintext").value.trim();

    // processing input string
    plainList = plainText.split(" ");  
    for (i = 0; i < plainList.length; i++){
        var tempEmo = '';
        if (i%6==0){ // no emoji inserted every 6 words
            tempEmo = ''; 
        }
        else if (i%7==0){ // 2 emojis inserted every 7 words
            tempEmo = emojiList[(getRandIdx(n))] + emojiList[(getRandIdx(n))];
        }
        else if (i%15==0){ // 3 emojis inserted every 15 words
            tempEmo = emojiList[(getRandIdx(n))] + emojiList[(getRandIdx(n))] + emojiList[(getRandIdx(n))];
        }
        else{ // default: 1 emoji after word
            tempEmo = emojiList[(getRandIdx(n))];
        }

        fairyList.push(plainList[i]); 
        fairyList.push(tempEmo);
    }    

    // displaying output string to SCREEN not to console
    document.getElementById("outputDisplay").innerHTML = fairyList.join(" "); 
}