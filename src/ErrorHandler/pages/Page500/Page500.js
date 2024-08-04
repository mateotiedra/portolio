import React, { useContext } from 'react';
import ErrorHandlerContext from '../../ErrorHandlerContext';

import { Typography } from '@mui/material';

function Page500() {
  useContext(ErrorHandlerContext);
  return <Typography>Site a crashé</Typography>;
}

export default Page500;
