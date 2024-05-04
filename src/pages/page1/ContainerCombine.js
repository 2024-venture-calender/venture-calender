import Line from './Lines1';
import Content from './Listcontent1';
import Buttons from './Listbuttons1';
import Container from './Listcontainer1';
import Map from '../Map'
function ContainerCombine(){

    return(
        <div>
            <Line />
            <Content />
            <Line />
            <Buttons />
            <Line />
            <Container />
            <Map />
        </div>
    );
}

export default ContainerCombine;