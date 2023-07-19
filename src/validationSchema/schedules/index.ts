import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  faculty_id: yup.string().nullable(),
  student_id: yup.string().nullable(),
});
