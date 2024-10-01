import './MainViewer.css';

function MainViewer({photoUrl}: {photoUrl: string}) {


    return (
        <>
            <img src={photoUrl} alt="" className='main-image' />
        </>
    )
}

export default MainViewer;