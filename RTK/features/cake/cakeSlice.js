const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  cakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.cakes--;
    },
  },
});

module.exports = cakeSlice.reducer;

module.exports.cakeActions = cakeSlice.actions;
