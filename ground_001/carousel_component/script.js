document.addEventListener('DOMContentLoaded', () => {
  // Array of image URLs for the carousel
const images = [
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
"https://images.unsplash.com/photo-1563224314-dd2f2dd0d00e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1527201987695-67c06571957e?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1668752515680-075bf648d8fa?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

  // Array of testimonial objects
  const testimonials = [
      {
          text: `"A joy to work with the team. The meticulous attention to detail was thorough. End result was exceptional, everyone put their best foot forward."`,
          author: "Ane Marie Stacey",
          job: "Senior Front End Developer at EDP Commercial"
      },
      {
          text: `"The team was amazing to work with. They were professional, communicative, and really understood our needs. The end result was fantastic and exceeded our expectations."`,
          author: "Suzan Reever",
          job: "Project Manager at Tech Solutions"
      },
      {
          text: `"A pleasure to work with! They delivered exactly what we needed, on time and with great quality. Highly recommended for any web development needs."`,
          author: "Jane Ndana",
          job: "Creative Director at Media Inc."
      },
      {
          text: `"Exceptional work from start to finish. The attention to detail and creativity were beyond our expectations. We look forward to future collaborations."`,
          author: "Esther Mutali",
          job: "CEO at Innovation Labs"
      }
  ];

  let currentIndex = 0; // Index of the currently displayed slide

  // Cache DOM elements
  const imgElement = document.querySelector('.carousel img');
  const textElement = document.querySelector('.testimonial-text');
  const authorElement = document.querySelector('.testimonial-author');
  const jobElement = document.querySelector('.testimonial-job');
  const dots = document.querySelectorAll('.dot');

  /**
   * Update carousel content and pagination dots based on the currentIndex.
   */
  const updateCarousel = () => {
      imgElement.src = images[currentIndex];
      textElement.textContent = testimonials[currentIndex].text;
      authorElement.textContent = testimonials[currentIndex].author;
      jobElement.textContent = testimonials[currentIndex].job;

      // Update dots to reflect the current slide
      dots.forEach((dot, index) => {
          dot.classList.toggle('dot--fill', index === currentIndex);
      });
  };

  /**
   * Show the next slide in the carousel.
   */
  const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
  };

  /**
   * Show the previous slide in the carousel.
   */
  const showPrevious = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
  };

  // Event listeners for navigation buttons
  document.querySelector('.btn--right').addEventListener('click', showNext);
  document.querySelector('.btn--left').addEventListener('click', showPrevious);

  // Initial update to display the first slide
  updateCarousel();

  // Automatic slide every 4 seconds
  let autoSlideInterval = setInterval(showNext, 4000);

  // Pause automatic sliding on mouse hover
  document.querySelector('.carousel').addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
  });

  // Resume automatic sliding when mouse leaves
  document.querySelector('.carousel').addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(showNext, 5000);
  });
});
