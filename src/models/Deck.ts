import product from 'cartesian-product';
import shuffle from 'lodash.shuffle';
import Card from '@/models/Card';
import Shape from '@/enums/Shape';
import Shade from '@/enums/Shade';
import Color from '@/enums/Color';

class Deck {
  public cards: Card[] = [];

  constructor() {
    this.make();
  }

  private make(): void {
    const combinations = [
      [1, 2, 3],
      Object.values(Shape),
      Object.values(Shade),
      Object.values(Color),
    ];

    product(combinations).forEach((combination: Array<number | string>) => {
      // @ts-ignore
      this.cards.push(new Card(...combination));
    });
  }

  public shuffle(): Deck {
    this.cards = shuffle(this.cards);

    return this;
  }
}

export default Deck;
