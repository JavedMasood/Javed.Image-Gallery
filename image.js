const thumbnails = document.querySelectorAll('.thumbnail');
 const fullImage = document.getElementById('full-image');
 const prevBtn = document.getElementById('prev-btn'); 
 const nextBtn = document.getElementById('next-btn'); 
 
 let currentIndex = 0; 

 thumbnails.forEach((thumbnail, index) => {   
 thumbnail.addEventListener('click', () => { 
  currentIndex = index;    
   updateFullImage(); 
  }); 
}); 
prevBtn.addEventListener('click', () => {   
  currentIndex--; 
  if (currentIndex < 0) {     
    currentIndex = thumbnails.length - 1;  
   } 
   updateFullImage();
   }); 
   nextBtn.addEventListener('click', () => {   
    currentIndex++; 
    if (currentIndex >= thumbnails.length) {    
       currentIndex = 0;  
       } 
       updateFullImage(); 
      }); 
      function updateFullImage() { 
        const fullSrc = thumbnails[currentIndex].getAttribute('data-fullsrc'); 
        fullImage.src = fullSrc; 
      }
