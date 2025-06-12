"use client";
import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
const Input = ({
  type = "text",
  wrapperClass,
  className,
  inputClass,
  label,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder = "Enter here",
  icon,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,
  error,
  errorMessage,
  disabled = false,
  startDate = 1,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    } else {
      return type;
    }
  };

  const getInputIcon = () => {
    switch (type) {
      case "password":
        return showPassword
          ? "/assets/icons/eye-close.svg"
          : "/assets/icons/eye-open.svg";
      default:
        return icon;
    }
  };

  const disablePastDates = (current) => {
    // return current && current < dayjs().startOf("day");
    return current && current < dayjs().add(startDate, "day").startOf("day");
  };
  return (
    <>
      <div
        className={`flex flex-col gap-2  ${error ? "error" : ""} ${className}`}
      >
        {label && (
          <label className={`font-medium text-base text-black  ${labelClass}`}>
            {label}
          </label>
        )}
        {type == "date" ? (
          <DatePicker
            onChange={onChange}
            className={`date-picker ${inputClass}`}
            disabledDate={disablePastDates}
            popupClassName="date-picker-popup"
            style={inputStyle}
            format="DD/MM/YYYY" // Set format to dd/mm/yyyy
          />
        ) : (
          <div
            className={`input-wrapper relative outline-none h-12  ${wrapperClass} ${
              disabled && ""
            }`}
            style={inputStyle}
          >
            <input
              autoComplete="off"
              type={getInputType()}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              className={`size-full focus-visible:outline-0   px-2 ${inputClass} placeholder-white placeholder:text-[12px] `}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
            />

            {icon && (
              <img
                src={getInputIcon()}
                alt="icon"
                className="cursor-pointer absolute right-2.5  w-5   top-1/2 -translate-y-1/2"
                onClick={togglePassword}
              />
            )}
          </div>
        )}
        {errorMessage && (
          <p className="extra-small text-xs font-medium text-red-600   ">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;

// import React from "react";
// import PropTypes from "prop-types";

// const Input = ({
//   type = "text",
//   wrapperClass = "",
//   className = "",
//   inputClass = "",
//   label,
//   labelClass = "",
//   onChange,
//   name,
//   id,
//   value,
//   placeholder = "",
//   icon,
//   maxWidth,
//   maxHeight,
//   minHeight,
//   minWidth,
//   height,
//   width,
//   maxLength,
//   error = false,
//   errorMessage = "",
//   disabled = false,
//   startDate,
// }) => {
//   return (
//     <div className={`w-full ${wrapperClass}`}>
//       {label && (
//         <label htmlFor={id} className={`block mb-1 ${labelClass}`}>
//           {label}
//         </label>
//       )}
//       <div className="relative flex items-center">
//         {icon && <span className="absolute left-3">{icon}</span>}
//         <input
//           type={type}
//           name={name}
//           id={id}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           disabled={disabled}
//           maxLength={maxLength}
//           style={{
//             maxWidth,
//             maxHeight,
//             minHeight,
//             minWidth,
//             height,
//             width,
//             paddingLeft: icon ? "2.5rem" : undefined,
//           }}
//           className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
//             error ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
//           } ${className} ${inputClass}`}
//         />
//       </div>
//       {error && errorMessage && (
//         <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
//       )}
//     </div>
//   );
// };

// Input.propTypes = {
//   type: PropTypes.string,
//   wrapperClass: PropTypes.string,
//   className: PropTypes.string,
//   inputClass: PropTypes.string,
//   label: PropTypes.string,
//   labelClass: PropTypes.string,
//   onChange: PropTypes.func,
//   name: PropTypes.string,
//   id: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   placeholder: PropTypes.string,
//   icon: PropTypes.node,
//   maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   maxLength: PropTypes.number,
//   error: PropTypes.bool,
//   errorMessage: PropTypes.string,
//   disabled: PropTypes.bool,
//   startDate: PropTypes.oneOfType([
//     PropTypes.instanceOf(Date),
//     PropTypes.string,
//   ]),
// };

// export default Input;
