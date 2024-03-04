import { Memento } from './Memento';

export class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento) {
    this.mementos.push(memento);
  }

  getLastMemento(): Memento | null {
    if (this.mementos.length === 0) {
      return null;
    }
    return this.mementos.pop() as Memento;
  }

  getMementosCopy() {
    return [...this.mementos];
  }
}
