import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
    {
        title: 'What is React',
        content: 'React is a front end js'
    },
    {
        title: 'Why use React',
        content: 'React is a fav JS lib for engineer'
    },
    {
        title:'How do you use React',
        content:'You use React by creating components'
    }
];

export default () => {
    return (
        <div>
            <Search/>
        </div>
        )
};