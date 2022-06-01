import React, { useState } from 'react';



function useValidator(Schema) {

    const [schema, setSchema] = useState(Schema);
    const [errors, setErrors] = useState()


    const validation = (data) => {
        const validation = schema.validate(data);
        if (validation.error) {
            const {details} = validation.error;
            const error = {
                key: details[0].context.key,
                message:details[0].message
            }
            setErrors(error);
        }
        return validation;
    }

    return {
        validation,
        errors,
        schema
    }

}

export default useValidator;