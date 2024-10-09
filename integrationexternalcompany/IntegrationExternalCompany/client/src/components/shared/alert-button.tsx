import { Button, Tooltip } from "antd"
import { CopyOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';

interface IProps {
    messages: string;
}

export const AlertButton = (props: IProps) => {
    const copyTextToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast.success("Текст успешно скопирован в буфер обмена!"); 
    };
    return (
        <Tooltip title="Копировать">
            <Button style={{ color: 'black' }} type="link" icon={<CopyOutlined />} onClick={() => copyTextToClipboard(props.messages)}></Button>
            <ToastContainer autoClose={1000} />
        </Tooltip>
    )
}