import { Link } from 'react-router-dom';

export default function MainHeader({back, page}){
    return(
    <div className="settings-header">
        <Link to={back}><i className="fa fa-arrow-left"></i></Link>
        <p>{page}</p> 
    </div>
    );
}