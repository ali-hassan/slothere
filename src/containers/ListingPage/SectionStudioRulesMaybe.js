import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.module.css';

const SectionStudioRulesMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.studioRules ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.studioRulesTitle" />
      </h2>
      <p className={css.rules}>{publicData.studioRules}</p>
    </div>
  ) : null;
};

SectionStudioRulesMaybe.defaultProps = { className: null, rootClassName: null };

SectionStudioRulesMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    studioRules: string,
  }),
};

export default SectionStudioRulesMaybe;