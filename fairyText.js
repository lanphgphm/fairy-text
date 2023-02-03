let plainText="", plainList;
var fairyList = []; // global list for easy access

// this is only run when the app first load
var emojiList = "✨ 🎇 🌟 ⭐ 🌠 💥 🔥 🧨 🥵 🌶️ 🥶 🧊 🍦 😰 ❄️ ⛄ 🌴 🌻 🍀 🍂 🌳 🎋 💚 🥗 🥀 🌸 💟 💓 💗 😍 😻 💝 🤟 💌 💕 😇 🤗 😌 🙌 😃 😁 🤭 😮‍💨 🙄 😔 🙏 😆 🥳 🏇 👉👈 😠 😤 😩 ✨ 🤡 🔥 🎉 ✊ 👌 💅 🤙 🤸 🧚 🧘 💃 🌈 🍊 🍻 🔪 🪓 🤮 😍 🥰 😘 🫶 🤌 💪 🧚‍♀️ 🧚 🧚‍♂️ 🧜‍♀️ 🧜 🧜‍♂️ 💃 🦋 💐 🌷 🌹 🌺 🌸 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 💥 🔥 🌈 ☀️ 🧸 🎁 🎈 🎀 🪄 🎊 🎉 🎐 💌 ❤️ 🤎 💗 🧡 💔 💖 💛 ❤️‍🔥 💘 💚 ❤️‍🩹 💝 💙 ❣️ 💟 💜 💕 💓 💞 🖤 🤍 ♥️".split(" ")
var n = emojiList.length; 

function getRandIdx(n){
    let randFloat = Math.random(); 
    let randInt = Math.floor(randFloat*n); 
    return randInt; 
}

document.getElementById("inputButton").onclick = function(){
    // getting input string to `plaintext`
    fairyList = [];
    plainText = document.getElementById("plaintext").value.trim();

    // getting custom emoji (if any)
    let customEmoji = []; // reset
    customEmoji = document.getElementById("customEmoji").value.trim(); 

    // only use the custom emojis if the input is not empty 
    // else restore default 
    if (customEmoji != ""){
        emojiList = customEmoji.split(" ");
        n = emojiList.length; 
    }
    else{
        emojiList = "✨ 🎇 🌟 ⭐ 🌠 💥 🔥 🧨 🥵 🌶️ 🥶 🧊 🍦 😰 ❄️ ⛄ 🌴 🌻 🍀 🍂 🌳 🎋 💚 🥗 🥀 🌸 💟 💓 💗 😍 😻 💝 🤟 💌 💕 😇 🤗 😌 🙌 😃 😁 🤭 😮‍💨 🙄 😔 🙏 😆 🥳 🏇 👉👈 😠 😤 😩 ✨ 🤡 🔥 🎉 ✊ 👌 💅 🤙 🤸 🧚 🧘 💃 🌈 🍊 🍻 🔪 🪓 🤮 😍 🥰 😘 🫶 🤌 💪 🧚‍♀️ 🧚 🧚‍♂️ 🧜‍♀️ 🧜 🧜‍♂️ 💃 🦋 💐 🌷 🌹 🌺 🌸 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 💥 🔥 🌈 ☀️ 🧸 🎁 🎈 🎀 🪄 🎊 🎉 🎐 💌 ❤️ 🤎 💗 🧡 💔 💖 💛 ❤️‍🔥 💘 💚 ❤️‍🩹 💝 💙 ❣️ 💟 💜 💕 💓 💞 🖤 🤍 ♥️".split(" ")
        n = emojiList.length; 
    }

    // processing input string
    plainList = plainText.split(" ");  
    for (i = 0; i < plainList.length; i++){
        var tempEmo = '';
        if (i%5==0){ // no emoji inserted every 5 words
            tempEmo = ''; 
        }
        else if (i%8==0){ // 2 emojis inserted every 8 words
            tempEmo = emojiList[(getRandIdx(n))] + emojiList[(getRandIdx(n))];
        }
        else if (i%13==0){ // 3 emojis inserted every 13 words
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

document.getElementById("copyButton").onclick = function(){
    var copiedText = fairyList.join(" "); 

    // Copy the text inside the text field
    navigator.clipboard.writeText(copiedText);

    // Alert the copied text
    document.getElementById("copyStatus").innerHTML = "(copied to clipboard)";
}

