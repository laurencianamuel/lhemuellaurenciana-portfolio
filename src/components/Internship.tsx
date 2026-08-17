import { useState, useEffect, useRef } from 'react';
import {
  Building,
  MapPin,
  Calendar,
  UserCheck,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Grid3x3,
} from 'lucide-react';

type OjtPhoto = {
  id: string;
  src: string[];
  description: string;
};

type OjtWeek = {
  week: number;
  photos: OjtPhoto[];
};

const tasks = [
  'Assist in troubleshooting hardware, software, and network-related issues.',
  'Provide technical support to staff via helpdesk systems, email, or in-person.',
  'Install and configure computer systems, software, and applications.',
  'Assist in maintaining the IT inventory and ensure accurate documentation.',
  'Support network maintenance tasks, including backups and system updates.',
  'Monitor and report on system performance and security issues.',
  'Assist with onboarding and training of new employees on IT systems.',
  'Document and communicate IT procedures and solutions for common issues.',
];

// Add image files to the public folder, for example public/ojt/ojt-photo-1.jpg,
// then reference them using public paths like /ojt/ojt-photo-1.jpg.
const ojtWeeks: OjtWeek[] = [
  {
    week: 1,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/ojt1.jpg'],
        description: 'On my first day as an intern, we were oriented by our supervisor Mr. Renan Mark Bruzola on how to refresh the IAMS Server connection, which is used to maintain proper communication between the system and its database. After the orientation, our senior instructed us to check the serial number of a specific employee\'s laptop. This was part of the initial documentation and inventory tasks to help us familiarize ourselves with the equipment used in the office.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/ojt2.jpg'],
        description: 'We were assigned to visit different departments and conduct short interviews with employees. Our task was to gather important information such as laptop specifications, serial numbers, and any existing technical issues with their units. This helped us practice communication and documentation skills while also gaining a better understanding of the current IT resources being used across the company.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/ojt3.jpg'],
        description: 'I was tasked to reset and reformat several employee laptops, I assisted in troubleshooting Wi-Fi problems by collecting the MAC addresses of employee phones that were unable to connect to the Intellismart network.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/ojt4.jpg'],
        description: 'I worked on resetting a laptop that was previously assigned to a resigned employee. This process was done to prepare the device for reassignment or future use. It involved clearing user restoring default settings.',
      },
    ],
  },
  {
    week: 2,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/ojt5.jpg' , 'OJT/ojt6.jpg'],
        description: 'I performed a refresh of the IAMS Server connection to ensure stable system communication. I was also assigned to remove the SSD from an employee’s laptop in order to place it in an external enclosure. This was done to create a backup of important files before any further maintenance.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/ojt7.jpg' , 'OJT/ojt8.jpg'],
        description: 'I installed PlanSwift software on the laptop of a newly onboarded OJT intern. This task helped ensure that the intern had access to the necessary tools for productivity and task completion.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/ojt9.jpg' , 'OJT/ojt10.jpg'],
        description: 'Together with my co-intern, we were assigned to set up a biometric device for employee log monitoring in the Intellismart warehouse.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/ojt11.jpg' ],
        description: 'I replace the Wi-Fi card of an employee’s laptop due to persistent connectivity issues. After installing the new card, we tested the device to confirm that it could successfully connect to the Intellismart network',
      },
    ],
  },
  {
    week: 3,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week3-1.jpg' , 'OJT/week3-2.jpg' , 'OJT/week3-3.jpg'],
        description: 'I was assigned to reset an employee’s laptop and backed up the important files to the IT Department’s Seagate drive. After completing this task, my senior instructed me to reset another laptop. I then installed all the necessary applications.',
      },
    
    ],
  },
  {
    week: 4,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week4-1.jpg' , 'OJT/week4-2.jpg' , 'OJT/week4-3.jpg' , 'OJT/week4-4.jpg'],
        description: 'I was tasked to reformat an employee’s laptop to restore its performance and prepare it for continued use. After the reformatting process, I replaced the laptop’s internal drive to ensure it functioned properly.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week4-5.jpg' , 'OJT/week4-6.jpg' ],
        description: 'I whitelisted an employee in Sophos to allow access to restricted work-related websites. I was also assigned to transfer a hard drive to another laptop, enabling the employee to continue using',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week4-7.jpg' , 'OJT/week4-8.jpg' ],
        description: 'I obtained the MAC address of an employee’s laptop to register the device and connect it to the Intellismart Wi-Fi network. I also cleared the browser cache to resolve access issues with the IAMS system.',
      },
    {
        id: 'ojt-photo',
        src: ['OJT/week4-9.jpg' , 'OJT/week4-10.jpg' , 'OJT/week4-11.jpg'],
        description: 'Our supervisor, assigned me to assist with a PDF file issue encountered by an employee. I also cleared the browser cache of another employee’s laptop to resolve problems accessing both the IAMS and IONS systems. Additionally, an employee requested access to a specific folder within the shared drive, which I helped configure. Lastly, I backed up important files from an employee’s laptop to the IT Department’s Seagate drive for safekeeping',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week4-12.jpg' , 'OJT/week4-13.jpg' ],
        description: 'I backed up employee files to the IT Department’s Seagate drive using a LAN cable for a stable file transfer, as the external drive could not power on properly due to a power issue. To complete the backup, I temporarily changed the MAC address of the employee’s laptop to establish a network connection through the LAN instead of wireless.',
      },
    ],
  },

   {
    week: 5,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week5-1.jpg' , 'OJT/week5-2.jpg' , 'OJT/week5-3.jpg' , 'OJT/week5-4.jpg'],
        description: 'I installed the PlanSwift software on an employee’s laptop. I also whitelisted the employee in Sophos to grant access to certain restricted websites needed for their tasks. In addition, I performed a Windows operating system upgrade. Lastly, I opened the laptop and removed its SSD to create a backup of important files.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week5-5.jpg' , 'OJT/week5-6.jpg' , 'OJT/week5-7.jpg'],
        description: 'I installed Microsoft Office on an employee’s laptop to enable them to perform their work tasks efficiently. I also collected the MAC address of the employee’s device to configure and allow connection to the company’s Wi-Fi network. Additionally, I added the employee’s laptop to the company domain to integrate it into the organization’s network and provide access to shared resources',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week5-8.jpg' , 'OJT/week5-9.jpg'],
        description: 'I set up a new laptop for a newly hired employee, ensuring that it was fully configured and ready for use. This included connecting the device to the Intellismart Wi-Fi network and installing the necessary applications required for the employee’s work',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week5-10.jpg' , 'OJT/week5-11.jpg'],
        description: 'I connected a printer to an employee’s laptop. Together with my co-intern Paolo, we sorted the CCTV units, separating the defective ones from those that were working properly for return processing. We also replaced the malfunctioning CCTV units with functioning ones to restore full surveillance coverage',
      },
    ],
  },
  {
    week: 6,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week6-1.jpg' , 'OJT/week6-2.jpg' ],
        description: 'I checked an employee’s laptop to identify and troubleshoot the cause of their internet connectivity issue. Additionally, together with my co-intern, I adjusted the CCTV viewing at the Intellismart fire exit to ensure proper monitoring and coverage.',
      },
      
    ],
  },

    {
    week: 7,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week7-1.jpg' , 'OJT/week7-2.jpg' , 'OJT/week7-3.jpg' , 'OJT/week7-4.jpg' ],
        description: 'I set up the biometric device in the Intellismart warehouse to enable employee log monitoring. I also connected an employee’s laptop to the printer and whitelisted the connection in Sophos to allow access to the required network resources. In addition, I backed up the employee’s files to the IT Department’s storage for safekeeping.',
      },
        {
        id: 'ojt-photo',
        src: [ 'OJT/week7-7.jpg' , 'OJT/week7-6.jpg' ,'OJT/week7-5.jpg' ],
        description: 'I installed the PlanSwift software on an employee’s. Together with my co-intern Paolo, we collected the serial numbers of printers for disposal as instructed by our senior, Mr. JR. We also checked the spare laptops to determine whether they were still functional or should be marked for disposal.',
      },
    ],
  },
  {
    week: 8,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week8-1.jpg' , 'OJT/week8-2.jpg' ],
        description: 'assisted an employee who was experiencing issues with sending emails through Outlook. In addition, I checked a flash drive to ensure it was working properly and transferred all the files to another functional drive. This process cleared the flash drive so it could be provided for the employee’s use.',
      },
        {
        id: 'ojt-photo',
        src: [ 'OJT/week8-3.jpg'  ],
        description: 'assisted an employee in resolving a connection issue with their printer and connected it using the ip of the printer and mac address. And helped another employee address a problem with editing a PDF file in Adobe, allowing them to continue their task without interruption',
      },
    ],
  },

  {
    week: 9,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week9-1.jpg' , 'OJT/week9-2.jpg' , 'OJT/week9-3.jpg' ],
        description: 'I set up a new laptop for employees and installed all the necessary applications required for their work tasks. I also backed up the files of an employee. In addition, me and co-intern, cleaned a printer that was experiencing leakage to restore its proper functionality.',
      },
      
    ],
  },

    {
    week: 10,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week10-1.jpg' , 'OJT/week10-2.jpg' , 'OJT/week10-3.jpg' ],
        description: 'Together with my co-intern, we set up a biometric device in the Intellismart warehouse to support employee log monitoring. I also performed a backup of important employee files. I cleaned the printer to address a leakage issue and restore proper functionality.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week10-4.jpg' , 'OJT/week10-5.jpg'  ],
        description: 'I performed a backup of important employee files to ensure data security. In addition, as instructed by my senior, Mr. Sales. I collected the serial numbers of monitors that were scheduled for disposal.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week10-6.jpg'  ],
        description: 'I activated Microsoft Office on a new laptop using PowerShell to ensure the employee could use the application for their work tasks',
      },
    ],
  },
{
    week: 11,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week11-1.jpg' , 'OJT/week11-2.jpg'],
        description: 'I connected a printer to an employee’s laptop to enable printing access. Additionally, I performed a backup of important employee files.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week11-3.jpg' , 'OJT/week11-4.jpg'  ],
        description: 'Together with my co-intern, we collected the laptop specifications of an employee for the masterlist and I installed Adobe Acrobat needed of employee.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week11-5.jpg' , 'OJT/week11-6.jpg'  ],
        description: 'I performed a disk partition on an employee’s laptop and resolved an issue where an OJT was unable to open Microsoft Excel.',
      },
    ],
  },

  {
    week: 13,
    photos: [
      {
        id: 'ojt-photo',
        src: ['OJT/week13-1.jpg' , 'OJT/week13-2.jpg' , 'OJT/week13-3.jpg'],
        description: 'Assisted an employee in connecting their laptop to the printer. The employee was experiencing issues with the printer not being detected, so we checked the printer settings and reconfigured the connection. After troubleshooting, the laptop successfully connected, allowing the employee to print documents without any further problems.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week13-4.jpg' , 'OJT/week13-5.jpg'  ],
        description: 'Troubleshooted a laptop that was intended to be used as a spare. We performed several diagnostic steps to identify the issue and attempted to restore its functionality, but the laptop remained unresponsive. Despite this, the process provided valuable hands-on experience in hardware diagnostics and repair. Additionally, I performed a backup of important employee files to ensure data was safely stored before further maintenance.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week13-6.jpg'  ],
        description: 'I refreshed the IAMS Server connection of Intellismart to ensure a stable access to the system.',
      },
    ],
  },

   {
    week: 14,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week14-3.jpg' ,   'OJT/week14-2.jpg' , 'OJT/week14-1.jpg' ],
        description: 'I performed a reset and reformat of employee laptop to ensure they were running efficiently. Afterward, we whitelisted the employees’ connections in Sophos to allow secure access to the company’s Wi-Fi network. I also installed all the required applications needed for their daily work tasks to make sure each device was fully functional and ready for use.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week14-4.jpg' , 'OJT/week14-5.jpg' , 'OJT/week14-6.jpg'  ],
        description: 'On this day, I activated Microsoft Office and set up Outlook on a new laptop assigned to an employee. We also performed a complete backup of important files to prevent data loss. These tasks were done to prepare the laptop for smooth and secure use in daily company operations.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week14-7.jpg' , 'OJT/week14-8.jpg' , 'OJT/week14-9.jpg'  ],
        description: 'I connected an employee’s laptop to the Intellismart Wi-Fi network to ensure stable internet access. We also assisted in setting up the biometric device used for employee log monitoring in the Intellismart warehouse. Later, my co-intern and I conducted router testing to confirm the network’s stability and consistent connectivity across the work area.',
      },
    ],
  },

   {
    week: 15,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week15-1.jpg' ,   'OJT/week15-2.jpg' , 'OJT/week15-3.jpg' ],
        description: 'I assisted in connecting the intern’s laptop to the office printer to ensure it could print properly. I also installed Viber on the intern’s laptop, which uses a Linux operating system.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week15-4.jpg' , 'OJT/week15-5.jpg' , 'OJT/week15-6.jpg'  ],
        description: 'I connected an employee’s laptop to the printer and tested its functionality. I also performed a backup of important employee files and reformatted the laptop as instructed by our senior, Sir Charles.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week15-7.jpg' , 'OJT/week15-8.jpg'  ],
        description: 'My co-intern and I crimped and tested a LAN cable intended for the CCTV connection to ensure a stable and reliable network for monitoring purposes',
      },
    ],
  },

  {
    week: 16,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week16-1.jpg' ,   'OJT/week16-2.jpg' ],
        description: 'We checked the existing LAN cable connected to the CCTV and added a new one to make sure the cameras had a stable and reliable connection. This task was done to improve the network link for better CCTV performance and monitoring.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week16-3.jpg' , 'OJT/week16-4.jpg'  ],
        description: 'I assisted our senior in checking and testing the CCTV that was not working. We inspected the cables and connections to identify the issue and ensure the system could function properly again.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week16-5.jpg' , 'OJT/week16-6.jpg'  ],
        description: 'I performed a full backup of the employee’s important files to prepare for the laptop upgrade. After securing the files, we transferred them to a new laptop to make sure no data was lost during the upgrade process.',
      },
    ],
  },

  {
    week: 17,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week17-1.jpg' ,   'OJT/week17-2.jpg' ,  'OJT/week17-3.jpg' ],
        description: 'I set up Microsoft Outlook on an employee’s laptop, reformatted the system to improve performance, and installed all necessary applications needed for work tasks.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week17-4.jpg' , 'OJT/week17-5.jpg' , 'OJT/week17-6.jpg'  ],
        description: 'I backed up employee files to the IT Dept storage, installed a wireless driver to restore connectivity, and connected the laptop to the Intellismart Wi-Fi. I also added the device to Sophos to allow secure network access.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week17-7.jpg' , 'OJT/week17-8.jpg' , 'OJT/week17-9.jpg'  ],
        description: 'We tested the SSD of a new laptop that couldn’t be detected and replaced it with a working SSD. Afterward, I connected the laptop to the Intellismart Wi-Fi and added it to Sophos for proper network access',
      },
    ],
  },

  {
    week: 18,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week18-1.jpg' ,   'OJT/week18-2.jpg' , 'OJT/week18-3.jpg' ],
        description: 'I performed a backup of employee files to the IT Department’s storage to ensure important data was safely kept and properly organized. I also connected a laptop to the internet, configured its settings, and verified that it could access the company’s network without issues.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week18-4.jpg' , 'OJT/week18-5.jpg' , 'OJT/week18-6.jpg' ],
        description: 'I troubleshooted a laptop that couldn’t install applications and successfully resolved the issue. I also assisted our senior, Sir Charles, in diagnosing and fixing problems with the biometric device, helping ensure that it functioned properly for employee attendance use.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week18-7.jpg' , 'OJT/week18-8.jpg' , 'OJT/week18-9.jpg'  ],
        description: 'I backed up laptop of employee files to the IT Department’s Seagate drive as part of maintaining secure data storage. Additionally, I fixed a laptop that was unable to connect to Wi-Fi by checking its network configuration and ensuring a stable connection was restored.',
      },
    ],
  },
{
    week: 19,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week19-1.jpg' ,   'OJT/week19-2.jpg' ],
        description: 'During this day, I helped connect and troubleshoot a laptop that couldn’t connect to the printer. I also checked another laptop that was not powering on and tested different steps to identify the problem',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week19-3.jpg' , 'OJT/week19-4.jpg'  ],
        description: 'Resolved a printer problem caused by a ballpen stuck inside the printer, which stopped it from printing. After that, I assisted in installing Microsoft Office for ITI Cebu through remote support using AnyDesk together with my co-intern.',
      },
    ],
  },
{
    week: 20,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week20-1.jpg' ,   'OJT/week20-2.jpg' , 'OJT/week20-3.jpg' ],
        description: 'On this day, I prepared a spare laptop for an employee by setting it up and ensuring it was ready for use. I also assisted in configuring the biometric device in the Intellismart warehouse to help with employee log monitoring. I installed Google Earth Pro on an employee’s laptop so they could properly open and view a KMZ file needed for their work.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week20-4.jpg' , 'OJT/week20-5.jpg' , 'OJT/week20-6.jpg'  ],
        description: 'We worked on a laptop that had a corrupted SSD, replacing it with a new one and reinstalling Windows 10 using a bootable USB created through Rufus. I also performed a backup of the employee’s important files to ensure they were safely transferred. Lastly, I assisted our senior, Sir Charles Evangelista, in checking a router that had no power, helping identify that the issue was related to the power source.',
      },
     
    ],
  },
  {
    week: 21,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week21-1.jpg' ,   'OJT/week21-2.jpg' ],
        description: 'Assisted an employee by connecting their laptop to the office printer to restore printing functionality. I also removed the laptop’s SSD to secure and back up important files for safekeeping.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week21-3.jpg'],
        description: 'Conducted a full backup of the employee’s files to ensure their data was properly stored and protected.',
      },
      {
        id: 'ojt-photo',
        src: ['OJT/week21-4.jpg'],
        description: 'Configured Outlook rules to improve email workflow by setting up an automatic forwarding rule for all incoming messages to iti@intellismartinc.com, and a send rule that CCs all outgoing emails to the same address for better monitoring and record-keeping.',
      },
    ],  
  },
{
    week: 22,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week22-1.jpg' ,   'OJT/week22-2.jpg' ],
        description: 'I replaced the laptop’s Wi-Fi card to fix its connectivity issues. After installing the new card, I checked the wireless settings to make sure the device could connect smoothly to the network.',
      },
        {
        id: 'ojt-photo',
        src: ['OJT/week22-3.jpg' , 'OJT/week22-4.jpg'  ],
        description: 'Installed Planswift on the employee’s computer as requested. I completed the setup, checked that the installation worked properly, and ensured the software was ready for use.',
      },
       {
        id: 'ojt-photo',
        src: ['OJT/week22-5.jpg' , 'OJT/week22-6.jpg'  ],
        description: 'My co-intern and I assisted a guest by connecting their device to the Intellismart Wi-Fi. I verified the network settings and made sure they had stable internet access.',
      },

      {
        id: 'ojt-photo',
        src: ['OJT/week22-7.jpg' ],
        description: 'With guidance from my senior, Sir Charles, I removed the RAM and hard drive from the old server and transferred them to the new JFC server.',
      },

       {
        id: 'ojt-photo',
        src: ['OJT/week22-8.jpg' ],
        description: 'Performed a refresh of the IAMS Server connection to ensure stable system communication.',
      },
    ],
  },

  {
    week: 23,
    photos: [
      {
        id: 'ojt-photo',
        src: [ 'OJT/week23-1.jpg' ],
        description: 'I checked the SSD to confirm that it was working properly. This was done to ensure that the storage device was functional and ready for use before installation or further processing.',
      },
    ],
  },

];


