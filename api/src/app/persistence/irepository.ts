import { injectable } from 'inversify';

@injectable()
export abstract class IRepository<T> {
    abstract get(args: any[]): Promise<T>;
}