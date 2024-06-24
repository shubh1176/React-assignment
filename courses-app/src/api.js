export const fetchCoursesFromAPI = async () => {
    return {
      data: [
        {
          id: 1,
          name: 'Introduction to React Native',
          instructor: 'John Doe',
          description: 'Learn the basics of React Native development and build your first mobile app.',
          enrollmentStatus: 'Open',
          thumbnail: 'https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png',
          duration: '8 weeks',
          schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
          location: 'Online',
          prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
          syllabus: [
            { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
            { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' },
            // Additional weeks and topics...
          ],
          students: [
            { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
            { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
            // Additional enrolled students...
          ],
          likes: 10, // Add likes field
        },
        {
          id: 2,
          name: 'Advanced JavaScript',
          instructor: 'Jane Smith',
          description: 'Deep dive into advanced JavaScript concepts and patterns.',
          enrollmentStatus: 'In Progress',
          thumbnail: 'https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png',
          duration: '6 weeks',
          schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
          location: 'Online',
          prerequisites: ['Basic JavaScript knowledge'],
          syllabus: [
            { week: 1, topic: 'JavaScript Basics Review', content: 'A quick review of JavaScript fundamentals.' },
            { week: 2, topic: 'Closures and Scope', content: 'Understanding closures, scope, and context in JavaScript.' },
            // Additional weeks and topics...
          ],
          students: [
            { id: 103, name: 'Charlie Brown', email: 'charlie@example.com' },
            { id: 104, name: 'Dana White', email: 'dana@example.com' },
            // Additional enrolled students...
          ],
          likes: 25, // Add likes field
        },
        {
          id: 3,
          name: 'Full-Stack Web Development',
          instructor: 'Michael Johnson',
          description: 'Learn to build and deploy full-stack web applications using modern technologies.',
          enrollmentStatus: 'Open',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s',
          duration: '12 weeks',
          schedule: 'Fridays, 4:00 PM - 6:00 PM',
          location: 'Online',
          prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
          syllabus: [
            { week: 1, topic: 'Introduction to Full-Stack Development', content: 'Overview of front-end and back-end development.' },
            { week: 2, topic: 'Building APIs with Node.js', content: 'Learn to create and manage APIs using Node.js.' },
            // Additional weeks and topics...
          ],
          students: [
            { id: 105, name: 'Eve Adams', email: 'eve@example.com' },
            { id: 106, name: 'Frank Ocean', email: 'frank@example.com' },
            // Additional enrolled students...
          ],
          likes: 15, // Add likes field
        },
        {
          id: 4,
          name: 'Data Structures and Algorithms',
          instructor: 'Sarah Connor',
          description: 'Master the fundamentals of data structures and algorithms for efficient problem-solving.',
          enrollmentStatus: 'Closed',
          thumbnail: 'https://www.synergisticit.com/wp-content/uploads/2020/09/Data-structures-and-algorithms-new.webp',
          duration: '10 weeks',
          schedule: 'Thursdays, 3:00 PM - 5:00 PM',
          location: 'Online',
          prerequisites: ['Basic programming knowledge'],
          syllabus: [
            { week: 1, topic: 'Introduction to Data Structures', content: 'Overview of common data structures and their uses.' },
            { week: 2, topic: 'Sorting Algorithms', content: 'Learn different sorting algorithms and their complexities.' },
            // Additional weeks and topics...
          ],
          students: [
            { id: 107, name: 'George Harrison', email: 'george@example.com' },
            { id: 108, name: 'Hannah Montana', email: 'hannah@example.com' },
            // Additional enrolled students...
          ],
          likes: 5, // Add likes field
        },
        {
          id: 5,
          name: 'Machine Learning Basics',
          instructor: 'Alan Turing',
          description: 'An introduction to the concepts and applications of machine learning.',
          enrollmentStatus: 'Open',
          thumbnail: 'https://datascientest.com/en/wp-content/uploads/sites/9/2021/01/Machine-learning-def-.png',
          duration: '8 weeks',
          schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
          location: 'Online',
          prerequisites: ['Basic Python knowledge'],
          syllabus: [
            { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of machine learning concepts and history.' },
            { week: 2, topic: 'Supervised Learning', content: 'Learn about supervised learning techniques and algorithms.' },
            // Additional weeks and topics...
          ],
          students: [
            { id: 109, name: 'Isaac Newton', email: 'isaac@example.com' },
            { id: 110, name: 'Jane Austen', email: 'jane@example.com' },
            // Additional enrolled students...
          ],
          likes: 29, 
        },
        // We can add more courses here
      ],
    };
  };
  