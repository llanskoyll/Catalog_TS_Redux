import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import MostPopular from "./showcaseComponent/MostPopular";
import {MostDownload} from "../../helperFunction/filterFunctions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Layout} from "antd";


const Home:React.FunctionComponent = () => {

    MostDownload()
    const user = useTypedSelector(state => state.user)
    return (
        <div>
                <Layout.Content>
                    <MostPopular/>
                </Layout.Content>
                <Layout.Footer>
                    <div>Hi</div>
                </Layout.Footer>
        </div>
    );
};

export default Home;