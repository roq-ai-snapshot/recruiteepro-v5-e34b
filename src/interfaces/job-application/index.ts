import { InterviewInterface } from 'interfaces/interview';
import { JobPostingInterface } from 'interfaces/job-posting';
import { UserInterface } from 'interfaces/user';

export interface JobApplicationInterface {
  id?: string;
  job_posting_id: string;
  applicant_id: string;
  resume: string;
  status: string;
  interview?: InterviewInterface[];
  job_posting?: JobPostingInterface;
  user?: UserInterface;
  _count?: {
    interview?: number;
  };
}
