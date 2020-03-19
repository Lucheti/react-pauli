export const widthTransition = (shouldShow: boolean) => shouldShow? fullWidth : hidden

const fullWidth = {
  maxWidth: '20vw',
  transition: 'max-width 1s ease-in',
  overflow: 'scroll'
}

const hidden = {
  maxWidth: '0',
  transition: 'max-width 1s ease-out',
  overflow: 'hidden'
}

export const useMoreInfo = (shouldShow: boolean) => shouldShow? show : hide

const show = {
  maxHeight: '50vh',
  transition: 'max-height 1.5s ease-in',
  overflow: 'scroll',
}

const hide = {
  maxHeight: '0',
  transition: 'max-height 1.5s ease-out',
  overflow: 'hidden'
}

