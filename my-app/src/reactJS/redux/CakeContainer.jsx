import { buyCake } from './index'
import { connect, useDispatch, useSelector } from 'react-redux'
const CakeContainer = (props) => {
    const numberOfCakes=useSelector((state)=>{
        return state.numberOfCakes;
    });
 const dispatch=  useDispatch();
    return (
        <>Available Cakes:{numberOfCakes}
            <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
        </>
    )

}
// const mapStateToProps = (state) => {
//     return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake: ()=>dispatch(buyCake())
//     }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
export default CakeContainer