import { JourneyEntry } from '../models/journey-entry';
import { JourneyType } from '../enums/journey-type';

export const JOURNEY_ENTRIES: JourneyEntry[] = [
  {
    id: 'apprenticeship',
    title: 'EFZ Applikationsentwickler (Apprenticeship)',
    organisation: 'Company / School (CH)',
    location: 'Switzerland',
    from: '2017',
    to: '2021',
    type: JourneyType.Apprenticeship,
    summary: '4-year Swiss EFZ apprenticeship focused on software development fundamentals.',
    highlights: [
      'Solid base in C#, web technologies and databases.',
      'Learned how real-world teams ship software, not just theory.',
      'First exposure to maintaining production systems.',
    ],
  },
  {
    id: 'first-job',
    title: 'Junior Developer',
    organisation: 'Web / Software Company',
    location: 'Switzerland',
    from: '2021',
    to: '2022',
    type: JourneyType.Job,
    summary: 'First full-time dev role working on production applications.',
    highlights: [
      'Built and maintained .NET and web features.',
      'Handled bugfixing and customer requests under real pressure.',
      'Started touching larger codebases and legacy systems.',
    ],
  },
  {
    id: 'military',
    title: 'Mandatory Military Service',
    organisation: 'Swiss Armed Forces',
    location: 'Switzerland',
    from: '2022',
    to: '2023',
    type: JourneyType.Military,
    summary:
      'One year of mandatory service, pausing professional development but building discipline.',
    highlights: [
      'Learned resilience, teamwork and responsibility.',
      'Long break from day-to-day coding – important context in my journey.',
    ],
  },
  {
    id: 'current',
    title: '.NET & Angular Developer',
    organisation: 'WebGate Consulting AG',
    location: 'Switzerland',
    from: '2024',
    to: 'Present',
    type: JourneyType.Current,
    summary: 'Working on Angular 19+ apps with Azure Functions (.NET 8 isolated).',
    highlights: [
      'Maintaining and extending large Angular applications.',
      'Improving backend workflows with Azure Functions and C#.',
      'Focusing on modern patterns, performance and clean architecture.',
    ],
  },
];
