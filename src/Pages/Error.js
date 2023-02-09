import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="error_page wrapper">
                <h1>404!</h1>
                <p>You may have jumped out the box unknowingly, as this page does not exist...</p>
                <Link to={`/`}>
                    <h2>Back</h2>
                </Link>
            </div>
        </>
    )
}

export default Error;