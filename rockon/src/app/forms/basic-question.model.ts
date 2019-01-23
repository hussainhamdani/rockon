import { BasicValidations } from './basic-validations.model';

export class BasicQuestion<T> {
    value: T;
    key: string;
    label?: string | null;
    controlType?: string;
    order?: number;
    validations?: BasicValidations;
   
    constructor(options: {
        value?: T,
        key?: string,
        label?: string | null,
        order?: number | null,
        controlType?: string,
        validations?: BasicValidations
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.validations = options.validations || null;
      this.controlType = options.controlType || '';
    }
  }