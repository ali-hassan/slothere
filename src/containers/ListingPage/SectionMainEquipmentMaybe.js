import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionMainEquipmentMaybe.module.css';

const SectionMainEquipmentMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.main_equipment ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.mainEquipment" />
      </h2>
      <p className={css.mainEquipment}>{publicData.main_equipment}</p>

    </div>
  ) : null;
};

SectionMainEquipmentMaybe.defaultProps = { className: null, rootClassName: null };

SectionMainEquipmentMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    main_equipment: string,
  }),
};

export default SectionMainEquipmentMaybe;