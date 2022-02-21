import React from 'react';
import {Card, Col} from "react-bootstrap";
import {IProduct} from "../../../models/IProduct";
import {Button} from "antd";

interface PropsCard {
    props : IProduct
}

const MostPopularCard:React.FunctionComponent<PropsCard> = ({props}) => {

    const textReduction = (text:string):string => {

        if(text.length > 120) {
            return text.split(' ').slice(0,30).join(" ") + '... '
        } else {
            return text
        }
    }
    return (
        <Col md = {3}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {textReduction(props.description)}
                    </Card.Text>
                    <Button type = "primary">Добавить в корзину</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MostPopularCard;