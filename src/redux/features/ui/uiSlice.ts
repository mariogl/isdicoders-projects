import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  previews: boolean;
  compactMode: boolean;
}

const initialUi: UIState = { previews: false, compactMode: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUi,
  reducers: {
    showPreviews: (ui: UIState): UIState => ({
      ...ui,
      previews: true,
    }),
    hidePreviews: (ui: UIState): UIState => ({
      ...ui,
      previews: false,
    }),
    toggleCompactView: (ui: UIState): UIState => ({
      ...ui,
      compactMode: !ui.compactMode,
    }),
  },
});

export const UiReducer = uiSlice.reducer;

export const {
  showPreviews: showPreviewsActionCreator,
  hidePreviews: hidePreviewsActionCreator,
  toggleCompactView: toggleCompactViewActionCreator,
} = uiSlice.actions;
