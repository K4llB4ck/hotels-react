import Joi from 'joi';

class Validator {

    constructor(data = {}) {
        this.data = data;
    }

    setData(data) {
        this.data = data;
    }

    validate(schema = null) {
        if (schema) throw new Error('No ha proporcionado un Schema');
        const { error, value } = schema.validation(this.data);
        console.log(error, value);

    }


}

export default new Validator();