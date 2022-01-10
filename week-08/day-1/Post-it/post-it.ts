/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
*/

export class PostIt {
  private background: string;
  private textOnIt: string;
  private textColor: string;

  constructor(background: string, textOnIt: string, textColor: string) {
    this.background = background;
    this.textOnIt = textOnIt;
    this.textColor = textColor;
  }
}
