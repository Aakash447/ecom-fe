import ErrorMessage from "components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const InputField = (props) => {
  const {
    labelClassName,
    inputClassName,
    selectOptions,
    name,
    inputLabel,
    type,
    placeholder,
    maxLength = 50,
    register,
    errors,
    ...rest
  } = props;

  switch (type) {
    case "hidden":
      return (
        <input type={type} name={name} id={name} {...register} {...rest} />
      );

    case "select":
      return (
        <>
          <div className="relative">
            <select
              id={name}
              className={
                inputClassName
                  ? inputClassName
                  : "border font-medium block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              }
              r=" "
              {...register}
              {...rest}
              placeholde
            >
              {selectOptions?.map((item) => item)}
            </select>

            <label
              htmlFor={name}
              className={
                labelClassName
                  ? labelClassName
                  : "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-72 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-72 peer-focus:-translate-y-4 left-1 "
              }
            >
              {inputLabel}
            </label>
          </div>

          <ErrorMessage message={errors?.[name]?.message} />
        </>
      );

    case "number":
      return (
        <>
          <label
            htmlFor={name}
            className={
              labelClassName
                ? labelClassName
                : "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }
          >
            {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className={
              inputClassName
                ? inputClassName
                : "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            }
            placeholder={placeholder ? placeholder : " "}
            maxLength={maxLength ? maxLength : 40}
            {...register}
            {...rest}
          />

          <ErrorMessage message={errors?.[name]?.message} />
        </>
      );
    case "text":
    case "email":
      return (
        <>
          <label
            htmlFor={name}
            className={
              labelClassName
                ? labelClassName
                : "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }
          >
            {inputLabel}
          </label>
          <input
            type="text"
            name={name}
            id={name}
            className={
              inputClassName
                ? inputClassName
                : "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            }
            placeholder={placeholder ? placeholder : " "}
            maxLength={maxLength ? maxLength : 40}
            {...register}
            {...rest}
          />

          <ErrorMessage message={errors?.[name]?.message} />
        </>
      );

    case "password":
      return (
        <>
          <label
            htmlFor={name}
            className={
              labelClassName
                ? labelClassName
                : "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }
          >
            {inputLabel}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className={
              inputClassName
                ? inputClassName
                : "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            }
            placeholder={placeholder ? placeholder : " "}
            maxLength={maxLength ? maxLength : 40}
            {...register}
            {...rest}
          />

          <ErrorMessage message={errors?.[name]?.message} />
        </>
      );

    default:
      return <div>Please provide some input props</div>;
  }
};

export default InputField;

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  inputLabel: PropTypes.string.isRequired,
};
