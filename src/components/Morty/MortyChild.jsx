import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';

const MortyChild = (props) => {
    return (
        <Card>
            <CardImg top width="100%" src={props.mortyCharacter.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{props.mortyCharacter.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.mortyCharacter.species}</CardSubtitle>
                <CardText>
                {props.mortyCharacter.status}
                </CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
}

export default MortyChild;