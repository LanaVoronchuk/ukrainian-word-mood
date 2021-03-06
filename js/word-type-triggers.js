const TRIGGER_PATTERNS = [
  /^вин.*$/u,
  /^.*винув.*$/u,
  /^житт.*$/u,
  /^.*жит.*$/u,
  /^.*жив.*$/u,
  /^лінь$/u,
  /^лін.*$/u,
  /^помер.*$/u,
  /^.*мертв.*$/u,
  /^депрес.*$/u,
  /^антидепрес.*$/u,
  /^важк.*$/u,
  /^.*суд.*$/u,
  /^нікчем.*$/u,
  /^біль$/u,
  /^болю.*$/u,
  /^.*сором.*$/u,
  /^бол.*$/u,
  /^смерт.*$/u,
  /^.*муч.*$/u,
  /^страх$/u,
  /^страш.*$/u,
  /^.*жал.*$/u,
  /^втом.*$/u,
  /^стом.*$/u,
  /^суїцид.*$/u,
  /^.*поган.*$/u,
  /^.*хвор.*$/u,
  /^.*сором.*$/u,
  /^жах.*$/u,
  /^.*терп.*$/u,
  /^тяг.*$/u,
  /^пані.*$/u,
  /^атак.*$/u,
  /^проблем.*$/u,
  /^самогуб.*$/u,
  /^тяж.*$/u,
  /^пекл.*$/u,
  /^пекел.*$/u,
  /^сум.*$/u,
  /^темн.*$/u,
  /^чорн.*$/u,
  /^тьма.*$/u,
  /^самот.*$/u,
  /^напру.*$/u,
  /^.*драт.*$/u,
  /^.*плак.*$/u,
  /^.*плач.*$/u,
  /^.*рида.*$/u,
  /^дір.*$/u,
  /^вихід$/u,
  /^таблет.*$/u,
  /^безпом.*$/u,
  /^неміч.*$/u,
  /^тривог.*$/u,
  /^тривож.*$/u,
  /^сенс.*$/u,
  /^бажан.*$/u,
  /^.*бажа.*$/u,
  /^.*рад.*$/u,
  /^щаст.*$/u,
  /^.*щасл.*$/u,
  /^світ.*$/u,
  /^допом.*$/u,
  /^думк.*$/u,
  /^.*дума.*$/u,
  /^почутт.*$/u,
  /^відчутт.*$/u,
  /^.*люб.*$/u,
  /^.*люд.*$/u,
  /^стан.*$/u,
  /^пад.*$/u,
  /^досвід.*$/u,
  /^настро.*$/u,
  /^настрій.*$/u,
  /^.*сил.*$/u,
];

class Triggers extends WordType {
  match(word) {
    return TRIGGER_PATTERNS.some((regex) => regex.test(word));
  }

  searchPhrases(text) {
    for (const phrase in ABSLOUTES_PHRASES) {
      const matches = text.match(phrase);
      for (match in matches) {
        console.log(match);
      }
    }
  }
}
