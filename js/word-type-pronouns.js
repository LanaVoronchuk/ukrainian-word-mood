const PRONOUNS = new Set([
  'я',
  'мене',
  'мені',
  'мною',
  'себе',
  'собі',
  'собою',
  'ти',
  'тобі',
  'тебе',
  'тобою',
  'ви',
  'вам',
  'вами',
  'вас',
]);
class Pronouns extends WordType {
  match(word) {
    return PRONOUNS.has(word);
  }
}
