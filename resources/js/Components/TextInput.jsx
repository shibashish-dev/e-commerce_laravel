import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-neutral-200 bg-white/70 backdrop-blur-sm focus:border-primary focus:ring-primary focus:ring-opacity-20 rounded-xl shadow-sm transition-all duration-300 px-4 py-2.5 outline-none hover:border-neutral-300 focus:bg-white ' +
                className
            }
            ref={input}
        />
    );
});
