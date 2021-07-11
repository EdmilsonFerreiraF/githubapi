import React from 'react'

function FeatCard(props) {
  return (
    <li className="card features-item">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`${props.svgClass} features-icon`}
            viewBox="0 0 16 16"
        >
            {props.paths.map(path => (
                <path d={path.d} fill-role={path.fillRole ? path.fillRole : null} key={path.d} />
            ))}
        </svg>

        <div className="card-body">
            <h5 className="card-title text-center">{props.cardTitle}</h5>
            <p className="card-text text-center">{props.cardText}</p>
        </div>
    </li>
  );
}

export default FeatCard;