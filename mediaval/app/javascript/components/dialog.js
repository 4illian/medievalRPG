import React, { forwardRef, useState } from "react";
import "../../assets/stylesheets/game_start.css";
const Dialog = (props, ref) => {
  const [placeholder, setPlaceholder] = React.useState("");
  const [countDialog, setCountDialog] = useState(0);
  //   const string = props.content;
  //   index = React.useRef(0);

  //   React.useEffect(() => {
  //     function tick() {
  //       setPlaceholder((prev) => prev + string[index.current]);
  //       index.current++;
  //     }
  //     if (index.current < string.length - 1) {
  //       let addChar = setInterval(tick, 15);
  //       return () => clearInterval(addChar);
  //     }
  //   }, [placeholder]);

  return (
    <>
      <div className={"dialog"}>
        <div className={"dialog_name"}>{props.name}</div>

        <div className={"dialog_content"}>
          {props.content?.[countDialog]?.content}
          <div>
            <button
              className="nex_button"
              onClick={() => {
                setCountDialog((prev) => prev + 1);
                if (props.content?.[countDialog] === undefined) {
                  props.setGameMode("game");
                }
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
