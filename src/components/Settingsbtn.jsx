import { Link } from 'react-router-dom';


export default function Settingsbtn({type, link, image, name, description}) {
    
    switch (type) {

        case "link": return(
            <Link to={link} className="options">
              {image && <img src={image}/>}
              <div className="option-details">                                                     
                <p>{name}</p>   
                {description && <span>{description}</span>}      
              </div>      
            </Link>
        );
        break;
        case "popup": return(
            <div className="options">
              {image && <img src={image}/>}
              <div className="option-details">                                                     
                <p>{name}</p>   
                {description && <span>{description}</span>}      
              </div>      
            </div>
        )
        break;
        case "input": return(
            <label className="options">
              {image && <img src={image}/>}
              <div className="option-details">                                                     
                <p>{name}</p>
                {description && <span>{description}</span>}
                <form className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </form>
              </div>

            </label>
        )
    }  
}
