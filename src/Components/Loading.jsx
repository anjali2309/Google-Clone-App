import {Puff} from 'react-loader-spinner';

export const Loading = () => {
    return(
        <div className='loading'>
            <Puff color="#00BFFF" height={550} width={80}/>
        </div>
    )
}