import { getDoc } from 'firebase/firestore';
import {create} from 'zustand';
import {db} from "./firebase";

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
    if(!uid) return set({currentUser:null, isLoading: false})
    

    try {
        const docRef=doc(debug, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
           set({currentUser:docSnap.data(), isLoading: false})
        }
    } catch (err) {
        console.log(err);
        return set({currentUser: null, isLoading: false});
    }
},
}));