import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const ToggleMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <MenuOutlined onClick={() => setOpen(!open)} />
            {open && (
                <button>
                    
                </button>
            )}
        </>
    );
};

export default ToggleMenu;
