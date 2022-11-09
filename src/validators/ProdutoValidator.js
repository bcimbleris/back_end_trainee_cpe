const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            product_name: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            product_name: Joi.string().optional(),
            price: Joi.number().optional(),
            description: Joi.string().email().optional()
    })
    .min(1),
}),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
};