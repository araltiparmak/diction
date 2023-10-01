import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebaseConfig";

export function useMenuItems(path:string):string[] {

  const [menuItems, setMenuItems] = useState<string[]>([]);

  useEffect(() => {
    const docRef = doc(FIRESTORE_DB, path);

    const subscriber = onSnapshot(docRef, {
      next: (querySnapshot) => {
        const data: string[] = querySnapshot.data() as string[];
        setMenuItems(Object.keys(data).sort());
      }
    });
    return () => subscriber();
  }, []);

  return menuItems;
}