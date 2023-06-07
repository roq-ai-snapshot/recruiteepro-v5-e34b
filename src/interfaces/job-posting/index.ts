import { JobApplicationInterface } from 'interfaces/job-application';
import { BusinessOrganizationInterface } from 'interfaces/business-organization';
import { UserInterface } from 'interfaces/user';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  business_organization_id: string;
  recruiter_id: string;
  job_application?: JobApplicationInterface[];
  business_organization?: BusinessOrganizationInterface;
  user?: UserInterface;
  _count?: {
    job_application?: number;
  };
}
