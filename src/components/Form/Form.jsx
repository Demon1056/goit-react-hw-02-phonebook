import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormStyles, FieldStyles } from './Form.styled';
export const ContactForm = ({ showName }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={showName}>
      <FormStyles>
        <label>
          Name
          <FieldStyles
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <FieldStyles
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyles>
    </Formik>
  );
};
ContactForm.propTypes = {
  showName: PropTypes.func.isRequired,
};
