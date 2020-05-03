const CONDITIONALS = new Set(['якщо', 'якби', 'б', 'би']);
const PAST_TENSE_SUFFIXES = ['ила', 'ала', 'ла', 'ив', 'ав', 'али', 'или', 'ли', 'ало', 'ло', 'ило', 'ув', 'ів', 'ула', 'ули', 'іла', 'іли', 'уло', 'іло', 'ався', 'лась', 'лось', 'лася', 'лося', 'івся', 'ився', 'увся', 'овся', 'евся', 'явся', 'лись', 'лися'];

class PastConditionals extends WordType {
  match(word) {
    if (CONDITIONALS.has(word)) {
      return true;
    }
    return PAST_TENSE_SUFFIXES.some((suffix) => word.endsWith(suffix));
  }
}
