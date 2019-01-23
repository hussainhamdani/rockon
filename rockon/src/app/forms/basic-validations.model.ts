export class BasicValidationData{
    value: number | string | boolean | RegExp;
    message: string;
}
export class BasicValidations {
        min?: BasicValidationData;
        max?: BasicValidationData;
        required?: BasicValidationData;
        requiredTrue?: BasicValidationData;
        email?: BasicValidationData;
        minLength?: BasicValidationData;
        maxLength?: BasicValidationData;
        pattern?: BasicValidationData;
        nullValidator?: BasicValidationData;
        // compose?: {
        //     value: any,
        //     message: string
        // };
        // composeAsync?: {
        //     value: any,
        //     message: string
        // }
   
    constructor(validations: {
        min?: BasicValidationData,
        max?: BasicValidationData,
        required?: BasicValidationData,
        requiredTrue?: BasicValidationData,
        email?: BasicValidationData,
        minLength?: BasicValidationData,
        maxLength?: BasicValidationData,
        pattern?: BasicValidationData,
        nullValidator?: BasicValidationData;
      } = {}) {
        this.min = validations.min;
        this.max = validations.max;
        this.required = validations.required;
        this.requiredTrue = validations.requiredTrue;
        this.email = validations.email;
        this.minLength = validations.minLength;
        this.maxLength = validations.maxLength;
        this.pattern = validations.pattern;
        this.nullValidator = validations.nullValidator;
    }
  }