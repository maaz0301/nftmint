"use-client";
import React from "react";
import loader from "../../../public/assets/icons/loading.svg";
import Image from "next/image";

const Button = ({
  text,
  img,
  className,
  onClick,
  minHeight,
  maxHeight,
  minWidth,
  height,
  width,
  disabled,
  imgClass,
  loading = false,
  maxWidth,
  padding,
  imgWidth,
  imgHeight,
}) => {
  const buttonStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth: maxWidth,
    height: height,
    width: width,
    padding: padding,
    disabled: loading,
  };
  
  if (loading) {
    disabled = true;
  }
  
  return (
    <button
      className={`min-w-24 cursor-pointer text-base font-medium transition-all duration-200 capitalize ease-in-out hover:scale-105 ${
        loading && "!cursor-not-allowed"
      } ${className}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <>
          <span className="flex justify-center items-center gap-2">
            {text}
            <Image
              src={loader}
              alt="loading"
              className={`size-5 animate-spin ${imgClass}`}
            />
          </span>
        </>
      ) : (
        <>
         {img && (
            <Image 
              src={img} 
              alt="img" 
              className={`size-5 ${imgClass}`}
              width={imgWidth} // Dynamically set width
              height={imgHeight} // Dynamically set height
            />
          )}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default Button;