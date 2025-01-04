import StateEx from '../components/StateEx';
import StateExClass from '../components/StateExClass';
import Conditional from '../components/Conditional';
import Football from '../components/Football';
import ListaCoche from '../components/ListaCoche';
import Form from '../components/Form';


const Home = () =>{

    const colored = 'blue';

    return(
        <>
            <div>
            <StateExClass color={ colored } />
            <StateEx />
            <Football nombre='damaso' />
            <Conditional isTrue='true' />
            <ListaCoche />
            <Form />
            </div>
        </>
    );

}

export default Home;

