import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import * as serviceWorker from './serviceWorker';

const elements = <div>
                    <h3>Text Input Type Form</h3>
                    <NameForm />
                    <h3>TextArea Form</h3>
                    <EssayForm />
                    <h3>Selection Form</h3>
                    <FlavorForm />
                    <h3>Mult-Field Form</h3>
                    <Reservation />
                </div>;

ReactDOM.render(elements, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
