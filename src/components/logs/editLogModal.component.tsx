import React, { useState } from 'react';
import M from 'materialize-css';

export type Props = {

}

export default function EditLogModal(props: Props) {

    const [message, setMessege] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (message === '' || tech === '') {
            M.toast({ html: 'Please Enter a message and tech' });
        } else {
            setMessege('');
            setTech('');
            setAttention(false)
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={styles.modal}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessege(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                    </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention as any}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
                        Enter
                    </a>
                </div>

            </div>
        </div>
    );
}


const styles = {
    modal: {
        width: '75%',
        height: '75%'
    }
}