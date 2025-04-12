// 加载JSON数据
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        let selectedIndex = 0;
        showRandomCard(data);
    });

function showRandomCard(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedWord = data[randomIndex];
    selectedIndex = randomIndex;

    document.getElementById('currentChar').textContent = selectedWord.char;
    document.getElementById('currentPinyin').textContent = `拼音：${selectedWord.pinyin}`;
    document.getElementById('wordGroup1').textContent = `组词1：${selectedWord.words[0]}`;
    document.getElementById('wordGroup2').textContent = `组词2：${selectedWord.words[1]}`;
    document.getElementById('wordGroup3').textContent = `组词3：${selectedWord.words[2]}`;
}

function playPronunciation() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(
            words.json[selectedIndex].pronunciation
        );
        utterance.lang = 'zh-CN';
        speechSynthesis.speak(utterance);
    }
}