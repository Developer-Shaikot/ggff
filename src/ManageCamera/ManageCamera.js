import React, { useEffect, useState } from 'react';
import ManageCameraData from './ManageCameraData'
const ManageCamera = () => {

    const [manage, setManage] = useState([])


    useEffect(() => {
        fetch('https://arcane-thicket-06182.herokuapp.com/addCameras')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])

    return (
        <div>
             <div className="text-center">
                <div className="row row-cols-3 row-cols-md-3 g-4 rounded-3">
                    {
                        manage.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    {
                        manage.map(manage => <ManageCameraData

                            manage={manage}>
                        </ManageCameraData>)
                    }
                </div>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Gadgefy {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default ManageCamera;