
export interface IModalProps {
    title?: String;
    message?: string;
    buttonText: string;
    fields?: IModalFields[];
    button?: 'YesNo' | 'SaveCancel';
    closeButton?: boolean;
    buttonColorStyle?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    confirmButtonAsButtonText?: boolean;
    static?: boolean;
}

interface IModalFields {
    name: string;
    type: 'text' | 'password' | 'email' | 'dropdown' | 'textarea' | 'checkbox';
    placeholder?: string;
}