import Joi from 'joi';


/**
 * Validación creación de usuario
 */
const createUser = Joi.object({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    company:Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com','co', 'net'] } })

});

export default {
    createUser
}