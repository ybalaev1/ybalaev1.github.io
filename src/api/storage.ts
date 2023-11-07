import { getDownloadURL, getStorage, ref, listAll } from 'firebase/storage';
const storage = getStorage();

export const getImages = async (path: string) => {
    const storageRef = ref(storage, '/' + path);
    return listAll(storageRef).then(async data => {
        try {
            return new Promise(async (resolve, reject) => {
                const { items } = data;
                let imagesList: any[] = [];
                for (let i=0;i<items.length;i++){
                    const imgRef = ref(storage, ''+items[i]);
                    const url = await getDownloadURL(imgRef).then();
                    imagesList.push({
                        url: url,
                      name: path,
                    })
                }
                return resolve(imagesList);
            }) 
        } catch (error) {
            console.log('getImages', error);
        }
    })
}