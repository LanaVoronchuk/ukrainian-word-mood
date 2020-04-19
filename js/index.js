window.onload = function() {
  // main();
  const input = `Знаєте, що таке маленька дитина, коли у тебе діагноз «тривожно-депресивний розлад»?
  Це твій персональний ад 24/7, коли тебе не відпускає ні на хвилину, ні на секунду. Ти відчуваєш таку відповідальність, жити з якою надзвичайно важко і гнітюче.
  Немає немає радості, немає задоволення від життя, та й самого життя теж немає. І тебе - тебе також нема, бо ти давно розчинилася у власних переживаннях та страхах. Ти намагаєшся контролювати все навколо і відчуваєш, що не контролюєш нічого, ти намагаєшся зробити все і водночас розумієш, що не здатна нічого зробити.
  І от ти одного дня відводиш дитину в садочок. Усього на годину. І вперше, вперше за 2 роки з твоїх плечей падає увесь той тягар відповідальності, уся та невидима напруга раптом полишає твоє тіло і ти плентаєшся на автопілоті додому, падаєш у ліжко і просто 40 хвилин дивишся в стелю. Прислухаєшся до себе, до своїх думок, свого дихання і серцебиття.
  І відчуваєш, що ти ще є, ти ще жива і маєш право. Право бути. Нехай усього якихось 40 хвилин. Але ти вільна. Майже. Вільна.`;

  processText(input)
}

function main() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSubmit);
}

function formSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const textEl = elements.text;
  const textData = textEl.value;

  const out = processText(textData);
}



function processText(text) {
  const words = splitUkrainian(text);

  // Word types
  const pronouns = new Pronouns();
  for (const word of words) {
    pronouns.addWhenMatches(word);
  }

  console.log(pronouns);
}
