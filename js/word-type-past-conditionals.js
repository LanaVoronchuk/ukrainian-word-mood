const CONDITIONALS = new Set(['якщо', 'якби', 'б', 'би']);
const PAST_TENSE_SUFFIXES = ['ила', 'ала', 'ола', 'іла', 'їла', 'ула', 'юла', 'ела', 'єла', 'яла', 'лась', 'лася', 'или', 'али', 'оли', 'іли', 'їли', 'ули', 'юли', 'ели', 'єли', 'яли', 'лись', 'лися', 'ило', 'ало', 'оло', 'іло', 'їло', 'уло', 'юло', 'ело', 'єло', 'яло', 'лось', 'лося', 'ив', 'ав', 'ов', 'їв', 'ув', 'юв', 'ев', 'яв', 'ався', 'ився', 'івся', 'увся', 'евся', 'явся', 'євся', 'ер'];

class PastConditionals extends WordType {
  match(word) {
    if (CONDITIONALS.has(word)) {
      return true;
    }
    return PAST_TENSE_SUFFIXES.some((suffix) => word.endsWith(suffix));
  }
}
