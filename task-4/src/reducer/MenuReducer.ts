export default function MenuReducer(
  state: { sideBar: boolean },
  action: { type: string },
): { sideBar: boolean } {
  switch (action.type) {
    case 'menu/TOGGLE_MENU':
      return { ...state, sideBar: !state.sideBar };

    default:
      return state;
  }
}
