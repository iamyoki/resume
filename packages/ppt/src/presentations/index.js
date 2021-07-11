import { Deck } from 'spectacle'
import SelfIntroduction from './SelfIntroduction'
import theme from './theme'

function Presentations() {
  return (
    <Deck theme={theme}>
      <SelfIntroduction />
    </Deck>
  )
}

export default Presentations
