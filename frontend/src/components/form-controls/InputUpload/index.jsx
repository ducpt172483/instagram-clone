import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputUpload.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputUpload(props) {
  const { form, name, label, disabled, onChange } = props;
  const { errors } = form;
  const hasError = errors[name];

  const handleUploadFile = (e) => {
    if (onChange) {
      onChange(e.target.files[0]);
    }
  };
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      margin="normal"
      variant="outlined"
      fullWidth
      label={label}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
      type="file"
      onChange={(e) => handleUploadFile(e)}
    />
  );
}

export default InputUpload;
