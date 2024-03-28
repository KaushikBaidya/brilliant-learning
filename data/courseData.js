const courseData = [
    {
      "id": 1,
      "courseTitle": "Web Development with HTML, CSS, and JavaScript - Fundamentals",
      "author": "Emily Johnson",
      "category": "Development",
      "price": 59,
      "lessons": 30,
      "enrolled_students": 800,
      "image": "https://source.unsplash.com/featured/?web",
      "ratings": 4.5,
      "numberOfReviews": 120
    },
    {
      "id": 2,
      "courseTitle": "Financial Planning for Beginners - Manage Your Finances",
      "author": "Emma White",
      "category": "Marketing",
      "price": 49,
      "lessons": 20,
      "enrolled_students": 500,
      "image": "https://source.unsplash.com/featured/?finance",
      "ratings": 4.2,
      "numberOfReviews": 80
    },
    {
      "id": 3,
      "courseTitle": "Introduction to Graphic Design - Explore Basics of Designing",
      "author": "Sophia Brown",
      "category": "Design",
      "price": 39,
      "lessons": 25,
      "enrolled_students": 600,
      "image": "https://source.unsplash.com/featured/?graphic-design",
      "ratings": 4.8,
      "numberOfReviews": 150
    },
    {
      "id": 4,
      "courseTitle": "Digital Marketing Strategies - Master Marketing Techniques",
      "author": "Alex Turner",
      "category": "Business",
      "price": 69,
      "lessons": 45,
      "enrolled_students": 1100,
      "image": "https://source.unsplash.com/featured/?digital-marketing",
      "ratings": 4.7,
      "numberOfReviews": 200
    },
    {
      "id": 5,
      "courseTitle": "Introduction to Mobile App Development - Build Mobile Apps",
      "author": "Chris Adams",
      "category": "Development",
      "price": 69,
      "lessons": 40,
      "enrolled_students": 900,
      "image": "https://source.unsplash.com/featured/?mobile-app",
      "ratings": 4.3,
      "numberOfReviews": 100
    },
    {
      "id": 6,
      "courseTitle": "Financial Management Principles - Effective Financial Management",
      "author": "Michael Brown",
      "category": "Marketing",
      "price": 79,
      "lessons": 35,
      "enrolled_students": 1200,
      "image": "https://source.unsplash.com/featured/?finance",
      "ratings": 4.6,
      "numberOfReviews": 180
    },
    {
      "id": 7,
      "courseTitle": "Logo Design Masterclass - Master Art of Logo Designing",
      "author": "Olivia Taylor",
      "category": "Design",
      "price": 49,
      "lessons": 30,
      "enrolled_students": 800,
      "image": "https://source.unsplash.com/featured/?design",
      "ratings": 4.9,
      "numberOfReviews": 250
    },
    {
      "id": 8,
      "courseTitle": "Entrepreneurship 101 - Start Your Own Business",
      "author": "David Lee",
      "category": "Business",
      "price": 59,
      "lessons": 25,
      "enrolled_students": 700,
      "image": "https://source.unsplash.com/featured/?entrepreneurship",
      "ratings": 4.4,
      "numberOfReviews": 150
    },
    {
      "id": 9,
      "courseTitle": "JavaScript Frameworks: React - Modern Web Development",
      "author": "Sophie Turner",
      "category": "Development",
      "price": 79,
      "lessons": 50,
      "enrolled_students": 1500,
      "image": "https://source.unsplash.com/featured/?javascript",
      "ratings": 4.8,
      "numberOfReviews": 300
    },
    {
      "id": 10,
      "courseTitle": "Accounting Fundamentals - Basics of Accounting",
      "author": "Daniel Wilson",
      "category": "Marketing",
      "price": 49,
      "lessons": 30,
      "enrolled_students": 900,
      "image": "https://source.unsplash.com/featured/?accounting",
      "ratings": 4.5,
      "numberOfReviews": 200
    },
    {
        "id": 11,
        "courseTitle": "Artificial Intelligence Foundations - Introduction to AI Concepts",
        "author": "Andrew Ng",
        "category": "Development",
        "price": 79,
        "lessons": 40,
        "enrolled_students": 1200,
        "image": "https://source.unsplash.com/featured/?artificial-intelligence",
        "ratings": 4.9,
        "numberOfReviews": 250
      },
      {
        "id": 12,
        "courseTitle": "Content Marketing Strategies - Create Compelling Content",
        "author": "Rachel Adams",
        "category": "Marketing",
        "price": 49,
        "lessons": 30,
        "enrolled_students": 900,
        "image": "https://source.unsplash.com/featured/?content-marketing",
        "ratings": 4.6,
        "numberOfReviews": 180
      },
      {
        "id": 13,
        "courseTitle": "Advanced Typography Techniques - Master Text Design",
        "author": "Lucas Moore",
        "category": "Design",
        "price": 59,
        "lessons": 35,
        "enrolled_students": 800,
        "image": "https://source.unsplash.com/featured/?typography",
        "ratings": 4.7,
        "numberOfReviews": 200
      },
      {
        "id": 14,
        "courseTitle": "Strategic Management Fundamentals - Business Strategy Essentials",
        "author": "Sarah Johnson",
        "category": "Business",
        "price": 69,
        "lessons": 45,
        "enrolled_students": 1100,
        "image": "https://source.unsplash.com/featured/?strategic-management",
        "ratings": 4.8,
        "numberOfReviews": 300
      },
      {
        "id": 15,
        "courseTitle": "Data Structures and Algorithms - Problem Solving in Programming",
        "author": "John Smith",
        "category": "Development",
        "price": 69,
        "lessons": 50,
        "enrolled_students": 1500,
        "image": "https://source.unsplash.com/featured/?data-structures-algorithms",
        "ratings": 4.9,
        "numberOfReviews": 350
      },
      {
        "id": 16,
        "courseTitle": "Email Marketing Mastery - Effective Email Campaigns",
        "author": "Emily Walker",
        "category": "Marketing",
        "price": 59,
        "lessons": 25,
        "enrolled_students": 700,
        "image": "https://source.unsplash.com/featured/?email-marketing",
        "ratings": 4.5,
        "numberOfReviews": 150
      },
      {
        "id": 17,
        "courseTitle": "Advanced Motion Graphics - Create Dynamic Visuals",
        "author": "Daniel White",
        "category": "Design",
        "price": 79,
        "lessons": 30,
        "enrolled_students": 600,
        "image": "https://source.unsplash.com/featured/?motion-graphics",
        "ratings": 4.6,
        "numberOfReviews": 180
      },
      {
        "id": 18,
        "courseTitle": "Financial Analysis Techniques - Analyze Financial Data",
        "author": "Michael Johnson",
        "category": "Business",
        "price": 79,
        "lessons": 35,
        "enrolled_students": 900,
        "image": "https://source.unsplash.com/featured/?financial-analysis",
        "ratings": 4.7,
        "numberOfReviews": 200
      },
      {
        "id": 19,
        "courseTitle": "Full Stack Web Development Bootcamp - Become a Web Developer",
        "author": "Jessica Brown",
        "category": "Development",
        "price": 99,
        "lessons": 60,
        "enrolled_students": 2000,
        "image": "https://source.unsplash.com/featured/?full-stack-web-development",
        "ratings": 4.8,
        "numberOfReviews": 400
      },
      {
        "id": 20,
        "courseTitle": "Brand Identity Design - Establish Your Brand Image",
        "author": "Sophie Turner",
        "category": "Design",
        "price": 69,
        "lessons": 40,
        "enrolled_students": 1000,
        "image": "https://source.unsplash.com/featured/?brand-identity",
        "ratings": 4.9,
        "numberOfReviews": 250
    },
    {
        "id": 21,
        "courseTitle": "E-commerce Marketing Strategies - Boost Your Online Store",
        "author": "Emma Watson",
        "category": "Marketing",
        "price": 79,
        "lessons": 35,
        "enrolled_students": 800,
        "image": "https://source.unsplash.com/featured/?ecommerce",
        "ratings": 4.7,
        "numberOfReviews": 200
      },
      {
        "id": 22,
        "courseTitle": "User Experience Research - Understand User Behavior",
        "author": "Liam Johnson",
        "category": "Design",
        "price": 59,
        "lessons": 25,
        "enrolled_students": 700,
        "image": "https://source.unsplash.com/featured/?user-experience",
        "ratings": 4.5,
        "numberOfReviews": 150
      },
      {
        "id": 23,
        "courseTitle": "Leadership Essentials - Guide Your Team to Success",
        "author": "Michael Smith",
        "category": "Business",
        "price": 89,
        "lessons": 40,
        "enrolled_students": 900,
        "image": "https://source.unsplash.com/featured/?leadership",
        "ratings": 4.8,
        "numberOfReviews": 250
      },
      {
        "id": 24,
        "courseTitle": "Game Development with Unity - Build Your First Game",
        "author": "Chris Johnson",
        "category": "Development",
        "price": 79,
        "lessons": 30,
        "enrolled_students": 1000,
        "image": "https://source.unsplash.com/featured/?game-development",
        "ratings": 4.6,
        "numberOfReviews": 180
      },
      {
        "id": 25,
        "courseTitle": "Strategic Brand Management - Build a Strong Brand",
        "author": "Olivia Brown",
        "category": "Marketing",
        "price": 69,
        "lessons": 35,
        "enrolled_students": 800,
        "image": "https://source.unsplash.com/featured/?brand-management",
        "ratings": 4.9,
        "numberOfReviews": 300
      },
      {
        "id": 26,
        "courseTitle": "Advanced Illustration Techniques - Master Digital Art",
        "author": "Ethan Wilson",
        "category": "Design",
        "price": 69,
        "lessons": 40,
        "enrolled_students": 900,
        "image": "https://source.unsplash.com/featured/?illustration",
        "ratings": 4.7,
        "numberOfReviews": 200
      },
      {
        "id": 27,
        "courseTitle": "Financial Risk Management - Mitigate Financial Risks",
        "author": "Sophia Johnson",
        "category": "Business",
        "price": 89,
        "lessons": 45,
        "enrolled_students": 1100,
        "image": "https://source.unsplash.com/featured/?financial-risk",
        "ratings": 4.8,
        "numberOfReviews": 250
      },
      {
        "id": 28,
        "courseTitle": "iOS App Development with Swift - Build Your First App",
        "author": "David Brown",
        "category": "Development",
        "price": 79,
        "lessons": 30,
        "enrolled_students": 1000,
        "image": "https://source.unsplash.com/featured/?ios-development",
        "ratings": 4.5,
        "numberOfReviews": 150
      },
      {
        "id": 29,
        "courseTitle": "Advanced User Interface Design - Design Engaging Interfaces",
        "author": "Isabella Taylor",
        "category": "Design",
        "price": 69,
        "lessons": 35,
        "enrolled_students": 800,
        "image": "https://source.unsplash.com/featured/?user-interface",
        "ratings": 4.6,
        "numberOfReviews": 180
      },
      {
        "id": 30,
        "courseTitle": "International Business Strategies - Expand Your Business Globally",
        "author": "Daniel Smith",
        "category": "Business",
        "price": 89,
        "lessons": 40,
        "enrolled_students": 900,
        "image": "https://source.unsplash.com/featured/?international-business",
        "ratings": 4.7,
        "numberOfReviews": 200
      }
  ];
  
  export default courseData;
  