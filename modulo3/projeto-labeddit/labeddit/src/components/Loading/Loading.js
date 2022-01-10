import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingContainer } from './styles'

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress size={100}/>
    </LoadingContainer>
  )
}

export default Loading