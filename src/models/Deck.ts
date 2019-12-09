import product from 'cartesian-product';
import shuffle from 'lodash.shuffle';
import Card from '@/models/Card';
import Color from '@/enums/Color';
import Features from '@/interfaces/Features';
import Shade from '@/enums/Shade';
import Shape from '@/enums/Shape';

class Deck {
  public cards: Card[] = [];

  constructor() {
    this.make();
  }

  private make(): void {
    const parameters = [
      [1, 2, 3],
      Object.values(Shape),
      Object.values(Shade),
      Object.values(Color),
    ];

    const combinations = product(parameters).map((combination: Array<number | string>) => ({
      amount: combination[0],
      shape: combination[1],
      shade: combination[2],
      color: combination[3],
    } as Features));

    combinations.forEach((combination: Features) => {
      this.cards.push(new Card(
        combination.amount,
        combination.shape,
        combination.shade,
        combination.color,
      ));
    });
  }

  public shuffle(): Deck {
    this.cards = shuffle(this.cards);

    return this;
  }
}

export default Deck;
