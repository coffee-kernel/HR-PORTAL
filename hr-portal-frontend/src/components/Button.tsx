import styles from './Button.module.css';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export const Button = ({ children, onClick, type = 'button' }: Props) => {
    return (
        <button className={styles.primary} onClick={onClick} type={type}>
            {children}
        </button>
    );
};