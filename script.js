const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.12});
document.querySelectorAll('.section,.experience,.skill-card,.project').forEach(el=>observer.observe(el));
