import { Link } from 'react-router-dom';
const NotFound = ()=> {

return (
    <div className= "not-found">
        <h2>
            Sorry
        </h2>
        <h3>
        This page could sadly not be found
        </h3>
        <h4>
            Return to <Link to="/">Home</Link>
        </h4>

    </div>
);

}

export default NotFound;