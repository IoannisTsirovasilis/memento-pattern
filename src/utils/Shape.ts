import { Memento } from './Memento';

export class Shape {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  save(): Memento {
    return new Memento(this.color);
  }

  restore(memento: Memento) {
    this.color = memento.getState();
  }
}
