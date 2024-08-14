# 🧩 Building a carousel component

In this guide, we’ll walk through building a carousel component using HTML, CSS, and JavaScript. This carousel will display images and testimonials with navigation buttons and pagination with some automation.


## Topics
- [Markup Overview](#markup-overview)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Key Take Aways](#key-take-aways)
- [Conclusion](#conclusion)

### Markup Overview

___

Here we set up our structure for the markup. 

```HTML

<div class="carousel">
		<!-- Image -->
		<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="carousel image">
		
		<!-- Testimonial -->
		<blockquote class="testimonial">
			<p class="testimonial-text"></p>
			<p class="testimonial-author"></p>
			<p class="testimonial-job"></p>
		</blockquote>
	
		<!-- Buttons -->
		<button class="btn btn--left">
			<svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
			</svg>
		</button>
	
		<button class="btn btn--right">
			<svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
			</svg>
		</button>
	
		<!-- Pagination -->
		<div class="dots">
			<button class="dot dot--fill">&nbsp</button>
			<button class="dot">&nbsp</button>
			<button class="dot">&nbsp</button>
			<button class="dot">&nbsp</button>
		</div>
	</div>

```

- `<img>`: Displays the current image.
- `<blockquote>`: Holds the testimonial text and author details.
- `<button>`: Used for both the arrows to enable click through of components plus the pagination dots.

### CSS Highlights

___

We'll go over our key styles.


```CSS


.carousel {
	width: 800px;
	margin: 100px auto;
	background-color: #7f087e;
	border-radius: 8px;
	padding: 32px 85px;
	position: relative;
	display: flex;
	align-items: center;
	gap: 65px;
}

img {
	height: 200px;
	width: 300px;
	border-radius: 8px;
	transform: scale(1.5);
	box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
	object-fit: cover;
}

.testimonial {
	color: #e6fcf5;
	max-width: 500px;
}

.testimonial-text {
	font-size: 15px;
	font-weight: 500;
	line-height: 1.5;
	font-style: italic;
	margin-bottom: 25px;
}

.testimonial-author {
	font-size: 16px;
	margin-bottom: 8px;
}

```

- `.carousel`: Sets the size, position, and layout for the carousel.
- `.img`: Ensures the image fits within a fixed-size container and is centered.

### Uncovering our JS

___

We'll uncover in depth our Javascript with utilisation of our functions.

```JS

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
          author: "Jane Smith",
          job: "Creative Director at Media Inc."
      },
      {
          text: `"Exceptional work from start to finish. The attention to detail and creativity were beyond our expectations. We look forward to future collaborations."`,
          author: "Esther Culler",
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


```

- `images` and `testimonials`: Arrays we use to hold data that's used to dynamically add images and testimonials to the carousel components.
- `imgElement`, `textElement`, `authorElement`, `jobElement`, `dots`: Constant variables we use to cache DOM elements that we manipulate in the browser.
- `currentIndex`: We update this based on the current slide that's showing based on it's index.

```JS

  
  // Update carousel content and pagination dots based on the currentIndex.
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

  
  //Show the next slide in the carousel.
  const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
  };

```

- `updateCarousel`: Updates the image, text, and pagination dots based on the `currentIndex`. This function is called whenever the slide changes.
- `showNext`: Moves to the next slide by incrementing `currentIndex` and wrapping around using modulo operation.


```JS

  //Show the previous slide in the carousel.   
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

```

- `showPrevious`: Moves to the previous slide by decrementing `currentIndex` and wrapping around.
- `setInterval`: Automatically changes the slide every 4 seconds.
- `clearInterval`: Stops automatic sliding when the mouse hovers over the carousel.

### Key Take Aways
___

1. Dynamic Content Updates:
    - We change the content displayed in the carousel (image, text, and pagination dots) using the `updateCarousel` function. This function updates the image source and text based on the `currentIndex`. It ensures that the carousel reflects the current slide's information.
    - Understanding how to dynamically update content allows us to change what users see without reloading the page, creating a smoother and more engaging user experience.

2. Event Handling for User Interaction:
    - Event listeners are used to respond to user actions. In the carousel script, we add event listeners to the navigation buttons so that when a user clicks the left or right button, the carousel moves to the previous or next slide.
    - It lets us define what should happen when users interact with elements on the page, such as clicking buttons or hovering over items.

3. Automatic Sliding with Intervals:
    - We use `setInterval` to automatically advance the carousel every 4 seconds. This means the carousel changes slides on its own without user input, creating a seamless and automated experience.
    - Automating tasks with intervals helps improve user experience by keeping content fresh and engaging without requiring manual actions. It also introduces concepts like timing functions, which are useful for various interactive elements in web development.


### Conclusion
___

In this article, we explored a practical example of building a carousel component using HTML, CSS, and JavaScript. We focused on several key JavaScript concepts: DOM manipulation, Event Handling, and Dynamic content updates.

Learning these concepts helps us build more robust and interactive web applications.

Remember, with these tools and dedicated practice, we can create amazing apps on the web!

You can view the project on Codepen [Here](https://codepen.io/benjaminkyamanywa/pen/abPExVr). 
