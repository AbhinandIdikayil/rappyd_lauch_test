import { useTheme } from "@/context/ThemeProvider"
import { useEffect } from "react";

export function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        console.log('Current Theme:', theme);
        console.log('Document Classes:', document.documentElement.className);
    }, [theme])

    return (
        <button
            className="
              bg-secondary 
              text-foreground 
              p-2 
              rounded 
              transition-colors 
              duration-300
            "
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    )
}