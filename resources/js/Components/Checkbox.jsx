export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-neutral-300 text-primary shadow-sm focus:ring-primary transition-all duration-200 cursor-pointer h-5 w-5 ' +
                className
            }
        />
    );
}
