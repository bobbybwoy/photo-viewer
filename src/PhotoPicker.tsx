import './PhotoPicker.css';

function PhotoPicker({photoIds, getSelectedIndex}: {photoIds: number[], getSelectedIndex: (selectedIndex: number) => void}) {
    return (
        <div className='pp-container'>
            {
                photoIds.map((photoId, index) => {
                    return (
                        <div>
                            <img key={index} 
                                src={`https://picsum.photos/id/${photoId}/240/150`}
                                alt=""
                                onClick={() => getSelectedIndex(index)}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default PhotoPicker;