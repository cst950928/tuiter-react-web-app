import React, {useState} from 'react';

const EditItem = ({profile, field, setProfile}) => {
    const id_ = field.id;

    const [isActive, setIsActive] = useState(false);
    const handleChange = (e) => {
        setProfile(prev => ({...prev, [id_]: e.target.value}));
        if (e.target.value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    return (
        <div className={`w-100 row mt-4`}>
            <div className={`float-label col border border-muted text-muted p-0 ms-2 me-2 light-bold rounded-2`}>
                {!field.multiLine &&
                <input
                    id={id_}
                    type="text"
                    value={profile[id_]}
                    onChange={handleChange}/>}

                {field.multiLine &&
                    <textarea
                        id={id_}
                        type="text"
                        rows={3}
                        value={profile[id_]}
                        onChange={handleChange}/>}

                <label htmlFor="name"
                       className={`text-muted ${isActive || profile[id_] !=='' ? "Active" : (field.multiLine ? 'float-mid' : '')}` }>
                    {id_[0].toUpperCase() + id_.substring(1)}
                </label>
            </div>
        </div>
    )
}

export default EditItem;