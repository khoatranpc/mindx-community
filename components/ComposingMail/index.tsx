import React from 'react';
import SunEditor from 'suneditor-react';
import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';
import './styles.scss';

interface Props extends SunEditorReactProps {
    value?: string;
    onChange?: (value: string) => void;
}
const ComposingMail = (props: Props) => {
    return (
        <div className='composingMail'>
            <SunEditor
                {...props}
                height='fit-content'
                onChange={(content) => {
                    props.onChange?.(content);
                }}
                setContents={props.value ?? ''}
            />
        </div>
    )
}

export default ComposingMail;