import Shape from '@/enums/Shape';
import Shade from '@/enums/Shade';
import Color from '@/enums/Color';
import Features from '@/interfaces/Features';

class Card {
  private readonly amount: number;

  private readonly shape: Shape;

  private readonly shade: Shade;

  private readonly color: Color;

  constructor(amount: number, shape: Shape, shade: Shade, color: Color) {
    this.amount = amount;
    this.shape = shape;
    this.shade = shade;
    this.color = color;
  }

  public get features(): Features {
    return {
      amount: this.amount,
      shape: this.shape,
      shade: this.shade,
      color: this.color,
    };
  }

  public get id(): string {
    return `${this.amount}-${this.shade}-${this.color}-${this.shape}`;
  }
}

export default Card;
