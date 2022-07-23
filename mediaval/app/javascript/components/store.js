import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        current_player: null,
        setCurrentPlayer: (player) =>
          set(
            (state) => (state.current_player = player),
            false,
            "setCurrentPlayer"
          ),
      }),
      {
        name: "food-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);

export default useStore;
