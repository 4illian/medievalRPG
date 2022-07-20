import React from "react";
import "../../assets/stylesheets/game_start.css"


function Dialog (props, name, content) {

    const [placeholder, setPlaceholder] = React.useState('');

    const
        string = props.content,
        index = React.useRef(0);

    React.useEffect(() => {
        function tick() {
            setPlaceholder(prev => prev + string[index.current]);
            index.current++;
        }
        if (index.current < (string.length - 1)) {
            let addChar = setInterval(tick, 15);
            return () => clearInterval(addChar);
        }
    }, [placeholder]);

    return (
        <>
            <div className={"dialog"}>
                <div className={"dialog_name"}>
                    {props.name}
                </div>

                <div className={"dialog_content"}>
                    {placeholder}
                </div>
            </div>
        </>
    )
}

export default Dialog;
