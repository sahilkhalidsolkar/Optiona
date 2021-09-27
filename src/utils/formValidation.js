import Joi from 'joi'
const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    designation: Joi.number().required().greater(0).less(11),
    language:Joi.string().required()
   
})
export default schema