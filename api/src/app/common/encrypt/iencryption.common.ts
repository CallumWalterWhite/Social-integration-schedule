import { injectable } from 'inversify';

@injectable()
export abstract class IEncryptor {
    abstract encrypt(key: string): string;
}