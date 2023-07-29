import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
export declare class EmailEhUnicoValidator implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailEhUnico: (opcoesDeValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
