import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsAllowedValueConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    const allowedValues = [0, 10, 12, 14, 16, 18];
    return allowedValues.includes(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `The value of '${args.property}' must be one of the following: 0, 10, 12, 14, 16 or 18.`;
  }
}

export function IsAllowedValue(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsAllowedValue',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsAllowedValueConstraint,
    });
  };
}