const Internship = () => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const currentWeekPhotos = selectedWeek !== null 
    ? ojtWeeks.find(w => w.week === selectedWeek)?.photos || [] 
    : [];
  const selectedWeekData = selectedWeek !== null
    ? ojtWeeks.find((week) => week.week === selectedWeek)
    : undefined;

  // compute the highest week number present in the data (handles missing week numbers)
  const totalWeeks = ojtWeeks.reduce((max, w) => Math.max(max, w.week), 0);

  const currentPhoto = currentWeekPhotos[currentPhotoIndex];
  const currentImageSrc = currentPhoto?.src[currentImageIndex] || '';
// Preload only the active image and the next one to avoid overloading mobile memory
useEffect(() => {
  if (!currentPhoto) return;

  const preloadImage = (image: string) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = image;
  };

  preloadImage(currentPhoto.src[currentImageIndex] || currentPhoto.src[0]);

  const nextImage = currentPhoto.src[currentImageIndex + 1];
  if (nextImage) {
    preloadImage(nextImage);
  }
}, [currentPhoto, currentImageIndex]);
  // Keyboard navigation
  useEffect(() => {
    if (selectedWeek === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
          } else if (currentPhotoIndex > 0) {
            goToPreviousPhoto();
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentPhoto && currentImageIndex < currentPhoto.src.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
          } else if (currentPhotoIndex < currentWeekPhotos.length - 1) {
            goToNextPhoto();
          }
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWeek, currentPhotoIndex, currentImageIndex, currentPhoto, currentWeekPhotos.length]);

  const handleWeekClick = (week: number) => {
    setSelectedWeek(week);
    setCurrentPhotoIndex(0);
    setCurrentImageIndex(0);
  };

  const goToPreviousPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setCurrentImageIndex(0);
    }
  };

  const goToNextPhoto = () => {
    if (currentPhotoIndex < currentWeekPhotos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setCurrentImageIndex(0);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentPhoto && currentImageIndex < currentPhoto.src.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const closeModal = () => {
    setSelectedWeek(null);
    setCurrentPhotoIndex(0);
    setCurrentImageIndex(0);
    touchStartX.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;

    if (Math.abs(distance) < 50) {
      touchStartX.current = null;
      return;
    }

    if (distance < 0) {
      if (currentPhoto && currentImageIndex < currentPhoto.src.length - 1) {
        goToNextImage();
      } else if (currentPhotoIndex < currentWeekPhotos.length - 1) {
        goToNextPhoto();
      }
    } else {
      if (currentImageIndex > 0) {
        goToPreviousImage();
      } else if (currentPhotoIndex > 0) {
        goToPreviousPhoto();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section id="internship" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Internship Information</span>
        </h2>

        {/* Company Details */}
        <div className="glass-card rounded-2xl p-5 sm:p-8 mb-8 animate-fade-in">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:items-start">
           <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center p-2 sm:w-24 sm:h-24">
  <img
    src="/ITI.png"
    alt="Intellismart Technology Inc"
    className="w-full h-full object-contain"
  />
</div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Intellismart Technology Inc
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground sm:text-base">
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  12 Catanduanes Street, Brgy Paltok West Ave., Quezon City
                </p>
                <p className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  July 2025 – December 2025
                </p>
                <p className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-primary" />
                  Supervisor: Renan Mark Bruzola
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  +632 8350 5986 (loc. 348) | +632 8352 0377
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="glass-card rounded-2xl p-5 sm:p-8 mb-8 animate-slide-up">
          <h3 className="text-lg font-semibold text-primary mb-4 sm:text-xl sm:mb-6">
            Job Description / Assigned Tasks
          </h3>
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* OJT Photos by Week */}
        <div className="glass-card rounded-[24px] border border-primary/10 p-4 sm:p-6 lg:p-8 mb-8 animate-slide-up">
          <div className="mb-6 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Internship gallery
              </div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                A visual timeline of my OJT journey
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Each week highlights the hands-on tasks, technical support work, and learning moments I experienced at Intellismart Technology Inc.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-muted-foreground sm:justify-start">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground sm:text-xl">{totalWeeks}</p>
                <p className="text-[10px] uppercase tracking-[0.25em]">Weeks</p>
              </div>
              <div className="h-8 w-px bg-border/60" />
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground sm:text-xl">
                  {ojtWeeks.reduce((sum, week) => sum + week.photos.length, 0)}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em]">Photos</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ojtWeeks.map((week) => {
              const previewImage = week.photos[0]?.src[0];

              return (
                <button
                  key={week.week}
                  onClick={() => handleWeekClick(week.week)}
                  className="group cursor-pointer overflow-hidden rounded-[20px] border border-border/70 bg-gradient-to-br from-secondary/30 via-background/60 to-secondary/20 p-2.5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 sm:p-3"
                >
                  <div className="relative h-36 overflow-hidden rounded-[16px] sm:h-40">
                    <img
                      src={previewImage}
                      alt={`Week ${week.week} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90">
                      Week {week.week}
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white">
                      {week.photos.length} photo{week.photos.length > 1 ? 's' : ''}
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <p className="text-sm font-semibold text-foreground">Week {week.week}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Reflection */}

      </div>

      {/* MODAL - Week Photos */}
      {selectedWeek !== null && currentPhoto && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/65 backdrop-blur-md transition-opacity duration-300 animate-fade-in cursor-pointer"
            onClick={closeModal}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            <div className="glass-card relative flex h-screen w-full max-w-6xl flex-col overflow-hidden rounded-none border-0 border-primary/20 shadow-2xl shadow-primary/20 animate-scale-in sm:h-auto sm:max-h-[92vh] sm:rounded-[28px] sm:border">
              <div className="flex items-center justify-between gap-2 border-b border-border/50 bg-gradient-to-r from-primary/10 via-background/70 to-transparent px-3 py-3 sm:px-4 lg:px-6 lg:py-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Week {selectedWeek}
                  </p>
                  <h3 className="truncate text-base font-semibold text-foreground sm:text-lg">
                    {selectedWeekData?.photos.length ? `${selectedWeekData.photos.length} moments` : 'Gallery'}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowThumbnails(!showThumbnails)}
                    className="hidden rounded-lg bg-secondary/60 p-2 transition-colors hover:bg-secondary lg:flex"
                    title="Toggle thumbnails"
                  >
                    <Grid3x3 className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <button
                    onClick={closeModal}
                    className="rounded-lg bg-secondary/60 p-2 transition-colors hover:bg-red-500/20 group"
                    title="Close (ESC)"
                  >
                    <X className="h-5 w-5 text-muted-foreground group-hover:text-red-500" />
                  </button>
                </div>
              </div>

              <div className="flex flex-1 min-h-0 flex-col gap-3 overflow-hidden p-3 sm:gap-4 sm:p-4 md:flex-row lg:flex-row">
                <div className="flex min-h-0 flex-1 flex-col gap-4 md:w-[60%] lg:w-auto">
                  <div
                    className="group relative h-[42vh] overflow-hidden rounded-[22px] bg-black p-2 sm:p-4 sm:h-[56vh] lg:h-[60vh]"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img
                      key={currentImageSrc}
                      src={currentImageSrc}
                      alt={`OJT gallery image ${currentPhotoIndex + 1}`}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 m-auto max-w-full max-h-full object-contain bg-black transition-opacity duration-300 z-10"
                    />

                    {currentPhoto.src.length > 1 && (
                      <div className="absolute bottom-4 right-4 z-20 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white/90">
                        {currentImageIndex + 1} / {currentPhoto.src.length}
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white/90 sm:hidden">
                      Swipe to browse
                    </div>

                    {currentPhoto.src.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPreviousImage();
                          }}
                          disabled={currentImageIndex === 0}
                          aria-label="Previous image"
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white/90 transition-all hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-30 sm:p-3 z-20"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToNextImage();
                          }}
                          disabled={currentImageIndex === currentPhoto.src.length - 1}
                          aria-label="Next image"
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white/90 transition-all hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-30 sm:p-3 z-20"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="overflow-y-auto rounded-[18px] border border-border/60 bg-secondary/40 p-3 sm:p-4 h-28 sm:h-36 md:h-40">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {currentPhoto.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-background/70 py-1 backdrop-blur-sm sm:gap-4">
                    <button
                      onClick={goToPreviousPhoto}
                      disabled={currentPhotoIndex === 0}
                      className="flex items-center justify-center rounded-xl bg-secondary px-3 py-2 text-foreground transition-all hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
                      title="Previous photo"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="ml-1 hidden text-sm font-medium sm:inline">Previous</span>
                    </button>

                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300"
                        style={{ width: `${((currentPhotoIndex + 1) / currentWeekPhotos.length) * 100}%` }}
                      />
                    </div>

                    <button
                      onClick={goToNextPhoto}
                      disabled={currentPhotoIndex === currentWeekPhotos.length - 1}
                      className="flex items-center justify-center rounded-xl bg-secondary px-3 py-2 text-foreground transition-all hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
                      title="Next photo"
                    >
                      <span className="mr-1 hidden text-sm font-medium sm:inline">Next</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {showThumbnails && (
                  <div className="hidden w-32 flex-col gap-2 overflow-y-auto rounded-[20px] border border-border/60 bg-secondary/30 p-3 md:flex lg:flex">
                    <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Photos
                    </p>
                    {currentWeekPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentPhotoIndex(idx);
                          setCurrentImageIndex(0);
                        }}
                        className={`relative overflow-hidden rounded-lg transition-all hover:scale-105 ${
                          currentPhotoIndex === idx ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          src={photo.src[0]}
                          alt={`Photo thumbnail ${idx + 1}`}
                          className="aspect-square w-full object-cover"
                        />
                        {currentPhotoIndex === idx && (
                          <div className="absolute inset-0 bg-primary/20" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Internship;
