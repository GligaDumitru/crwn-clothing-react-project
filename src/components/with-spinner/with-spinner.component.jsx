import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...othersProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...othersProps} />
  );
};

export default WithSpinner;
