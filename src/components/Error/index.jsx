import { Link } from 'react-router-dom'
import PageWrapper from '../../utils/style/PageWrapper'

function Error() {
  return (
    <PageWrapper>
      <div className="error">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Accueil</Link>
      </div>
    </PageWrapper>
  )
}
export default Error
