import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Auth/userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      console.log("Form Submit: ", values);
      const action = login(values);

      const resultAction = await dispatch(action);

      const user = unwrapResult(resultAction);

      console.log(user);
      // close Dialog
      const { closeDialog } = props;

      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log("Failed to login", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
