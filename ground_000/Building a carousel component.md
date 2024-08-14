# 🧩 Building a carousel component

In this guide, we’ll walk through building a carousel component using HTML, CSS, and JavaScript. This carousel will display images and testimonials with navigation buttons and pagination dots with some automation.


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
- `imgElement`, `textElement`, `authorElement`, `jobElement`, `dots`: Constant variables we use to cache dom elements that we manipulate in the browser.
- `currentIndex`: We update this based on the current slide that's showing based on it's index.

```JS

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

```

- `updateCarousel`: Updates the image, text, and pagination dots based on the `currentIndex`. This function is called whenever the slide changes.
- 

```JS



```

- 
- 
- 



### Key Take Aways
___

1. Topic:
    - 

2. Topic:
    - 

3. Topic:
    - 

4. Topic:
    - 

### Conclusion
___

In this article, we explored a practical example of building a random quote generator using HTML, CSS, and JavaScript. We focused on several key JavaScript concepts: async, fetch, and try/catch.

Learning these concepts helps us build more robust and interactive web applications. We gain the ability to handle asynchronous tasks, manage errors effectively, and integrate external data seamlessly.

Remember, with these tools and dedicated practice, we can create amazing apps on the web!

You can view the project on Codepen [Here](https://codepen.io/benjaminkyamanywa/pen/abPExVr). 
