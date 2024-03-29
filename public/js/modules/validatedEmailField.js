// noinspection JSValidateTypes

import ValidatedInputField from './validatedInputField.js';

export default class ValidatedEmailField extends ValidatedInputField {
  validate() {
    return String(this.input.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  }

  evaluateField() {
    return this.validate() ? this.unsetErrorState() : this.setErrorState();
  }
}
