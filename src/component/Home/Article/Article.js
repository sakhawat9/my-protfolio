import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Article = () => {
    const history = useHistory()
    const handleClick = () => {
        console.log('click');
        history.push('/project')
    }
    return (
        <div>
            <Container>
                <div className="row py-5">
                    <div className="pr-5">
                    <h2>Some of my articles</h2>
                    </div>
                    <div>
                        <button onClick={handleClick} className="btn-brand">Article</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Article;