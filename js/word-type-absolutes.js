const ABSOLUTES_PATTERNS = [
  /^.*ніколи.*$/u,
  /^.*нізащо.*$/u,
  /^.*нікуди.*$/u,
  /^.*ніде.*$/u,
  /^.*ніхто.*$/u,
  /^.*нічо.*$/u,
  /^.*нікому.*$/u,
  /^.*нічим.*$/u,
  /^.*відсут.*$/u,
  /^.*геть.*$/u,
  /^.*зовсім.*$/u,
  /^.*повністю.*$/u,
  /^.*цілком.*$/u,
  /^.*цілков.*$/u,
  /^.*все.*$/u,
  /^.*усе.*$/u,
  /^.*всі.*$/u,
  /^.*усі.*$/u,
  /^.*вся.*$/u,
  /^.*уся.*$/u,
  /^.*увесь.*$/u,
  /^.*вес.*$/u,
  /^.*всім.*$/u,
  /^.*всьому.*$/u,
  /^.*всій.*$/u,
  /^.*довік.*$/u,
  /^.*довіч.*$/u,
  /^.*повік.*$/u,
  /^.*зроду.*$/u,
  /^.*вічн.*$/u,
  /^.*постійн.*$/u,
  /^.*завжди.*$/u,
  /^.*усюди.*$/u,
  /^.*звідусіль.*$/u,
  /^.*скрізь.*$/u,
  /^.*всюди.*$/u,
  /^.*кругом.*$/u,
  /^.*навколо.*$/u,
  /^.*єдин.*$/u,
  /^.*щодень.*$/u,
  /^.*щодня.*$/u,
  /^.*щоден.*$/u,
  /^.*безліч.*$/u,
  /^.*безкінеч.*$/u,
  /^.*нескінчен.*$/u,
  /^.*анітрохи.*$/u,
  /^.*аніяк.*$/u,
  /^.*повн.*$/u,
  /^.*кожн.*$/u,
];

const ABSLOUTES_PHRASES = [
  /ні[\s\-–—]*в[\s\-–—]*якому[\s\-–—]*разі/gmu,
  /ні[\s\-–—]*в[\s\-–—]*чому/gmu,
  /ні[\s\-–—]*за[\s\-–—]*що/gmu,
  /нема[\s\-–—]*куди/gmu,
  /до[\s\-–—]*смерті/gmu,
  /цілий[\s\-–—]*вік/gmu,
  /кожен[\s\-–—]*день/gmu,
  /кожного[\s\-–—]*дня/gmu,
  /все[\s\-–—]*ще/gmu,
  /ані[\s\-–—]*звідки/gmu,
  /все[\s\-–—]*одно/gmu,
];

class Absolutes extends WordType {
  match(word) {
    return ABSOLUTES_PATTERNS.some((regex) => regex.test(word));
  }

  searchPhrases(text) {
    for (const phrase of ABSLOUTES_PHRASES) {
      const matches = text.match(phrase);
      if (matches) {
        for (const match of matches) {
          // todo: handle counting each phrase of the word
          this.add(match);
        }
      }
    }
  }
}
