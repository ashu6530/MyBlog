'use client'
import { Switch } from "@/components/ui/switch"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
export default function ThemeToggle(){
    const {theme ,toggleTheme} = useContext(ThemeContext)
    console.log(theme);
    return(
        <div className="pt-2">
            <Switch 
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            className="bg-black dark:bg-gray-500 "
           />
        </div>
    )
}