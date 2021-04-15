import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import SpinnerBox from '../components/Spinner/SpinnerBox';

const Code = (): JSX.Element => {
    const [error, setError] = useState('');

    const history = useHistory();

    async function getToken() {
        const urlParams = window.location.search;
        const code_verifier = localStorage.getItem('code_verifier');

        if (urlParams && code_verifier) {
            try {
                let response = await fetch(`.netlify/functions/get-token${urlParams}&code_verifier=${code_verifier}`);
                response = await response.json();
                localStorage.setItem('code_verifier', '');
                sessionStorage.setItem('profile', JSON.stringify(response));
                history.replace('/new-create-form');
            } catch (err) {
                console.error('Error!', err);
                setError(() => `Noe gikk galt, kontakt admin.`);
            }
        }
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div className="login">
            <h1>Logger inn..</h1>
            <div className="align-everything">
                {!error && <SpinnerBox />} {error && <p className="error-text">{error}</p>}
            </div>
        </div>
    );
};

export default Code;
