const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            favorito_id: Joi.string().required(),
        }),
    }),
};