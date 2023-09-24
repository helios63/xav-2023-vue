import { animate, inView } from 'motion'

animate('header', { y: -100, opacity: 0 })
animate('section', { opacity: 0, y: 50 })
animate('.intro', { opacity: 0 })

animate('header', { y: 0, opacity: 1 }, { duration: 2, delay: 1 })
animate('.intro', { opacity: [0, 1] }, { duration: 2, delay: 1 })

inView('section', ({ target }) => {
  animate(target, { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.5 })
})
