const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", updateWordCount);

function updateWordCount() {
  const text = textbox.value;
  const wordArray = text.split(" ");
  const count = wordArray.filter(word => word.length > 0).length;
  wordCount.innerHTML = count;
}
