
if(('ontouchstart' in window)||(navigator.maxTouchPoints > 0)||(navigator.msMaxTouchPoints > 0))

  document.body.className='touch'

else

  document.body.className='no-touch'

const
  a=document.querySelector('nav'),
  f=a.querySelectorAll('.container a'),
  d=a.querySelector('.burger')

f.forEach(b =>
  b.addEventListener('click',e=>{
    e.preventDefault()
    a.classList.remove('active')

    if(!e.target.hash)
      return window.scrollTo({top: 0, behavior: 'smooth'})

    const c=document.getElementById(e.target.hash.substr(1))

    c.scrollIntoView({behavior: 'smooth'})
  }))

d.addEventListener('click' e =>{
  a.classList.toggle('active')
})
