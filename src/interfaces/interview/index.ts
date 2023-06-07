import { JobApplicationInterface } from 'interfaces/job-application';
import { UserInterface } from 'interfaces/user';

export interface InterviewInterface {
  id?: string;
  job_application_id: string;
  interviewer_id: string;
  date_time: Date;
  feedback?: string;

  job_application?: JobApplicationInterface;
  user?: UserInterface;
  _count?: {};
}
