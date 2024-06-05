import React from 'react';
import BaseLayout from '../Base/index.js';

export const withBaseLayout = (WrappedComponent) => {
  const WithBaseLayout= (props) => (
    <BaseLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <WrappedComponent {...props} />
    </BaseLayout>
  );

  return WithBaseLayout;
};

export default withBaseLayout;