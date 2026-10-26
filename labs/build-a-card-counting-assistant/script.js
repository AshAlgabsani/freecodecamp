let count = 0;
const cardCounter = (card) => {
  if (typeof card === "string") {
  card = card.toUpperCase();
  }
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++
  } 
  if (card === 10 || card === 'J' || card === `Q` || card === `K` || card === `A`) {
    count--
  }
  if (count > 0) {
    return `${count} Bet`
  } else {
    return `${count} Hold`
  }
};