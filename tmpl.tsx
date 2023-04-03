import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  doIt: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | void;
  //  handleSubmit: (event: React.FormEventHandler<HTMLInputElement>) => void;
  register: Function;
};

const Tmpl: React.FC<Props> = ({ doIt, handleSubmit, register }) => {
  console.log('');
  //  const { handleSubmit } = useFormContext();
  const show = () => {
    console.log('---- show begin ----');
    console.log('---- show end ----');
  };

  return (
    <div>
      <form onSubmit={handleSubmit ? handleSubmit : show}>
        <input type="text" {...register('first')} />
        <input type="submit" />
      </form>
      <div style={{ border: '1px solid black' }}>trigger</div>
    </div>
  );
};

export default Tmpl;
