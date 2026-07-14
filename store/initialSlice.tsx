import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  theme: 'light' | 'dark';
  isMenuOpen: boolean;
  isScrolled: boolean;
  isLoading: boolean;
  contactOpen: boolean;
}

const initialState: InitialState = {
  theme: 'light',
  contactOpen: false,
  isMenuOpen: false,
  isScrolled: false,
  isLoading: false,
};

const initialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setContactOpen: (state, action: PayloadAction<boolean>) => {
      state.contactOpen = action.payload;
    },
  },
});

export const { setTheme, toggleTheme, setMenuOpen, toggleMenu, setScrolled, setLoading, setContactOpen } = initialSlice.actions;
export default initialSlice.reducer;