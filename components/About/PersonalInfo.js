import React from "react";
import TextDisplayFieldGroup from "../Reusable/TextDisplayFieldGroup";

const PersonalInfo = () => {

  const getAge = () => {
    const dob = new Date("12/15/1996");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div>
      <div className="mt-4">
        <h3 className="fs-18 font-w600 mb-3">Personal info</h3>
        <div className="row mx-auto">
          <div className="col-md-6 px-0">
            <TextDisplayFieldGroup label="Full name" value="Mhd Rizki Purba" />
            <TextDisplayFieldGroup
              label="Date of birth"
              value="December 15th, 1996"
            />
            <TextDisplayFieldGroup label="Gender" value="Man" />
            <TextDisplayFieldGroup label="Nationality" value="Indonesia" />
          </div>
          <div className="col-md-6 px-0">
            <TextDisplayFieldGroup label="Nick name" value="Rizki" />
            <TextDisplayFieldGroup
              label="Age"
              value={`${getAge()} years old`}
            />
            <TextDisplayFieldGroup label="Religion" value="Islam" />
            <TextDisplayFieldGroup
              label="Live in"
              value="Badung, Bali, Indonesia."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
