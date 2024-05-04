import Line from './Lines3';
import Content from './Listcontent3';
import Buttons from './Listbuttons3';
import Container from './Listcontainer3';

function ContainerCombine(){

    return(
        <div>
            <Line />
            <Content />
            <Line />
            <Buttons />
            <Line />
            <Container />
        </div>
    );
}

export default ContainerCombine;