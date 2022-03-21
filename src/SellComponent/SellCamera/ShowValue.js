import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Value from './Value';

const ShowValue = () => {
    const [val, setValue] = useState([])


    useEffect(() => {
        fetch('https://arcane-thicket-06182.herokuapp.com/getValues')
            .then(res => res.json())
            .then(data => setValue(data))
    }, [])

    return (
        <div>
             <div className="text-center">
                <div className="row row-cols-3 row-cols-md-3 g-4 rounded-3">
                    {
                        val.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    {
                        val.map(val => <Value

                            val={val}>
                        </Value>)
                    }
                </div>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@My Rate {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default ShowValue;