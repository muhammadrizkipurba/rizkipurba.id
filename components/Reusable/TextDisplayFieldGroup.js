import React from "react";

const TextDisplayFieldGroup = ({
  value,
  label
}) => {
  return (
    <div className="mb-2">
      <p className="fs-14 text-gray mb-0">{label}</p>
      <div className="">
        <p className='mb-0 fs-14'>{value}</p>
      </div>
    </div>
  );
};

export default TextDisplayFieldGroup;
