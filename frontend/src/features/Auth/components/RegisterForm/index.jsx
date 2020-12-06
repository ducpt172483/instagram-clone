import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "Title is too short"),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };
  return (
    <div>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h3" variant="h5">
        Đăng ký tài khoản
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Mật khẩu" form={form} />
        <InputField name="retypePassword" label="Nhập lại mật khẩu" form={form} />
      </form>
    </div>
  );
}

export default RegisterForm;
