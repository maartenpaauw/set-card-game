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
    [1, 2, 3].forEach((amount: number) => {
      Object.values(Shape).forEach((shape: Shape) => {
        Object.values(Shade).forEach((shade: Shade) => {
          Object.values(Color).forEach((color: Color) => {
            this.cards.push(new Card(amount, shape, shade, color));
          });
        });
      });
    });
  }
}

export default Deck;
