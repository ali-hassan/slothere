import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionCancellationPolicyMaybe.module.css';

const SectionCancellationPolicyMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.cancellationPolicy ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.cancellationPolicyTitle" />
      </h2>
      <p className={css.cancellationPolicy}>{publicData.cancellationPolicy}</p>
    </div>
  ) : null;
};

SectionCancellationPolicyMaybe.defaultProps = { className: null, rootClassName: null };

SectionCancellationPolicyMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    cancellationPolicy: string,
  }),
};

export default SectionCancellationPolicyMaybe;