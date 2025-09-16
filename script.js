const outfits = [
    "Casual: Denim jacket, white tee, black jeans, sneakers.",
    "Formal: Navy blazer, white shirt, grey trousers, leather shoes.",
    "Party: Red dress, heels, statement jewelry.",
    "Summer: Floral shirt, beige shorts, sandals.",
    "Winter: Wool coat, scarf, boots, dark trousers."
];

const chatReplies = [
    "Always pick outfits that suit your skin tone.",
    "Accessorize lightly for a clean look.",
    "Layering is key in cooler weather.",
    "Neutral colors go with everything!",
    "Confidence is the best accessory."
];

function generateOutfit() {
    const desc = document.getElementById("description").value.trim();
    const resultDiv = document.getElementById("result");
    if (!desc) {
        resultDiv.innerHTML = "Please describe your mood or occasion.";
        return;
    }
    const outfit = outfits[Math.floor(Math.random() * outfits.length)];
    resultDiv.innerHTML = `<strong>Suggestion:</strong> ${outfit}`;
}

function sendMessage() {
    const input = document.getElementById("chat-input").value.trim();
    const output = document.getElementById("chat-output");
    if (!input) {
        output.innerHTML = "Please type a question.";
        return;
    }
    const reply = chatReplies[Math.floor(Math.random() * chatReplies.length)];
    output.innerHTML = `<strong>You:</strong> ${input}<br><strong>Style Sense:</strong> ${reply}`;
    document.getElementById("chat-input").value = "";
}
