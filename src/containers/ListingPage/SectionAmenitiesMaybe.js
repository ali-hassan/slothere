import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionAmenitiesMaybe.module.css';

const SectionAmenitiesMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.amenities ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <p className={css.amenities}>{publicData.amenities}</p>
    </div>
  ) : null;
};

SectionAmenitiesMaybe.defaultProps = { className: null, rootClassName: null };

SectionAmenitiesMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    amenities: string,
  }),
};

export default SectionAmenitiesMaybe;