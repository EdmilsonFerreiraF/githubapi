import React from 'react'
import Card from 'react-bootstrap/Card';

function FeatItem(props) {
  return (
    <Card className="features-item">
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

        <Card.Body>
            <Card.Title className="text-center">{props.cardTitle}</Card.Title>
            <Card.Text className="text-center">{props.cardText}</Card.Text>
        </Card.Body>
    </Card>
  );
}

export default FeatItem;