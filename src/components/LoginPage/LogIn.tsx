import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import routes from '../../routes';
import { AuthContext } from '../context/AuthProvider';
import { logInArgs, initialFormValues } from '../../interfaces';
import Form from './Form';

export default function LogIn() {
  const { logIn } = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setIsAuthorised = ({ data }: { data: logInArgs }) => {
    logIn(data);
    navigate(routes.mainChatPage());
  };
  const formik = useFormik<initialFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, t('feedback.toLong') as string)
        .required(t('feedback.required') as string),
      password: Yup.string()
        .min(5, t('feedback.toShortPassword') as string)
        .required(t('feedback.required') as string),
    }),
    onSubmit: ({ username, password }) => {
      axios.post(routes.loginPath(), { username, password })
        .then(setIsAuthorised)
        .catch(({ response }) => {
          if (response.status === 401) formik.errors.username = response.statusText;
        });
    },
  });
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12  col-md-8 col-xxl-6">
          <Form
            username={formik.values.username}
            password={formik.values.password}
            logIn={formik.handleSubmit}
            changeValue={formik.handleChange}
            usernameError={formik.errors.username}
            passwordError={formik.errors.password}
          />
        </div>
      </div>
    </div>
  );
}
