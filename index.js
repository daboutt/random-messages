const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const shouldDoWhat = [
  'clean your room',
  'help your mom',
  'call your ex',
  'go to the gym',
  'go to the beach',
  'go to the movies',
  'go to the park',
];
const howToDay = [
  'not going well',
  'going well',
  'going great',
  'going bad',
  'going terrible',
  'going awesome',
  'going amazing',
];

const generateShouldDoWhatMessage = () => {
  return shouldDoWhat[Math.floor(Math.random() * shouldDoWhat.length)];
};

const generateHowToDayMessage = () => {
  return howToDay[Math.floor(Math.random() * howToDay.length)];
};

const messageGenerator = () => {
  const shouldDoWhatMessage = generateShouldDoWhatMessage();
  const howToDayMessage = generateHowToDayMessage();
  const luckyNumber = generateRandomNumber();
  return (
    `Your day are ${howToDayMessage}` +
    `\nYour lucky number is: ${luckyNumber}` +
    `\nYou should ${shouldDoWhatMessage}`
  );
};

console.log(messageGenerator());
