let plainText="", plainList;
var fairyList = []; // global list for easy access
let customEmoji = ""; 

// this is only run when the app first load
var emojiCollection = {
    default: "✨ 🎇 🌟 ⭐ 🌠 💥 🔥 🧨 🥵 🌶️ 🥶 🧊 🍦 😰 ❄️ ⛄ 🌴 🌻 🍀 🍂 🌳 🎋 💚 🥗 🥀 🌸 💟 💓 💗 😍 😻 💝 🤟 💌 💕 😇 🤗 😌 🙌 😃 😁 🤭 😮‍💨 🙄 😔 🙏 😆 🥳 🏇 👉👈 😠 😤 😩 ✨ 🤡 🔥 🎉 ✊ 👌 💅 🤙 🤸 🧚 🧘 💃 🌈 🍊 🍻 🔪 🪓 🤮 😍 🥰 😘 🫶 🤌 💪 🧚‍♀️ 🧚 🧚‍♂️ 🧜‍♀️ 🧜 🧜‍♂️ 💃 🦋 💐 🌷 🌹 🌺 🌸 🪐 💫 ⭐️ 🌟 ✨ ⚡️ 💥 🔥 🌈 ☀️ 🧸 🎁 🎈 🎀 🪄 🎊 🎉 🎐 💌 ❤️ 🤎 💗 🧡 💔 💖 💛 ❤️‍🔥 💘 💚 ❤️‍🩹 💝 💙 ❣️ 💟 💜 💕 💓 💞 🖤 🤍 ♥️",
    sparkle: "✨ 🌟 ⭐ 🌠 💥 🦋 ✨ 💫",
    zen: "🥲 😌 😩 ✨ 🧘‍♀️ 🧘 💙 ✅",
    plants: "🌴 🌻 🍀 🍂 🌳 🎋 💚 🥗 🥀 🌸 🌾 💐 🌷 🌹 🪷 🌺 🎋🎋🎍 🪴 🌴 🌳 🌿 🌱",
    angry: "😠 😡 🤬 🥵 🥶 😒 😏 🙄 👊 🔥 💥 🌪 ⛈ 🌩 😮‍💨 🙄 😔 🙏 👉👈 😤 😩 ✨ 🤡",
    food: "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🫙 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🍩 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍪 🌰 🥜 🫘 🍯 🥛 ☕️ 🍵 🧃 🧋 🍺 🍷 🥃 🧊"
}
var emojiList = emojiCollection.default.split(" ");
var n = emojiList.length; 

function getRandIdx(n){
    let randFloat = Math.random(); 
    let randInt = Math.floor(randFloat*n); 
    return randInt; 
}

document.getElementById("sparkle").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.sparkle;
}
document.getElementById("plants").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.plants;
}
document.getElementById("angry").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.angry;
}
document.getElementById("food").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.food;
}
document.getElementById("default").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.default;
}
document.getElementById("zen").onclick = function(){
    document.getElementById("customEmoji").value = emojiCollection.zen;
}

document.getElementById("inputButton").onclick = function(){
    // getting input string to `plaintext`
    fairyList = [];
    plainText = document.getElementById("plaintext").value.trim();

    // getting custom emoji (if any)
    customEmoji = ""; // reset for each button click
    customEmoji = document.getElementById("customEmoji").value.trim(); 

    // only use the custom emojis if the input is not empty 
    // else restore default 
    if (customEmoji != ""){
        emojiList = customEmoji.split(" ");
        n = emojiList.length; 
    }
    else{
        emojiList = emojiCollection.default.split(" ");
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

document.getElementById("instructButton").onclick = function(){
    const instruction = document.getElementById("instructionBox");
    if (instruction.style.display == "none") instruction.style.display = "block";
    else instruction.style.display = "none";
}