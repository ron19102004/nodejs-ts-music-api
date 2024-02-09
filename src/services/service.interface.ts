interface IServiceRead<Entity> {
  getAll(): Promise<Entity[]>;
  getById(id: number): Promise<Entity | null>;
}

interface IServiceWrite<Entity> {
  create(data: Entity): Promise<Entity>;
  update(id: number, data: Entity): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
export { IServiceRead, IServiceWrite };
