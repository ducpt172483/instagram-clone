import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import InputUpload from "../../../../components/form-controls/InputUpload";

PostForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    position: "relative",
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },

  body: {
    // margin: theme.spacing(2, 0, 3, 0),
    // textAlign: "center",
  },

  photo: {
    // margin: theme.spacing(3, 0, 2, 0),
  },
  
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

function PostForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({});

  const form = useForm({
    defaultValues: {
      title: "",
      body: "",
      photo: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }

    form.reset();
  };

  const handleUploadFile = (values) => {
    console.log(values);
  }
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <CloudUploadIcon />
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Đăng Post của bạn
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="title" form={form} />
        <InputField name="body" label="body" form={form} />
        <InputUpload name="photo" label="photo" form={form} onChange={handleUploadFile} />

        <Button
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          Đăng
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
