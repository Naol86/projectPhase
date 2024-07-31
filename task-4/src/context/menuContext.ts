import { createContext, useContext } from 'react';

const MenuContext = createContext<
  { sideBar: { sideBar: boolean }; sideBarDispatch: any } | undefined
>(undefined);

const useMenuContext = (): any => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export { useMenuContext };
export default MenuContext;
