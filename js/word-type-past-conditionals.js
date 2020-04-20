const CONDITIONALS = new Set(['якщо', 'якби', 'б', 'би']);
const PAST_TENSE_SUFFIXES = ['ила', 'ала', 'ла', 'ив', 'ав', 'али', 'или', 'ли', 'ало', 'ло', 'ило'];

class PastConditionals extends WordType {
  match(word) {
    if (CONDITIONALS.has(word)) {
      return true;
    }
    return PAST_TENSE_SUFFIXES.some((suffix) => word.endsWith(suffix));
  }
}
