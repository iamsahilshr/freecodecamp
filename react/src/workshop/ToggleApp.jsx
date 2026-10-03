import { useState } from "react"
import "../css/toggle-app.css"

function ToggleApp() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div id="toggle-container">
                <button
                    id="toggle-button"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"} Message
                </button>

                {isVisible && (
                    <p id="message">I Love Coding</p>
                )}
            </div>
        </>
    )
}

export default ToggleApp