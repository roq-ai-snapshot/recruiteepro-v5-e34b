import { JobPostingInterface } from 'interfaces/job-posting';
import { WorkflowInterface } from 'interfaces/workflow';
import { UserInterface } from 'interfaces/user';

export interface BusinessOrganizationInterface {
  id?: string;
  name: string;
  user_id: string;
  job_posting?: JobPostingInterface[];
  workflow?: WorkflowInterface[];
  user?: UserInterface;
  _count?: {
    job_posting?: number;
    workflow?: number;
  };
}
