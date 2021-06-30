import React from 'react'
import Marvel from '../components/Marvel/index';
import { withError } from '../error';

const Characters = () => (
    <section>
            <Marvel/>
    </section>
)


export default withError(Characters);