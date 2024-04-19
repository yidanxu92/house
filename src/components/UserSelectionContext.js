// 创建一个上下文
import React, { createContext, useState, useContext } from 'react';

const UserSelectionContext = createContext();

// 创建一个上下文的提供者
export const UserSelectionProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <UserSelectionContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserSelectionContext.Provider>
  );
};

// 自定义 hook 来访问上下文
export const useUserSelection = () => {
  return useContext(UserSelectionContext);
};