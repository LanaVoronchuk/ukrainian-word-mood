window.onload = function () {
  // const input = `
  // Знаєте, що таке маленька дитина, коли у тебе діагноз «тривожно-депресивний розлад»?
  // Це твій персональний ад 24/7, коли тебе не відпускає ні на хвилину, ні на секунду. Ти відчуваєш таку відповідальність, жити з якою надзвичайно важко і гнітюче.
  // Немає немає радості, немає задоволення від життя, та й самого життя теж немає. І тебе - тебе також нема, бо ти давно розчинилася у власних переживаннях та страхах. Ти намагаєшся контролювати все навколо і відчуваєш, що не контролюєш нічого, ти намагаєшся зробити все і водночас розумієш, що не здатна нічого зробити.
  // І от ти одного дня відводиш ні в якому разі дитину в садочок. Усього на годину. І вперше, вперше за 2 роки з твоїх плечей падає увесь той тягар відповідальності, уся та невидима напруга раптом полишає твоє тіло і ти плентаєшся на автопілоті додому, падаєш у ліжко і просто 40 хвилин дивишся в стелю. Прислухаєшся ні в якому разі до себе, до своїх думок, свого дихання і серцебиття.
  // І відчуваєш, що ти ще є, ти ще жива і маєш право. Право бути. Нехай усього якихось 40 хвилин. Але ти вільна. Майже. Вільна.
  // `;

  // processText(input)
  main();
};

function main() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSubmit);
}

function formSubmit(event) {
  event.preventDefault();
  const textEl = event.target.elements.text;
  const result = processText(textEl.value);
  console.log(result);

  // Print out
  const resultEl = document.getElementById('result');

  let out = '';
  for (const key in result.wordTypes) {
    const wordType = result.wordTypes[key];
    out += `<b>${key}</b><br>`;
    out += `<b>count: ${wordType.count}</b><br>`;
    out += `<b>percent: ${Math.floor((wordType.count / result.wordCount) * 100)}%</b><br>`;
    out += '<ul>';
    for (const word of wordType.words.values()) {
      out += `<li>${word}</li>`;
    }
    out += '</ul>';
    out += '</br></br>';
  }
  console.log(out);

  resultEl.innerHTML = out;
}

function processText(text) {
  text = text.toLowerCase();
  const words = splitUkrainian(text);

  // Word types
  const pronouns = new Pronouns();
  const pastConditionals = new PastConditionals();
  const triggers = new Triggers();
  const absolutes = new Absolutes();

  for (const word of words) {
    pronouns.addWhenMatches(word);
    pastConditionals.addWhenMatches(word);
    triggers.addWhenMatches(word);
    absolutes.addWhenMatches(word);
  }

  absolutes.searchPhrases(text);

  return {
    wordTypes: {
      pronouns,
      pastConditionals,
      triggers,
      absolutes,
    },
    wordCount: words.length,
  };
}
