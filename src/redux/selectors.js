import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selecError = state => state.contacts.error;
export const selecFilter = state => state.filter;

export const selectFilteredContact = createSelector(
  [selectContacts, selecFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    if (filter === '') return contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
