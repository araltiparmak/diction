import { doc, getDoc } from '@firebase/firestore';
import { Language, Segment } from '@/types/types';
import { DB } from '@/firebase.config';

export async function fetchData(
  language: Language,
  segment: Segment,
  subSegment?: 'items' | undefined,
) {
  try {
    const docRef = doc(DB, language, segment);
    const docSnap = await getDoc(docRef);

    if (subSegment) {
      return docSnap.data()[subSegment];
    }
    return docSnap.data();
  } catch (error) {
    console.error('Error fetching documents: ', error);
  }
}
