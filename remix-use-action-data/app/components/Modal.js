import { useRef } from 'react';
import { Form, useActionData } from '@remix-run/react';

import { useModal } from '~/context/modal';

const Modal = () => {

    const ref = useRef();

    const data = useActionData( ref );

    console.log( { useActionData: data } );

    const [ modal, setModal ] = useModal();

    if ( ! modal )
        return null;

    return (
        <dialog open>
            <Form method="post" action="/?index" ref={ ref }>
                <input type="text" placeholder="Write something…" />
                <button type="submit">Submit</button>
            </Form>
            <button onClick={ () => setModal( false ) }>Close Modal</button>
        </dialog>
    );

};

export default Modal;