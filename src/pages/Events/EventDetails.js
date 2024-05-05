import { useParams } from 'react-router-dom';

import Page1 from './page1/ContainerCombine';
import Page2 from './page2/ContainerCombine2';
import Page3 from './page3/ContainerCombine3';

function EventDetails(){

    const { eventId } = useParams();

    switch(parseInt(eventId)){
        case 1:
            return <Page1 />;
        case 2: 
            return <Page2 />;
        case 3:
            return <Page3 />;
        default:
            return <></>;
    }
}

export default EventDetails;