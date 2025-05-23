import { createContext, useContext } from 'react';
import { ITimeTable } from '@/interfaces/interfaces';

export const TimetableContext = createContext<{
  editableTimetable: ITimeTable;
  setEditableTimetable: React.Dispatch<React.SetStateAction<ITimeTable>>;
} | null>(null);

export const useTimetable = () => {
  const context = useContext(TimetableContext);
  if (!context) throw new Error('TimetableContext not found');
  return context;
};
