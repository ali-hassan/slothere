import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput } from '../../components';

// Create this file using EditListingFeaturesForm.module.css
// as a template.
import css from './EditListingStudioRulesForm.module.css';

export const EditListingStudioRulesFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
      } = fieldRenderProps;

      const studoRulesPlaceholder = intl.formatMessage({
        id: 'EditListingStudioRulesForm.studioRulesPlaceholder',
      });

      const studoRulesLabel = intl.formatMessage({
        id: 'EditListingStudioRulesForm.studioRulesLabel',
      });

      const cancellationPolicyPlaceholder = intl.formatMessage({
        id: 'EditListingStudioRulesForm.cancellationPolicyPlaceholder',
      });

      const cancellationPolicyLabel = intl.formatMessage({
        id: 'EditListingStudioRulesForm.cancellationPolicyLabel',
      });

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingStudioRulesForm.updateFailed" />
        </p>
      ) : null;

      const studioRulesRequired = required(
        intl.formatMessage({
          id: 'EditListingStudioRulesForm.studioRulesRequired',
        })
      );

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}

          <FieldTextInput
            id="studio-rules"
            name="studioRules"
            className={css.studioRules}
            type="textarea"
            label={studoRulesLabel}
            placeholder={studoRulesPlaceholder}
            validate={composeValidators(studioRulesRequired)}
          />

          <FieldTextInput
            id="canellation-policy"
            name="cancellationPolicy"
            className={css.cancellationPolicy}
            type="textarea"
            label={cancellationPolicyLabel}
            placeholder={cancellationPolicyPlaceholder}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingStudioRulesFormComponent.defaultProps = {
  studioRules: null,
  updateError: null,
};

EditListingStudioRulesFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
};

export default compose(injectIntl)(EditListingStudioRulesFormComponent);