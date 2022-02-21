import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {MostDownload} from "../../../helperFunction/filterFunctions";
import MostPopularCard from "./MostPopularCard";
import './MostPopular.css'

const MostPopular: React.FunctionComponent = () => {

    const mostDownload = MostDownload()

    return (
            <Container>
                <Row className="mt-5">
                    <Col md={6}>
                <span className="mostPopular">
                    Топ 3 самых популярных игр
                </span>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-evenly mt-5">
                    {mostDownload.map(el =>
                        <MostPopularCard key={el.id} props={el}/>
                    )}
                </Row>
            </Container>
    );
};

export default MostPopular;