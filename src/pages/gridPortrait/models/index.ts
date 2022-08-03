import { useState } from 'react';

const gridPortrait = () => {
  const [state, setState] = useState<object>({});

  return {
    state,
    setState,
  };
};

export default gridPortrait;
