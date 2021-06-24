import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';


const SectionCategoryMaybe = props => {
  const { category } = props;
  return category ? (
    <div className={css.sectionCategory}>
      <h2 className={css.categoryTitle}>
        <FormattedMessage id="ListingPage.categoryTitle" />
      </h2>
      <p className={css.category}>
        {category}
      </p>
    </div>
  ) : null;
};

export default SectionCategoryMaybe;
