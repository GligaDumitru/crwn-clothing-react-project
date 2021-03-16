import { UPDATE_COLLECTIONS } from '../types';

export const updateCollection = (collections) => ({
  type: UPDATE_COLLECTIONS,
  payload: collections,
});
