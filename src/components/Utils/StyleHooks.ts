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