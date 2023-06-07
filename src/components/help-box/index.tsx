import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Business Owner'];
  const roles = ['Business Owner', 'Recruiter', 'Hiring Manager', 'Admin', 'JobApplicant'];
  const applicationName = 'RecruiteePro v5';
  const tenantName = 'Business Organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Business Owner:
1. As a business owner, I want to be able to create and manage my organization's account on the talent acquisition platform so that I can oversee the hiring process.
2. As a business owner, I want to be able to assign roles (recruiter, hiring manager, admin) to members of my organization so that they can perform their respective tasks in the hiring process.
3. As a business owner, I want to have access to analytics and reports on the hiring process so that I can make informed decisions and improve our talent acquisition strategy.
4. As a business owner, I want to be able to set up custom workflows for different job positions so that the hiring process is tailored to our organization's needs.
5. As a business owner, I want to be able to integrate the platform with our existing HR systems so that we can streamline our hiring process.

Recruiter:
1. As a recruiter, I want to be able to create and manage job postings so that I can attract qualified candidates for open positions.
2. As a recruiter, I want to be able to review and filter resumes so that I can identify the most suitable candidates for the job.
3. As a recruiter, I want to be able to schedule interviews with candidates so that I can assess their fit for the role.
4. As a recruiter, I want to be able to collaborate with hiring managers and share candidate information so that we can make informed hiring decisions.
5. As a recruiter, I want to be able to track the progress of candidates throughout the hiring process so that I can ensure a smooth and efficient process.

Hiring Manager:
1. As a hiring manager, I want to be able to review candidate information provided by the recruiter so that I can make informed hiring decisions.
2. As a hiring manager, I want to be able to provide feedback on candidates after interviews so that the recruiter can make the best decision for the organization.
3. As a hiring manager, I want to be able to collaborate with the recruiter and other team members on the hiring process so that we can make the best decision for the organization.
4. As a hiring manager, I want to be able to track the progress of candidates throughout the hiring process so that I can ensure a smooth and efficient process.

Admin:
1. As an admin, I want to be able to manage user accounts and permissions within the organization so that the right people have access to the talent acquisition platform.
2. As an admin, I want to be able to configure the platform's settings and integrations so that it works seamlessly with our existing systems.
3. As an admin, I want to be able to manage the organization's billing and subscription information so that we can maintain our access to the platform.

Job Applicant:
1. As a job applicant, I want to be able to search and apply for job openings that match my skills and interests so that I can find the right opportunity.
2. As a job applicant, I want to be able to upload my resume and other relevant documents so that recruiters can review my qualifications.
3. As a job applicant, I want to be able to track the status of my application so that I can stay informed about the hiring process.
4. As a job applicant, I want to be able to communicate with recruiters and hiring managers so that I can ask questions and provide additional information about my application.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
