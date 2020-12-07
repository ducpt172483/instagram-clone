import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../Auth/userSlice";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      console.log("Form Submit: ", values);
      const action = register(values);

      const resultAction = await dispatch(action);

      const user = unwrapResult(resultAction);

        console.log(user);
      // close Dialog
      const {closeDialog} = props;

      if(closeDialog) {
        closeDialog();
      }

      console.log(user);

      enqueueSnackbar('Đăng ký thành công!!!', { variant: 'success'})
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {variant: 'error'});
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
