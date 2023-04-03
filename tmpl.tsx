import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  doIt: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | void;
  //  handleSubmit: (event: React.FormEventHandler<HTMLInputElement>) => void;
  register: Function;
  handleSubmitEx: Function;
};

const Tmpl: React.FC<Props> = ({
  doIt,
  handleSubmit,
  register,
  handleSubmitEx,
}) => {
  const particularForm = React.useRef<HTMLFormElement>();
  const showException = () => {
    console.log('---- new Exception() ----');
  };

  return (
    <div>
      <form
        ref={particularForm}
        onSubmit={handleSubmit ? handleSubmit : showException}
      >
        <input type="text" {...register('first')} />
        <input type="submit" />
      </form>
      <div
        style={{ border: '1px solid black' }}
        onClick={(e) => {
          handleSubmitEx();
        }}
      >
        trigger
      </div>
    </div>
  );
};

export default Tmpl;
