export const playAudio = (path: string) => new Audio(path).play()

export const sendNotification = (title: string, options: object) => new Notification(title, options)

export const splitValue = (value: string | number, padSize: number = 2) => `${value}`.padStart(padSize, '0').split('')

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const scrollToElement = (selector: string) => {
  const el: HTMLElement | null  = document.querySelector(selector)
  const mq = window.matchMedia('(max-width: 693px)')

  if (el && mq.matches) {
    el.scrollIntoView({block: 'start', behavior: 'smooth'})
  }
}
