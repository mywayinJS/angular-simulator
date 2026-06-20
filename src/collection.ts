export class Collection<T> {
  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  getAll(): T[] {
    return this.items;
  }

  get(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }
  remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  replace(oldItem: T, newItem: T): void {
      const index = this.items.indexOf(oldItem);
      if (index !== -1) {
        this.items[index] = newItem;
      }
    }
}