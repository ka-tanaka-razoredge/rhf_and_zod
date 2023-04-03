import * as React from 'react';
import './style.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import schema, { Schema } from './schema';

import Tmpl from './tmpl';

type Props = {
  template: Function;
};

const Alpha: React.FC<Props> = ({ template }) => {
  const { handleSubmit, register } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const doIt = (data) => {
    console.log('---- doIt begin ----');
    console.log('---- doIt end ----');
  };
  const doItEx = (data, e) => {
    console.log('---- doItEx begin ----');
    console.log(data);
    console.log('---- doItEx end ----');
    throw new Error(data);
  };

  return template({
    doIt,
    handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
      const memento = handleSubmit(doIt, doItEx)();
      if (e) {
        e.preventDefault();
      }
    },
    register,
    handleSubmitEx: async () => {
      try {
        await handleSubmit(doIt, doItEx)();
      } catch (e) {
        alert(e);
      }
    },
  });
};

export default (props) => <Alpha template={Tmpl} {...props} />;
