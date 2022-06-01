import Joi from 'joi';


/**
 * Validación de hoteles y asignaciones de cuartos
 */
const createHotel = Joi.object({
    nit: Joi.string().required(),
    name: Joi.string().required(),
    street: Joi.string().required(),
    rooms: Joi.number().integer().required(),
    city: Joi.string().required()

});

const assignRoom = Joi.object({
    typeRoom: Joi.number().integer().required(),
    combination: Joi.number().integer().required(),
    rooms: Joi.number().integer().required(),


});

export default {
    createHotel,
    assignRoom
}