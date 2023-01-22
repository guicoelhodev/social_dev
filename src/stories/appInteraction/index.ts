import { create } from 'zustand';

export type ISearch = 'feed' | 'search';
export type ISearchType = 'tabNews' | 'googleNews';

interface IAppInteractionStore {
  search: ISearch;
  searchType: ISearchType;
  handleSearch: (arg: ISearch) => void;
  handleSearchType: (arg: ISearchType) => void;
}

export const useAppInteractionStore = create<IAppInteractionStore>((set) => ({
  search: 'feed',
  searchType: 'tabNews',
  handleSearch: (arg) => set((state) => ({ search: arg })),
  handleSearchType: (arg) => set((state) => ({ searchType: arg })),
}));
