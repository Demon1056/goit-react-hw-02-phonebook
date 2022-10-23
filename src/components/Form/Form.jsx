import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormStyles, FieldStyles } from './Form.styled';
export const ContactForm = ({ showName }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={showName}>
      <FormStyles>
        <label>
          Name
          <FieldStyles type="text" name="name" />
        </label>
        <label>
          Number
          <FieldStyles type="tel" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </FormStyles>
    </Formik>
  );
};
ContactForm.propTypes = {
  showName: PropTypes.func.isRequired,
};
