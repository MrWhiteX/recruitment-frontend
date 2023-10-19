import dictionary from "dictionary/dictionary";
import Joi from "joi";

export const taskSchema = Joi.string()
  .trim()
  .min(1)
  .max(50)
  .pattern(/^[a-zA-Z0-9ćśźżąęłóĆŚŹŻĄĘŁÓ ]*$/)
  .messages({
    "string.empty": dictionary.validation.addTaskValidation.empty,
    "string.max": dictionary.validation.addTaskValidation.maxLength,
    "string.pattern.base": dictionary.validation.addTaskValidation.pattern,
  });
