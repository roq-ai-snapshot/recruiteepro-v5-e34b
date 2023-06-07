import * as yup from 'yup';
import { interviewValidationSchema } from 'validationSchema/interviews';

export const jobApplicationValidationSchema = yup.object().shape({
  resume: yup.string().required(),
  status: yup.string().required(),
  job_posting_id: yup.string().nullable().required(),
  applicant_id: yup.string().nullable().required(),
  interview: yup.array().of(interviewValidationSchema),
});
