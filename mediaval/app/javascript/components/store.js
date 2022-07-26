import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        current_player: null,
        dialogs: null,
        setCurrentPlayer: (player) =>
          set(
            (state) => (state.current_player = player),
            false,
            "setCurrentPlayer"
          ),
        setDialogs: (dialogs) =>
          set((state) => (state.dialogs = dialogs), false, "setDialogs"),
      }),
      {
        name: "food-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);

export default useStore;
