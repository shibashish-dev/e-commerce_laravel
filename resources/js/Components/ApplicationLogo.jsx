export default function ApplicationLogo({ className = "", ...props }) {
    return (
        <img
            src="/assets/images/logo.png"
            alt="Avero"
            className={`application-logo ${className}`.trim()}
            {...props}
        />
    );
}
