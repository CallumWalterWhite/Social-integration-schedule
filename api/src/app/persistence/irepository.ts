import { injectable } from 'inversify';

@injectable()
export abstract class IRepository<T> {
    abstract get(): T;
    abstract getAll(): T[];
}